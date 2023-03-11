/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import ContentJoke from './src/components/ContentJoke/ContentJoke';
import Footer from './src/components/Footer/Footer';
import Header from './src/components/Header/Header';
import TitleJoke from './src/components/TitleJoke/TitleJoke';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
});
function App(): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Header />
          <TitleJoke />
          <ContentJoke />
          <Footer />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
