import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet,
  Text,
  View,
  Button
 } from 'react-native';

export default function ButtonCounter() {
    const [buttonCounts, setButtonCounts] = useState(0); 
    const handleButton =() =>{
        setButtonCounts(buttonCounts+1);
    }
  return (
    <View style={styles.container}>
      <Button title={`Click me\n ${buttonCounts}`} onPress={handleButton}> 
      </Button> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#028090',
    margin: 15
  },
  text:{
    color: "#F0F3BD",
    fontSize: 18,
    margin: 15
  },
  button:{
    backgroundColor: "#02C39A",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: "#F0F3BD",

  },
});
