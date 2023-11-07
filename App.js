import React, {  } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import store from "./store/store";
import { Provider,  } from "react-redux";
import Router from './Router.js';



export default function App() {


  return (
    <Provider store={store}>
        <Router></Router>
  </Provider>
  );
}

const styles = StyleSheet.create({
  
})