import React, { useState } from 'react';
import { StyleSheet,
  Text,
  TouchableOpacity,
  View,
 } from 'react-native';

export default function ButtonCounter() {
    const [buttonColor, setButtonColor] = useState("#02C39A"); // Initial color
    const handleButtonPress = ()=>{
        const randomColor = '#' + ((Math.random() * 0xffffff) << 0).toString(16);
        setButtonColor(randomColor);
        console.log(randomColor);
      }

  return (
    <View style={styles.container}>
      <TouchableOpacity 
      style={[styles.button, { backgroundColor: buttonColor }]}
      onPress={handleButtonPress}>
        <Text style = {styles.buttonText}>  
          Change color
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#028090',
    margin: 10
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
