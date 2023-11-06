import { configureStore } from "@reduxjs/toolkit";
import cryptoReducer from "./slices/cryptoSlice";
const rootReducer = {
  cryptoReducer,
};
const store = configureStore({
  reducer: cryptoReducer,
});
export default store;