import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import color from '../color/color';
import HomeScreen from '../src/components/screens/home/HomeScreen';
import ServiceScreen from '../src/components/screens/ServiceScreen';
import {enableScreens} from 'react-native-screens';
import HomePageHeader from '../src/components/common/header/HomePageHeader';

const Stack = createNativeStackNavigator();
const bgcolor = color.light;

function StackNavigation() {


  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        options={{
          headerShown: false,
        }}
        component={HomeScreen}
      />
      <Stack.Screen
        name="ServiceScreen"
        options={{
          headerShown: false,
        }}
        component={ServiceScreen}
      />
      <Stack.Screen
        name="HomePageHeader"
        options={{
          headerShown: false,
        }}
        component={HomePageHeader}
      />
    </Stack.Navigator>
  );
}

export default StackNavigation;
