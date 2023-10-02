import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Animated,
  FlatList,
} from "react-native";
import CarouselItem from "./CarouselItem.js";
import styles from "./styles";
import slides from "../../slides";

export default Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const scrollX = useRef(new Animated.Value(0)).current;
    const viewableItemsChanged = useRef(({viewableItems})=>{
        setCurrentIndex(viewableItems[0].index);
    }
    ).current;
    const viewConfig = useRef({viewAreaCoveragePercentThreshold:50}).current;
    const slidesRef = useRef(null);
  return (
    <View style={styles.container}>
        <View style={{flex: 3}}>
            <FlatList
                data={slides}
                renderItem={({ item }) => <CarouselItem item={item} />}
                horizontal
                showsHorizontalScrollIndicator
                pagingEnabled
                bounces={false}
                keyExtractor={(item) => item.id}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                    useNativeDriver:false
                })}
                scrollEventThrottle={32}
                onViewableItemsChanged={viewableItemsChanged}
                viewabilityConfig={viewConfig}
                ref={slidesRef}
            />
       </View>
    </View>
  );
};
