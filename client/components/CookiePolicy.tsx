import Constants from 'expo-constants';
import React from 'react';
import { Image, Linking, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function TrackingPermissionsDeclined() {
  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/icon.png')}
      />
      <Text
        style={styles.text}>
        To ensure you get the best experience, Resonate uses cookies. Functional cookies are used to keep you logged in for a while and remember your theme settings. Disallowing tracking permissions precludes the use of this app.{"\n"}
        {"\n"}
      </Text>
      <Text
        style={styles.link}
        onPress={() => Linking.openURL('https://resonate.is/cookie-policy')}>
        Resonate's Cookie Policy
      </Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: Constants.statusBarHeight * 1.5,
  },
  link: {
    fontSize: 24,
    textDecorationLine: 'underline',
  },
  image: {
    height: 360,
    marginLeft: '10%',
    marginRight: '10%',
    width: '80%',
  },
  text: {
    fontSize: 20,
  }
});
