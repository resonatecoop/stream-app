import React from 'react';
import {
  Image,
  StyleSheet,
} from 'react-native';

export default function ResonateLogo() {
  return (
    <Image
      style={styles.image}
      source={require('../../assets/icon.png')}
    />
  )
}

const styles = StyleSheet.create({
  image: {
    height: 360,
    marginHorizontal: '10%',
    marginTop: -80,
    marginBottom: -10,
    width: '80%',
  },
});
