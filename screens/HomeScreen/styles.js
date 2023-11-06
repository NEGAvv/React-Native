import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
      headerText: {
        color: 'black', 
        textAlign: 'center', 
        fontSize: 26,
        textShadowColor: 'yellow',  
        textShadowOffset: { width: 2, height: 2}, 
        textShadowRadius: 15,
      },
      footerText: {
        color: 'white', 
        textAlign: 'center', 
        fontSize: 24,
        textShadowColor: 'black',  
        textShadowOffset: { width: 2, height: 2 }, 
        textShadowRadius: 10,
      },
      main: {
        flex: 1,
      },
      container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
      },
      header: {
        alignItems: "flex-start",
        flexDirection: "row",
        justifyContent: "space-around",
      },
  
      button: {
        width: "100%",
        backgroundColor: "#3498db",
        padding: 15,
        alignItems: "center",
        elevation: 5,
      },
   
      itemContainer: {
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        borderRadius: 20,
        marginHorizontal: 10,
        marginVertical: 5,
        paddingLeft: 35,
      },
      shopButtons: {
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        position: "absolute",
        right: 50,
      },
    
      itemName: {
        fontSize: 18,
        fontWeight: "bold",
      },
      itemCurrency: {
        fontSize: 16,
      },
});

export default styles;