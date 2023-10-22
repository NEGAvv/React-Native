import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import styles from './styles'

const chairs = [ 
    {
        id: '1',
        title: "Стілець обідній JONSTRUP сірий/дуб",
        price: 1350,
        source: require('../GalleryScreen/images/chair1.jpg'),
    },
    {
        id: '2',
        title: "Стілець обідній EJSTRUP синій/сталь",
        price: 1650,
        source: require('../GalleryScreen/images/chair2.jpg'),
    },
    {
        id: '3',
        title: "Стілець обідній TUREBY беж тканина",
        price: 2000,
        source: require('../GalleryScreen/images/chair3.jpg'),
    },
    {
        id: '4',
        title: "Стілець обідній KOKKEDAL сірий/дуб",
        price: 1850,
        source: require('../GalleryScreen/images/chair4.jpg'),
    },
    {
        id: '5',
        title: "Стілець обідній TOREBY шт.шкіра чорний",
        price: 1000,
        source: require('../GalleryScreen/images/chair5.jpg'),
    },
]

const GalleryScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {chairs.map((chair, index) => (
        <View key={index} style={styles.chairsItem}>
          <Image source={chair.source} style={styles.image} />
          <Text style={styles.name}>{chair.title}</Text>
        </View>
      ))}
    </ScrollView>
  )
}

export default GalleryScreen