import Constants from 'expo-constants';
import React from 'react';
import { Image, Linking, StyleSheet, Text, View } from 'react-native';

export default function TrackingPermissionsDeclined() {
  return (<View style={styles.container}>
    <Image
      style={styles.image}
      source={require('../../assets/icon.png')}
    />
    <Text
      style={styles.text}>
      {"\n"}
      To ensure you get the best experience, Resonate uses cookies. Functional cookies are used to keep you logged in for a while and remember your theme settings. Disallowing tracking permissions precludes use of this app. To learn more, please visit:{"\n"}
    </Text>
    <Text
      style={{ ...styles.link, ...styles.text }}
      onPress={() => Linking.openURL('https://resonate.is/cookie-policy')}>
      Resonate's Cookie Policy
    </Text>
    <Text
      style={styles.text}>
      {"\n"}
      In the event that you declined tracking permissions, please close and re-open, and, failing that, reinstall the app to be prompted again. Thank you.
    </Text>
  </View>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  link: {
    color: 'blue',
  },
  image: {
    height: 360,
    marginLeft: '25%',
    marginRight: '25%',
    width: '50%',
  },
  text: {
    fontSize: 24,
    marginLeft: Constants.statusBarHeight * 1.5,
    marginRight: Constants.statusBarHeight * 1.5,
  }
});
