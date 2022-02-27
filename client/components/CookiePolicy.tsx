import Constants from 'expo-constants';
import React from 'react';
import {
  Image,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';

type Props = {
  setPromptForPermissions: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CookiePolicy({ setPromptForPermissions }: Props) {
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
        {"\n"}
        {"\n"}
        {"\n"}
        Resonate only uses cookies to guarantee core functionalities, such as keeping you logged in for a while, or remembering your theme settings. No other type of activity is tracked.
        {"\n"}
      </Text>
      {Platform.OS === 'ios' && (
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
      <Pressable
        style={styles.button}
        onPress={() => setPromptForPermissions(true)}>
        <Text
          style={[styles.boldText, styles.text]}>
          Continue
        </Text>
      </Pressable>
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
    fontSize: 18,
  },
});
