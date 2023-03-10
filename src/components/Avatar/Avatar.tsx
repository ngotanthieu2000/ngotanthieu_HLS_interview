import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  username: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  name: {
    fontSize: 8,
    fontWeight: '500',
  },
  textWeightBold: {
    fontWeight: 'bold',
  },
  logo: {
    width: 30,
    height: 30,
    borderRadius: 45,
  },
});

export default function Avatar() {
  return (
    <View style={styles.container}>
      <View style={styles.username}>
        <Text style={styles.name}>Handicrafted by</Text>
        <Text style={[styles.name, styles.textWeightBold]}>Jim HLS</Text>
      </View>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://i.imgur.com/1o1zEDM.png',
        }}
      />
    </View>
  );
}
