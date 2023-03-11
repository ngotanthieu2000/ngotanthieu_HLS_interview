import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    padding: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'blue',
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
    borderTopColor: 'black',
    borderTopWidth: 0.5,
  },
  footerContent: {
    fontSize: 12,
  },
  subContent: {
    fontWeight: '500',
  },
});

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.footerContent}>
        This appis create as part of HLsolutions program.The materials contained
        on this website are provided for gerenal infomation only and do not
        constitute any from of advice.HLS assumes no responsibility for accuracy
        of any particular statement and accept no liability for any loss or
        damage which may arise from reliance on the information contained on
        this site
      </Text>
      <Text style={styles.subContent}>Copyright 2021 HLS</Text>
    </View>
  );
}
