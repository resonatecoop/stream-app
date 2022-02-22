import Constants from 'expo-constants';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';

export default function CookiePolicy() {
  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/icon.png')}
      />
      <Text
        style={styles.text}>
        {"\n"}
        {"\n"}
        Resonate only uses cookies to guarantee core functionalities, such as keeping you logged in for a while, or remembering your theme settings. No other type of activity is tracked.
        {"\n"}
      </Text>
      {Platform.OS === 'ios' && (
        <>
          <Text
            style={styles.text}>
            These settings can be found at
          </Text>
          <Text
            style={{ ...styles.boldText, ...styles.text }}>
            Settings &gt; Privacy &gt; Tracking
          </Text>
        </>
      )}
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
