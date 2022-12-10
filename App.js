/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import themeNative from './src/components/common/Fonts/FontsNativeBase';
import BottomNavigation from './navigation/BottomNavigation';
import StackNavigation from './navigation/StackNavigation';

const App = () => {
  return (
    <SafeAreaProvider>
      <NativeBaseProvider theme={themeNative}>
        <NavigationContainer>
          <BottomNavigation />
        </NavigationContainer>
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
