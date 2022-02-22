import {
  getTrackingPermissionsAsync,
  requestTrackingPermissionsAsync,
} from 'expo-tracking-transparency';
import React, {
  useEffect,
  useState,
} from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';
import CookiePolicy from './client/components/CookiePolicy';
import CustomStatusBar from './client/components/CustomStatusBar';
import {
  cookiePreferences,
  getPermissionsGranted,
  storePermissionsGranted,
} from './client/helpers/Permissions';

export default function App() {
  const [trackingPermissions, setTrackingPermissions] = useState(false);
  const [isRequestingPermissions, setIsRequestingPermissions] = useState(true);
  const [didPermissionsChange, setDidPermissionsChange] = useState(false);

  useEffect(() => {
    (async () => {
      const arePermissionsGrantedHistorically = await getPermissionsGranted();
      const { granted } = await getTrackingPermissionsAsync();
      if (granted) {
        setTrackingPermissions(true);
        if (!arePermissionsGrantedHistorically) {
          storePermissionsGranted(true);
          setDidPermissionsChange(true);
        }
      } else {
        const { status } = await requestTrackingPermissionsAsync();
        const arePermissionsGranted = status === 'granted';
        setTrackingPermissions(arePermissionsGranted);
        if (arePermissionsGranted !== arePermissionsGrantedHistorically) {
          storePermissionsGranted(arePermissionsGranted);
          setDidPermissionsChange(true);
        }
      }

      setIsRequestingPermissions(false);
    })();
  }, []);

  return (
    <SafeAreaProvider>
      <CustomStatusBar isRequestingPermissions={isRequestingPermissions} />
      {
        isRequestingPermissions
          ? <CookiePolicy />
          : <WebView
            allowsBackForwardNavigationGestures
            cacheEnabled={didPermissionsChange}
            injectedJavaScript={cookiePreferences(trackingPermissions)}
            pullToRefreshEnabled
            sharedCookiesEnabled={trackingPermissions}
            source={{
              uri: 'https://stream.resonate.coop/discover',
              headers: {
                'doNotTrack': trackingPermissions ? '0' : '1',
              },
            }}
            style={styles.container}
            textInteractionEnabled={false}
          />
      }
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
