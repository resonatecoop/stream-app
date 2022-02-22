import {
  getTrackingPermissionsAsync,
  requestTrackingPermissionsAsync,
} from 'expo-tracking-transparency';
import React, {
  useEffect,
  useState,
} from 'react';
import {
  StyleSheet,
  useColorScheme,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';
import CookiePolicy from './client/components/CookiePolicy';
import CustomStatusBar from './client/components/CustomStatusBar';

export default function App() {
  const [trackingPermissions, setTrackingPermissions] = useState(false);
  const colorScheme = useColorScheme();
  const isDark: boolean = colorScheme === 'dark';

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

  const content = trackingPermissions
    ? <WebView
      sharedCookiesEnabled={true}
      source={{ uri: 'https://stream.resonate.ninja/discover' }}
      style={styles.container}
    />
    : <CookiePolicy />;

  return (
    <SafeAreaProvider>
      <CustomStatusBar trackingPermissions={trackingPermissions} />
      {content}
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
