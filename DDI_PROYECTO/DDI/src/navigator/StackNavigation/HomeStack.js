import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import HomeScreen from '../ScreenStack/HomeScreen.js';
import SettingsComponent from '../ScreenStack/SettingsScreen.js';
import Icon from 'react-native-vector-icons/Ionicons';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Tab.Navigator
       screenOptions={({ route }) => ({
           tabBarIcon: ({ focused, color, size }) => {
             let iconName;

             if (route.name === 'Home') {
               iconName = focused
                 ? 'home'
                 : 'home';
             } else if (route.name === 'Settings') {
               iconName = focused ? 'settings' : 'settings';
             }

             // You can return any component that you like here!
             return <Icon name={iconName} size={size} color={color} />;
           },
           tabBarActiveTintColor: 'blue',
           tabBarInactiveTintColor: 'gray',
         })}
         >
   
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        
      />
      <Tab.Screen
        name="Settings"
        component={SettingsComponent}
        
      />
    </Tab.Navigator>
  );
};

export default HomeStack;
