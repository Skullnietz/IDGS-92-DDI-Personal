import React, { Component } from 'react';
import {View, FlatList} from 'react-native';
import { StyleSheet,ScrollView,NativeBaseProvider,Box,Button, Heading ,AspectRatio, Image, Center, HStack,Stack, Text} from "native-base";

class HomeBox1 extends Component {
  constructor(props){
    super(props);
    this.state={
      loading: false,
      rickymorty: [],
      url: 'https://rickandmortyapi.com/api/character'
    }
  }

  componentDidMount(){
    this.getCharacter();

  }

  getCharacter = () => {
    this.setState({loading:true})
    fetch(this.state.url)
    .then(res => res.json())
    .then(res=>{
      this.setState({
        character: res.results,
        url: res.next,
        loading: false
      })
    })

  };

  state = { isHungry: true };

  render() { 
    if(this.state.loading){
      return (
        <View>
          <Text>Descargando Personaje</Text>
        </View>
      );
    }
    return ( 
      <View  style={{flex:1, paddingTop:50, paddingLeft:5}}>
          <FlatList data={this.state.character}
          renderItem={
            ({item}) => <Text>{ item.name }</Text>
            }/>
          

        </View>
    ); 
  }
}

    export default () => {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="3">
                
                <HomeBox1/>
                
                
            </Center>
          </NativeBaseProvider>
        );
    };
    