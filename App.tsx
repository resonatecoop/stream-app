import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <>
      <StatusBar
        hidden={false}
        style="dark"
      />
      <WebView 
        sharedCookiesEnabled={true}
        source={{ uri: 'https://stream.resonate.coop/discover' }}
        style={styles.container}
        />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
