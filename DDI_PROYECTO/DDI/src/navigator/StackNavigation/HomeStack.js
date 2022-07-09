import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import HomeScreen from '../ScreenStack/HomeScreen.js';
import SettingsComponent from '../ScreenStack/SettingsScreen.js';
import CementerioScreen from '../ScreenStack/CementerioScreen.js';
import Icon from 'react-native-vector-icons/Ionicons';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Tab.Navigator
       screenOptions={({ route }) => ({
           tabBarIcon: ({ focused, color, size }) => {
             let iconName;

             if (route.name === 'Inicio') {
               iconName = focused
                 ? 'home'
                 : 'home';
             }else if (route.name === 'Cementerio') {
              iconName = focused ? 'grid' : 'grid';
            } else if (route.name === 'Contacto') {
               iconName = focused ? 'help-buoy' : 'help-buoy';
             } 

             // You can return any component that you like here!
             return <Icon name={iconName} size={size} color={color} />;
           },
           tabBarActiveTintColor: 'orange',
           tabBarInactiveTintColor: 'gray',
         })}
         >
   
      
      
      <Tab.Screen
        name="Inicio"
        component={HomeScreen}
        
      />
      <Tab.Screen
        name="Cementerio"
        component={CementerioScreen}
        
      />
      <Tab.Screen
        name="Contacto"
        component={SettingsComponent}
        
      />
    </Tab.Navigator>
  );
};

export default HomeStack;
