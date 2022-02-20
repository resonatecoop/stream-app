import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import { getTrackingPermissionsAsync, requestTrackingPermissionsAsync } from 'expo-tracking-transparency';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import CookiePolicy from './client/components/CookiePolicy';

export default function App() {
  const [trackingPermissions, setTrackingPermissions] = useState(false);

  useEffect(() => {
    (async () => {
      const { granted } = await getTrackingPermissionsAsync();
      if (granted) {
        setTrackingPermissions(true);
      } else {
        const { status } = await requestTrackingPermissionsAsync();
        setTrackingPermissions(status === 'granted');
      }
    })();
  }, []);

  const mainView =
    <>
      <StatusBar
        hidden={true}
        style="auto"
      />
      <WebView
        sharedCookiesEnabled={true}
        source={{ uri: 'https://stream.resonate.coop/discover' }}
        style={styles.container}
      />
    </>

  return trackingPermissions ? mainView : <CookiePolicy />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
