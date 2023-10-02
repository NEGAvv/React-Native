import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#rgba(255,255,255, 1)',
    alignItems: 'center', 
    justifyContent: 'center', 
    marginTop: 25,
  },
  container_item: {
    flex: 0.7,
    backgroundColor: 'rgba(255,255,255, 1)',
    alignItems: 'center', 
    justifyContent: 'center', 
    marginTop: 25,
  },
  container_slider:{
    flex: 0.5,
    flexDirection: 'row',
    height: 64,
    justifyContent: 'center',
    alignContent: 'center',
  },
  container_button:{
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
 image:{
    flex: 0.7,
    justifyContent: 'center', 
    marginTop: 10,

 },
 container_title:{
    flex: 0.79, 
    alignItems:'center',
    justifyContent:'center',
},
 title:{
    fontWeight:'bold',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
    marginRight: 10,
    color: '#000000',
    textShadowColor: '#8C8C8C',  
    textShadowOffset: { width: 1.2, height: 1.2 }, 
    textShadowRadius: 3,
 },
 price:{
    fontSize: 20,
    textAlign: 'center',
    marginTop: -12,
    marginRight: 5,
    paddingRight: 5,
    color: '#000000',
    textShadowColor: '#8C8C8C',  
    textShadowOffset: { width: 1, height: 1}, 
    textShadowRadius: 3,
 },
 dot:{
    height: 10,
    borderRadius: 5,
    backgroundColor: 'black',
    marginHorizontal: 8,
 },
 next_button: {
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 100,
    padding: 27.5,
    paddingVertical: 30.5
 },
});

export default styles;