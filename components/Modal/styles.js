import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#028090',
  //   alignItems: 'flex-start', 
  //   justifyContent: 'flex-start', 
  //   paddingTop: 80,
  //   paddingLeft: 20,
  // },
  welcome_btn:{
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#FFFFB3",
    backgroundColor: '#6E0D25',
    padding: 5,
    marginTop: 80,
    marginLeft: 20,
    width: 50,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#F41B3B",
    shadowOffset: {
        width: 0,
        height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    
    elevation: 8,
  },
  btn_text:{
    fontWeight: 'bold',
    fontSize: 21,
  },
  modal_container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
  },
  welcome_modal:{
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
crossWrapper:{
    marginLeft:330,
    width:40,
    height:40,
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1, 

  },
  cross: {
    padding: 10,
    color: '#DA3A3A',
    fontWeight: 'bold',
    fontSize: 16,
    transform: [{ scaleX: 2 }, { scaleY: 1.6 }],
    textShadowColor: 'black',  
    textShadowOffset: { width: 1, height: 1 }, 
    textShadowRadius: 3, 
  },
 
});

export default styles;