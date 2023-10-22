import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
      container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "lightgray",
      },
      content: {
        alignItems: "flex-start",
        flexDirection: "row",
        justifyContent: "space-around",
      },
      welcome_container:{
        backgroundColor: '#F4E9E9',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: 200,
        height: 200,
        padding: 20,
        borderRadius: 100,
        shadowColor: "#DA15CD",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
    
        elevation: 15,
    
    },
    welcome_text: {
        fontSize: 35,
        textAlign: "center",
        textShadowColor: 'black',  
        textShadowOffset: { width: 1, height: 1 }, 
        textShadowRadius: 3,
      },
      button: {
        width: '49.91%',
        backgroundColor: '#007BFF', 
        padding: 20, 
        borderBottomEndRadius: 30,
        borderBottomStartRadius: 30,
        elevation: 5,
      },
      buttonText: {
        color: 'white', 
        textAlign: 'center', 
        fontSize: 18,
        textShadowColor: 'black',  
        textShadowOffset: { width: 2, height: 2 }, 
        textShadowRadius: 10,
      },
});

export default styles;