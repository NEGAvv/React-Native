import React, {  useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen/HomeScreen.js'
import {  useDispatch } from "react-redux";
import { createTable, deleteTable, fetchData, insertData } from "./database/database.js";
import { setCryptos } from './store/slices/cryptoSlice.js';

const Stack = createStackNavigator();

const initialState = {
  cryptos: [
    {
      
      amountToBuy: 0,
      name: "Bitcoin",
      dollarCurrency: 28500,
    },
    {
      
      amountToBuy: 0,
      name: "BNB",
      dollarCurrency: 211,
    },
    {
      
      amountToBuy: 0,
      name: "Cardano",
      dollarCurrency: 0.24,
    },
    {
      
      amountToBuy: 0,
      name: "USD coin",
      dollarCurrency: 0.5,
    },
    {
      
      amountToBuy: 0,
      name: "Ethereum",
      dollarCurrency: 1558,
    },
    {
      
      amountToBuy: 0,
      name: "Solana",
      dollarCurrency: 23.75,
    },
    {
      
      amountToBuy: 0,
      name: "Tether",
      dollarCurrency: 1,
    },
    {
      
      amountToBuy: 0,
      name: "XRP",
      dollarCurrency: 0.48,
    },
  ],
};

 function Router() {

  const dispatch = useDispatch();
  useEffect(() => {
    // createTable("crypto");
    // for (const item of initialState.cryptos) {
    //   insertData([
    //     item.amountToBuy,
    //     item.name,
    //     item.dollarCurrency,
    //   ]);
    // }
    fetchData()
      .then((data) => {
        console.log("Fetched data:", data);
        dispatch(setCryptos(data));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    // deleteTable("crypto");
  }, []);

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default Router;