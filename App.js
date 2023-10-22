import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen/HomeScreen.js'
import ContactsScreen from './screens/ContactsScreen/ContactsScreen.js'
import GalleryScreen from './screens/GalleryScreen/GalleryScreen.js'
const Stack = createStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Contacts" component={ContactsScreen} />
      <Stack.Screen name="Gallery" component={GalleryScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
})