import React from 'react';
import {Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  logo: {
    width: 30,
    height: 30,
    borderColor: 'red',
  },
});

export default function Logo() {
  return (
    <Image
      style={styles.logo}
      source={{
        uri: 'https://ylab.law.harvard.edu/wp-content/uploads/2016/07/hls-logo.png',
      }}
    />
  );
}
