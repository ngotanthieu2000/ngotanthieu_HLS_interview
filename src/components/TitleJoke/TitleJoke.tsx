import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#29b363',
  },
  title: {
    marginBottom: 5,
    fontSize: 16,
    color: '#ffffff',
  },
  subTitle: {
    marginTop: 5,
    fontSize: 10,
    color: '#ffffff',
  },
});

export default function TitleJoke() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>A joke a day keeps the doctor away</Text>
      <Text style={styles.subTitle}>
        If you joke wrong way, your teeth have to pay.(Serious)
      </Text>
    </View>
  );
}
