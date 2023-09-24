import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles'

const Table = ({ width, height }) => {
  return (
    <View style={styles.table}>
        <View style={styles.row}>
            <View style={[styles.cell, { width, height }]}>
                <Text>1</Text>
            </View>
            <View style={[styles.cell, { width, height }]}>
                <Text>2</Text>
            </View>
            <View style={[styles.cell, { width, height }]}>
                <Text>3</Text>
            </View>
            </View>
        <View style={styles.row}>
            <View style={[styles.cell, { width, height }]}>
                <Text>4</Text>
            </View>
            <View style={[styles.cell, { width, height }]}>
                <Text>5</Text>
            </View>
            <View style={[styles.cell, { width, height }]}>
                <Text>6</Text>
            </View>
        </View>
        <View style={styles.row}>
            <View style={[styles.cell, { width, height }]}>
                <Text>7</Text>
            </View>
            <View style={[styles.cell, { width, height }]}>
                <Text>8</Text>
            </View>
            <View style={[styles.cell, { width, height }]}>
                <Text>9</Text>
            </View>
        </View>
    </View>
  );
};


export default Table;
