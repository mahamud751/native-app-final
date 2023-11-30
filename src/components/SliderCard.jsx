import React from "react";
import { View ,StyleSheet} from "react-native";
// import Carousel, { Pagination } from "react-native-snap-carousel";
// import Carousel from 'react-native-snap-carousel';

import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from "./CarouselCardItem";
import data from "../../data";
import { ImageSlider } from "react-native-image-slider-banner";
const SliderCard = () => {
    const [index, setIndex] = React.useState(0);
    const isCarousel = React.useRef(null);
   
    return (
        <View style={{ marginLeft: -65, marginBottom: 30 }}>
            <ImageSlider 
          
        data={[
            {img: 'https://images.unsplash.com/photo-1570857502809-08184874388e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=878'},
            {img: 'https://images.unsplash.com/photo-1612383401559-c32a290d6b17?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1140'},
            {img: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170'}
        ]}
    autoPlay={true}
    onItemChanged={(item) => console.log("item", item)}
    closeIconColor="#fff"
  
/>
            {/* <Carousel
                layout="tinder"
                layoutCardOffset={9}
                ref={isCarousel}
                data={data}
                renderItem={CarouselCardItem}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                onSnapToItem={(index) => setIndex(index)}
                useScrollView={true}
            /> */}

            {/* <Pagination
                dotsLength={data.length}
                activeDotIndex={index}
                carouselRef={isCarousel}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 0,
                    marginLeft: 50,
                    backgroundColor: "rgba(0, 0, 0, 0.92)",
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
                tappableDots={true}
            /> */}
        </View>
    );
};

export default SliderCard;
const styles = StyleSheet.create({
    banner: {
        wtdth:'90%',
        height:'200px'
       },
  });