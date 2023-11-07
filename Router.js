import React, {  useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen/HomeScreen.js'
import {  useDispatch } from "react-redux";
import { createTable, deleteTable, fetchData, insertData } from "./database/database.js";
import { setCryptos } from './store/slices/cryptoSlice.js';
import {Realm} from "@realm/react";

const Stack = createStackNavigator();

const initialState = {
  cryptos: [
    {
      id: 1,
      amountToBuy: 0,
      name: "Bitcoin",
      dollarCurrency: 28500,
    },
    {
      id: 2,
      amountToBuy: 0,
      name: "BNB",
      dollarCurrency: 211,
    },
    {
      id: 3,
      amountToBuy: 0,
      name: "Cardano",
      dollarCurrency: 0.24,
    },
    {
      id: 4,
      amountToBuy: 0,
      name: "USD coin",
      dollarCurrency: 0.5,
    },
    {
      id: 5,
      amountToBuy: 0,
      name: "Ethereum",
      dollarCurrency: 1558,
    },
    {
      id: 6,
      amountToBuy: 0,
      name: "Solana",
      dollarCurrency: 23.75,
    },
    {
      id: 7,
      amountToBuy: 0,
      name: "Tether",
      dollarCurrency: 1,
    },
    {
      id: 8,
      amountToBuy: 0,
      name: "XRP",
      dollarCurrency: 0.48,
    },
  ],
};

class Crypto extends Realm.Object {
  static schema = {
    name: "Crypto",
    primaryKey: "id",
    properties: {
      id: "int",
      amountToBuy: "double",
      name: "string",
      dollarCurrency: "double",
    },
  };
}

const realm = new Realm({ schema: [Crypto], schemaVersion: 9 });

 function Router() {

  const dispatch = useDispatch();
  useEffect(() => {
    // realm.write(() => {
    //   realm.deleteAll("Crypto");
    // });
    // realm.write(() => {
    //   initialState.cryptos.forEach((cryptoData) => {
    //     realm.create("Crypto", cryptoData);
    //   });
    // });
    const state = realm.objects("Crypto");
    console.log(state);
    console.log(initialState.cryptos);
    const arr = JSON.parse(JSON.stringify(state));
    console.log(arr);
    dispatch(setCryptos(arr));
    // realm.close();
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