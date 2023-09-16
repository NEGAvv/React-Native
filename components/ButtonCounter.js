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
        console.log(buttonCounts+1);
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
});
