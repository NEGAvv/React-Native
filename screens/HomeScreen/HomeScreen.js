import { View, Text, Button, StyleSheet, Animated, Easing, TouchableOpacity } from "react-native";
import React, { useEffect } from 'react';
import styles from "./styles";

const HomeScreen = ({ navigation }) => {

  const rotateAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        delay: 0,
        useNativeDriver: true,
      })
    ).start();
  }, [rotateAnim]);

  const spinStyle = {
    transform: [
      {
        rotate: rotateAnim.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '360deg'],
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Contacts')}>
        <Text style={styles.buttonText}>Go to Contacts</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Gallery')}>
        <Text style={styles.buttonText}>Go to Gallery</Text>
      </TouchableOpacity>
        
      </View>
      <View style={styles.main}>
        <Animated.View style={[styles.welcome_container, spinStyle, ]}>
            <Text style={styles.welcome_text}>Welcome friend</Text>
        </Animated.View> 
      </View>

    </View>
      
     
  );
  
};

export default HomeScreen;