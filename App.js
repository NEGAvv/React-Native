import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import ButtonCounter from './components/ButtonCounter';
import TextInputDynamic from './components/TextInputDynamic'
import ChangeButtonColor from './components/ChangeButtonColor'
import TextAlert from './components/TextAlert'
import { StyleSheet,
  Text,
  View,
  ScrollView,
 } from 'react-native';

export default function App() {
  const data = [{"name": "Anton"},{"name":"Dima"},{"name":"Sasha"},{"name":"Alina"},{"name": "Yuliia"},{"name":"Mira"},{"name":"Danil"},{"name":"Andrii"},{"name": "Maxim"},{"name":"Serhii"},{"name":"Oleg"},{"name":"Yaroslav"}]
  
  return (
    <ScrollView >
    <View style={styles.container}>
    <StatusBar style="auto" />
      <TextAlert/>
      <ChangeButtonColor/>
      <ButtonCounter/>
      {data.map((value,index)=>(<Text key={index} style={styles.dataText}>
        {value.name}
      </Text>))}
      <TextInputDynamic></TextInputDynamic>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#028090',
    alignItems: 'center',
    justifyContent: 'center',
  },

  dataText:{
    color: "#F0F3BD",
    fontSize: 32,
    margin: 10,
    textDecorationLine: 'underline',
  },
});
