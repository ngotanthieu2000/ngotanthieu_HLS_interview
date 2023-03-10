/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, View} from 'react-native';
import Header from './src/components/Header/Header';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <View>
        <Header />
      </View>
    </SafeAreaView>
  );
}

export default App;
