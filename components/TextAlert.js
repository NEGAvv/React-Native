import React, { useState } from 'react';
import { StyleSheet,
  Text,
  Alert,
  TouchableHighlight,
  View,
 } from 'react-native';

export default function TextAlert() {
    const handleTextPress = ()=>{
        Alert.alert("It's possible, isn't it?", "Press OK please",[{
          text: "OK",
          onPress: ()=> console.log("Closed")
        }
        ]);
      }

  return (
    <View style={styles.container}>
      <TouchableHighlight 
      activeOpacity={0.5} 
      nderlayColor={"#05668D"}
      onPress={handleTextPress}>
        <Text numberOfLines={1} style={styles.text}>
          You can click me
        </Text>  
      </TouchableHighlight>
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
    marginTop: 50,
    marginBottom: 10   
  },
});
