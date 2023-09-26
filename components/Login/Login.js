import React, { useState } from 'react';
import { NativeBaseProvider, 
  Text, 
  Box, 
  Center, 
  Heading, 
  VStack, 
  Input, 
  FormControl, 
  Button 
} from "native-base";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const users = [
    { email: 'hudolija@gmail.com', password: 'alina2302' },
    { email: 'admin', password: 'admin' },
  ];

  const handleLogin = () => {
    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
      setIsAuthenticated(true);
      setShowSuccessMessage(true);
      setShowErrorMessage(false);
    } else {
      setIsAuthenticated(false);
      setShowSuccessMessage(false);
      setShowErrorMessage(true);
    }
  };

  return (
    <NativeBaseProvider>
      <Center w="100%" bg="#028090" h='100%'>
        <Box safeArea p="4" py="10" w="90%" maxW="290"  bg="#EB7100" shadow={9} rounded="lg">
          <Heading size="lg" fontWeight="600" color="white">
            Welcome
          </Heading>
          <Heading mt="1" color="white" fontWeight="medium" size="xs">
            You should <Text fontSize="md" fontWeight="900">Sign in</Text> to continue!
          </Heading>

          <VStack space="3" mt="5">
            <FormControl>
              <Text color="white" py="1" fontSize="md" fontWeight="900">Email ID</Text>
              <Input
                fontSize="sm"
                color="white"
                placeholder="Enter your email"
                placeholderTextColor= 'white' 
                variant="underlined"
                onChangeText={(text) => setEmail(text)}
                value={email}
              />
            </FormControl>
            <FormControl>
              <Text color="white" py="1" fontSize="md" fontWeight="900">Password</Text>
              <Input
                fontSize="sm"
                color="white" 
                type="password"
                placeholder="Enter your password"
                placeholderTextColor= 'white' 
                variant="underlined"
                onChangeText={(text) => setPassword(text)}
                value={password}
              />
            </FormControl>
            <Button
              shadow="4"
              mt="2"
              bg="#34B5C8"
              onPress={handleLogin}
            >
              <Text  fontSize="md" fontWeight="900" color="#545454"> Sign in </Text>
            </Button>
            {showSuccessMessage && (
              <Text color="#2B822F" mt="2" fontSize="md" fontWeight="900">
                Authentication successful
              </Text>
            )}
            {showErrorMessage && (
              <Text color="#8F0A20" mt="2" fontSize="md" fontWeight="900">
                Authentication failed
              </Text>
            )}
          </VStack>
        </Box>
      </Center>
    </NativeBaseProvider>
  )
}

export default Login;
