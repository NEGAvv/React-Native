import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#028090',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  main: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    paddingTop: 80,
    paddingHorizontal: 20,
    marginBottom: 100,
    marginTop: 100,
    flexDirection: 'column',
    alignItems: 'center',
  },
  buttonGroup:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#003265',
    borderRadius: 10,
    margin: 5,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  textButton: {
    color: 'white',
    fontSize: 22,
  },
  inputGroup:{
    marginTop:5,
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input:{
    paddingVertical: 5,
    paddingHorizontal: 5,
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 50,
  }
});

export default styles;
