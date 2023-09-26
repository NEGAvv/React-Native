import React, { useState } from 'react';
// import styles from './styles'
import { 
  NativeBaseProvider, 
  Text,
   Box, 
   Center, Heading, 
   VStack, 
   Input, 
   FormControl, 
   Link, 
   Button, 
   HStack } 
from "native-base";

const Login = () => {

  return (
    <NativeBaseProvider >

      <Center w="100%" bg="#028090">
        <Box safeArea p="2" py="20" w="90%" maxW="290" h='100%'>
          <Heading size="lg" fontWeight="600" color="white" >
            Welcome
          </Heading>
          <Heading mt="1" color="white" fontWeight="medium" size="xs">
            You should <Text fontSize="md" fontWeight="900">Sign in</Text> to continue!
          </Heading>
          
          <VStack space={3} mt="5">
            <FormControl >
              <Text color="white" py="1">Email ID</Text>
              <Input placeholder="Enter your email" variant="underlined" />
            </FormControl>
            <FormControl>
              <Text color="white" py="1">Password</Text>
              <Input type="password" 
              placeholder="Enter your password" 
              variant="underlined"
               />
            </FormControl>
            <Button mt="2"  bg="#34B5C8">
              <Text fontSize="md" fontWeight="900" color="white"> Sign in </Text>
            </Button>
            <HStack mt="6" justifyContent="center">
            </HStack>
          </VStack>
        </Box>
      </Center>
    </NativeBaseProvider>

  )
}



export default Login;