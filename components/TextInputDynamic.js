import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet,
  Text,
  View,
  Button,
  TextInput
 } from 'react-native';

export default function ButtonCounter() {
    const [text, setText] = useState("Hello!"); 
    const handleInput =(text) =>{
        setText(text);
    }
  return (
    <View style={styles.container}>
        <TextInput style = {styles.input} onChangeText={handleInput}/>
        <Text style={styles.text}>
            {text}
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#028090',
    margin: 15
  },
  input: {
    margin: 15,
    paddingHorizontal: 10,
    height: 50,
    borderColor: '#C1C297',
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor:'#F0F3BD'
 },
 text:{
    color: "#F0F3BD",
    fontSize: 18,
    marginHorizontal: 20,
    elevation: 10,
 }

});
