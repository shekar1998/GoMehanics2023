import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../src/components/screens/home/HomeScreen';
import StackNavigation from './StackNavigation';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import React from 'react';
import color from '../color/color';

const Tab = createBottomTabNavigator();
const bgcolor = color.theme;

export default function BottomNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({route,navigation}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'ios-home-sharp' : 'ios-home-outline';
          } else if (route.name === 'HomeScreen') {
            iconName = focused ? 'ios-heart-sharp' : 'ios-heart-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'flame' : 'flame-outline';
          } else if (route.name === 'Settings12') {
            iconName = focused ? 'color-filter' : 'color-filter-outline';
          }
          
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: bgcolor.buttonColor,
        tabBarInactiveTintColor: bgcolor.headerText,
        tabBarStyle: {
          paddingVertical: 5,
          borderTopLeftRadius: 35,
          borderTopRightRadius: 35,
          position: 'absolute',
          height: 70,
          shadowOffset: {width: -4, height: 4},
          shadowColor: 'blue',
          shadowOpacity: 0.2,
          shadowRadius: 1,
          elevation: 9,
          backgroundColor: '#edf3f5',
        },
        tabBarLabelStyle: {paddingBottom: 3},
      })}>
      <Tab.Screen
        // options={{
        //   headerShown: false,
        // }}
        options={({route,navigation}) => ({
         headerShown:false,
         
        })}
        name="Home"
        component={StackNavigation}
      />
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="Settings"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="Settings12"
        component={HomeScreen}
      />
    </Tab.Navigator>
  );
}
