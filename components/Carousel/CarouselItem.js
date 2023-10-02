import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Animated, Easing, FlatList, Image, useWindowDimensions } from 'react-native';

import styles from './styles';
import slides from '../../slides';


export default CarouselItem = ({item}) => {
  const {width} = useWindowDimensions();

    
  return(
    <View style={[styles.container_item, {width}]}>
        <Image source={item.image} style={[styles.image, {width, resizeMode: 'contain'}]}  />
        <View style={{flex: 0.2, alignItems:'center', justifyContent:'center', flexDirection: 'column',}}>
            <View style={styles.container_title}>
                <Text numberOfLines={2} style={styles.title}>{item.title}</Text>
            </View>
            <Text style={styles.price}>{item.price}</Text>
        </View>
    </View>
  );
};

