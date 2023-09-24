import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    table: {
      flexDirection: 'column', 
      alignItems: 'center',    
    },
    row: {
      flexDirection: 'row',  
    },
    cell: {
      borderWidth: 1,
      borderColor: 'black',
      alignItems: 'center',    
      justifyContent: 'center',
      width: 25,               
      height: 25,
    },
  });

export default styles;
