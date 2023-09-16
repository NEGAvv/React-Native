import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import ButtonCounter from './components/ButtonCounter';
import { StyleSheet,
  Text,
  View,
  Alert,
  Button,
  TouchableHighlight,
  TouchableOpacity,
 } from 'react-native';

export default function App() {
  const [buttonColor, setButtonColor] = useState("#02C39A"); // Initial color
  const handleTextPress = ()=>{
    Alert.alert("It's possible, isn't it?", "Press OK please",[{
      text: "OK",
      onPress: ()=> console.log("Closed")
    }
    ]);
  }
  const handleButtonPress = ()=>{
    const randomColor = '#' + ((Math.random() * 0xffffff) << 0).toString(16);
    setButtonColor(randomColor);
    console.log(randomColor);
  }
  return (
    <View style={styles.container}>
    <StatusBar style="auto" />
      <TouchableHighlight 
      activeOpacity={0.5} 
      nderlayColor={"#05668D"}
      onPress={handleTextPress}
      >
        <Text numberOfLines={1} style={styles.text}>
          You can click me
        </Text>  
      </TouchableHighlight>
      <TouchableOpacity 
      style={[styles.button, { backgroundColor: buttonColor }]}
      onPress={handleButtonPress}
      >
        <Text style = {styles.buttonText}>  
          Change color
        </Text>
      </TouchableOpacity>
      <ButtonCounter/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#028090',
    alignItems: 'center',
    justifyContent: 'center',
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
