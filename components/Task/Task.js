import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';
import Table from '../Table/Table';

const Task = () => {
  const [red, setRed] = useState('255');
  const [green, setGreen] = useState('255');
  const [blue, setBlue] = useState('255');

  const handleColorChange = () => {
    const backgroundColor = `rgb(${red},${green},${blue})`;
    return { backgroundColor };
  };

  const [tableSize, setTableSize] = useState({ width: 25, height: 25 });

  const increaseSize = () => {
    if (tableSize.width < 115 || tableSize.height < 115) {
      setTableSize({
        width: tableSize.width + 10,
        height: tableSize.height + 10,
      });
    }
  };

  const decreaseSize = () => {
    if (tableSize.width > 5 || tableSize.height > 5) {
      setTableSize({
        width: tableSize.width - 10,
        height: tableSize.height - 10,
      });
    }
  };

  const handleInputChange = (value, setValue) => {
    if (/^\d{0,3}$/.test(value)) {
      if (parseInt(value, 10) > 255) {
        setValue('255');
      } else if (value >= 0) {
        setValue(value);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={[styles.main, handleColorChange()]}>
        <Table width={tableSize.width} height={tableSize.height} />

        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.button} onPress={increaseSize}>
            <Text style={styles.textButton}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={decreaseSize}>
            <Text style={styles.textButton}>-</Text>
          </TouchableOpacity>
        </View>

        <Text>Write a number</Text>
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleInputChange(text, setRed)}
            keyboardType="numeric"
            value={red}
          />
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleInputChange(text, setGreen)}
            keyboardType="numeric"
            value={green}
          />
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleInputChange(text, setBlue)}
            keyboardType="numeric"
            value={blue}
          />
        </View>
      </View>
    </View>
  );
};

export default Task;
