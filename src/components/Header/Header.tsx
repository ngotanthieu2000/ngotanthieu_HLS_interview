import React from 'react';
import {StyleSheet, View} from 'react-native';
import Avatar from '../Avatar/Avatar';
import Logo from '../Logo/Logo';
const styles = StyleSheet.create({
  container: {
    paddingLeft: 50,
    paddingRight: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: 'blue',
  },
});

export default function Header() {
  return (
    <View style={styles.container}>
      <Logo />
      <Avatar />
    </View>
  );
}
