import {
  View,
  Text,
  Button,
  StyleSheet,
  Animated,
  Easing,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React, { useEffect } from "react";
import styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import {
  buyCrypto,
  decrementCrypto,
  incrementCrypto,
} from "../../store/slices/cryptoSlice.js";

const HomeScreen = ({ navigation }) => {
  const cryptos = useSelector((state) => state.cryptos);
  const buyPrice = cryptos.reduce(
    (total, crypto) => total + crypto.amountToBuy * crypto.dollarCurrency,
    0
  );
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Welcome to market of crypto currencies
        </Text>
      </View>
      <View style={styles.main}>
        <ScrollView>
          {cryptos.map((item) => (
            <View style={styles.itemContainer} key={item.id}>
              <View>
                <Text style={styles.itemName}>{item.name}</Text>

                <Text style={styles.itemCurrency}>${item.dollarCurrency}</Text>
              </View>

              <View style={styles.shopButtons}>
                <TouchableOpacity
                  style={{
                    marginRight: 25,
                  }}
                  onPress={() => dispatch(decrementCrypto(item.id))}
                >
                  <Text style={{ fontSize: 50, color: "#B00000" }}>-</Text>
                </TouchableOpacity>

                <View>
                  <Text Text style={{ fontSize: 20 }}>
                    {item.amountToBuy}
                  </Text>
                </View>

                <TouchableOpacity
                  style={{ marginLeft: 25 }}
                  onPress={() => dispatch(incrementCrypto(item.id))}
                >
                  <Text style={{ fontSize: 35, color: "#339D05" }}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
        {cryptos.length ? (
          <View style={styles.header}>
            <TouchableOpacity
              style={{ ...styles.button, backgroundColor: "#1A5600" }}
              onPress={() => dispatch(buyCrypto())}
            >
              <Text style={styles.footerText}>Buy {buyPrice}$</Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default HomeScreen;
