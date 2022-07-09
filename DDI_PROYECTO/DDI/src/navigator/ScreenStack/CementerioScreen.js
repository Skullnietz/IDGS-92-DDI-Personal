import React from 'react';
import {Icon, Ionicons, MaterialIcons } from 'react-native-vector-icons/Ionicons';
import { VStack, Input, Button, IconButton, Text, NativeBaseProvider, Center, Box, Divider, Heading } from 'native-base';


function SearchBar() {
  return <Box alignItems="center" maxW="400" w="100%" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
    borderColor: "coolGray.600",
    backgroundColor: "gray.700"
  }} _web={{
    shadow: 2,
    borderWidth: 0
  }} _light={{
    backgroundColor: "gray.50"
  }}>
  <Box><VStack my="4" m={2} p={3} space={5} w="100%" divider={<Box px="2">
          <Divider />
        </Box>}>
      <VStack w="100%" space={5} alignSelf="center">
        
        <Heading fontSize="lg" alignItems="center" justifyContent="center">Cementerio Virtual</Heading>
        
        <Input alignItems="center" justifyContent="center" placeholder="Buscar Difunto" variant="filled" width="100%" borderRadius="10" py="1" px="2" borderWidth="0"  />
      </VStack>
    </VStack>
    </Box>
    </Box>;;
}

function CementerioScreen() {
  return <Center flex={1} px="2">
      <SearchBar />
    </Center>;
}

    export default () => {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="3">
                <CementerioScreen />
            </Center>
          </NativeBaseProvider>
        );
    };