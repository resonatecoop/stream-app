import Constants from 'expo-constants';
import React from 'react';
import { Image, Linking, Platform, ScrollView, StyleSheet, Text } from 'react-native';

export default function CookiePolicy() {
  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/icon.png')}
      />
      {Platform.OS === 'ios' && (
        <>
          <Text
            style={styles.text}>
            If you are not prompted requesting permissions, go to
          </Text>
          <Text
            style={{ ...styles.boldText, ...styles.text }}>
            Settings &gt; Privacy &gt; Tracking
          </Text>
          <Text
            style={styles.text}>
            and enable
          </Text>
          <Text
            style={{ ...styles.boldText, ...styles.text }}>
            Allow Apps to Request to Track
            {"\n"}
          </Text>
        </>
      )}
      <Text
        style={styles.text}>
        {"\n"}
        To ensure you get the best experience, Resonate uses cookies.
        Functional cookies are used to keep you logged in for a while and remember your theme settings.
        Disallowing tracking permissions precludes the use of this app.
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
  boldText: {
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: '10%',
  },
  link: {
    fontSize: 24,
    textDecorationLine: 'underline',
  },
  image: {
    height: 360,
    marginHorizontal: '10%',
    width: '80%',
  },
  text: {
    fontSize: 20,
  },
});
