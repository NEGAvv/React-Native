import React, { useState } from 'react';
import Modal from './components/Modal/Modal.js'
import Carousel from './components/Carousel/Carousel.js'
import { View,StyleSheet, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Modal/>
      <Carousel/>
    </View>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6A381F',
    alignItems: 'flex-start', 
    justifyContent: 'flex-start', 
  },})