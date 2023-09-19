import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = (props) => {
    const [taskColor, setTaskColor] = useState("#FFF"); 
    const [checkboxkColor, setCheckboxColor] = useState("#445C69");

    const handleTaskPress = ()=>{
        let completeColor = "#71C966";
        let completeCheckbox = "#17B6FF";
          if (taskColor === completeColor) {
            completeColor = "#FFF";
            completeCheckbox = "#445C69";
            setTaskColor(completeColor);
            setCheckboxColor(completeCheckbox);
            console.log("undone");
          } else {
            setTaskColor(completeColor);
            setCheckboxColor(completeCheckbox);
            console.log("done");
          }
        
        }


  return (
    <View style={[styles.item, { backgroundColor: taskColor }]}>
      <View style={styles.itemLeft}>
        <TouchableOpacity onPress={handleTaskPress}>
            <View style={[styles.square, {borderWidth: 3,
            borderColor: "#445C69",
            backgroundColor: checkboxkColor
            }]}>
            </View>
        </TouchableOpacity>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>

      <TouchableOpacity onPress={() => props.onDelete()}>
        <View style={styles.crossWrapper}>
            <Text style={styles.cross}>X</Text>
        </View>
      </TouchableOpacity>

      
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#445C69',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
  },
  crossWrapper:{
    width:40,
    height:40,
    alignItems: 'center',
    justifyContent: 'center',

  },
  cross: {
    color: '#DA3A3A',
    fontWeight: 'bold',
    fontSize: 18,
    transform: [{ scaleX: 2 }, { scaleY: 1.6 }],
  },
});

export default Task;