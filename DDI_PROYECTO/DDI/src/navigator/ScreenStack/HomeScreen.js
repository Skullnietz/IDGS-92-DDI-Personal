import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {ButtonStyles, RaisedButton} from 'react-native-material-kit';
const {buttonText} = ButtonStyles;

const HomeScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: 'black'}}>UI con react-native-material-kit</Text>
      <RaisedButton>
        <Icon name="home" size={30} color="#009" />
        <Text style={buttonText()}>Boton</Text>
      </RaisedButton>
    </View>
  );
};

export default HomeScreen;
