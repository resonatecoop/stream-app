import Constants from 'expo-constants';
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import ResonateLogo from './ResonateLogo'

type Props = {
  promptForPermissions: boolean;
  setPromptForPermissions: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CookiePolicy({ promptForPermissions, setPromptForPermissions }: Props) {
  return (
    <ScrollView style={styles.container}>
      <ResonateLogo />
      <Text
        style={styles.text}>
        {promptForPermissions && "\n \n \n \n \n \n \n \n \n \n \n"}
        Resonate only uses cookies to guarantee core functionalities, such as keeping you logged in for a while, or remembering your theme settings. No other type of activity is tracked.
        {"\n"}
      </Text>
      {Platform.OS === 'ios' && !promptForPermissions && (
        <>
          <Text
            style={styles.text}>
            These settings are located at:
          </Text>
          <Text
            style={[styles.boldText, styles.text]}>
            Settings &gt; Privacy &gt; Tracking
          </Text>
        </>
      )}
      {!promptForPermissions &&
        <>
          <Text
            style={{ ...styles.linkText, ...styles.text }}
            onPress={() => WebBrowser.openBrowserAsync('https://github.com/resonatecoop')}>
          {"\n"}
            View Resonate's Open Source Code on GitHub.com (External Link)
          {"\n"}
          </Text>
          <Pressable
            style={styles.button}
            onPress={() => setPromptForPermissions(true)}>
            <Text
              style={[styles.boldText, styles.text]}>
              Continue
            </Text>
          </Pressable>
        </>
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  boldText: {
    fontWeight: 'bold',
  },
  button: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#181A1B',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: '10%',
  },
  linkText: {
    textDecorationLine: 'underline',
  },
  text: {
    fontSize: 18,
  },
});
