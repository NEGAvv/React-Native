import { createSlice, nanoid } from "@reduxjs/toolkit";
import { fetchData } from "../../database/database";
const initialState = {
  cryptos: [
    // {
    //   id: nanoid(),
    //   amountToBuy: 0,
    //   name: "Bitcoin",
    //   dollarCurrency: 28500,
    // },
    // {
    //   id: nanoid(),
    //   amountToBuy: 0,
    //   name: "BNB",
    //   dollarCurrency: 211,
    // },
    // {
    //   id: nanoid(),
    //   amountToBuy: 0,
    //   name: "Cardano",
    //   dollarCurrency: 0.24,
    // },
    // {
    //   id: nanoid(),
    //   amountToBuy: 0,
    //   name: "USD coin",
    //   dollarCurrency: 0.5,
    // },
    // {
    //   id: nanoid(),
    //   amountToBuy: 0,
    //   name: "Ethereum",
    //   dollarCurrency: 1558,
    // },
    // {
    //   id: nanoid(),
    //   amountToBuy: 0,
    //   name: "Solana",
    //   dollarCurrency: 23.75,
    // },
    // {
    //   id: nanoid(),
    //   amountToBuy: 0,
    //   name: "Tether",
    //   dollarCurrency: 1,
    // },
    // {
    //   id: nanoid(),
    //   amountToBuy: 0,
    //   name: "XRP",
    //   dollarCurrency: 0.48,
    // },
  ],
};

export const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    setCryptos: (state, action) => {
      state.cryptos = action.payload;
    },
    buyCrypto: (state) => {
      state.cryptos = state.cryptos.map((crypto) => ({
        ...crypto,
        amountToBuy: 0,
      }));
    },

    decrementCrypto: (state, action) => {
      const idx = state.cryptos.findIndex(
        (crypto) => crypto.id == action.payload
      );
      if (state.cryptos[idx].amountToBuy > 0) {
        state.cryptos[idx].amountToBuy--;
      }
    },
    incrementCrypto: (state, action) => {
      const idx = state.cryptos.findIndex(
        (crypto) => crypto.id == action.payload
      );
      state.cryptos[idx].amountToBuy++;
    },
  },
});
const cryptoReducer = cryptoSlice.reducer;

export const {
  buyCrypto,
  incrementCrypto,
  decrementCrypto,
  setCryptos,
} = cryptoSlice.actions;
export default cryptoReducer;
