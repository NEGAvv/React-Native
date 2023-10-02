import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Animated,
  FlatList,
} from "react-native";
import CarouselItem from "./CarouselItem.js";
import Slider from "./Slider.js";
import NextButton from "./NextButton.js";
import styles from "./styles";
import slides from "../../slides";

export default Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef(null);

    const viewableItemsChanged = useRef(({viewableItems})=>{
        setCurrentIndex(viewableItems[0].index);
    }
    ).current;

    const viewConfig = useRef({viewAreaCoveragePercentThreshold:50}).current;
    
    const scrollTo = () => {
        if(currentIndex < slides.length - 1){
            slidesRef.current.scrollToIndex({index: currentIndex + 1 });
        }
        else{
            console.log('last item');
        }
    };

  return (
    <View style={styles.container}>
        <View style={{flex: 3}}>
            <FlatList
                data={slides}
                renderItem={({ item }) => <CarouselItem item={item} />}
                horizontal
                showsHorizontalScrollIndicator={false}
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
       <Slider data={slides} scrollX={scrollX}/>
        <NextButton scrollTo={scrollTo} percantage={(currentIndex + 1) * (100 / slides.length)}/>
       
    </View>
  );
};
