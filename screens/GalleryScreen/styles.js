import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      padding: 10,
    },
    chairsItem: {
      width: "45%",
      margin: 5,
      backgroundColor: "white",
      borderRadius: 10,
      paddingHorizontal: 10,
      paddingVertical: 20,
      alignItems: "center",
    },
    image: {
      width: 150,
      height: 230,
    },
    name: {
      marginTop: 10,
      textAlign: "center",
    },
  });
  export default styles;