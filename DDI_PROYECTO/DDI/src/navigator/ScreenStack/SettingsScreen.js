import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NativeBaseProvider, Box } from "native-base";


const SettingsScreen = () => {
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">Native Base</Box>
    </NativeBaseProvider>
  );
};
export default SettingsScreen;
