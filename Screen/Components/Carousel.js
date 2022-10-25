import React from "react";
import { Text } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";

const CarouselComponent = ({
  layout,
  isCarousel,
  onSnapToItem,
  data,
  renderItem,
  sliderWidth,
  itemWidth,
  sliderHeight,
  itemHeight,
  loop,
  autoplay,
  autoplayInterval,
  setIndex,
  containerStyle,
  index,
  pagination,
  activeSlideAlignment
}) => {
  return (
    <>
      <Carousel
        layout={layout}
        ref={isCarousel}
        onSnapToItem={(index) => setIndex(index)}
        data={data}
        renderItem={renderItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        sliderHeight={sliderHeight}
        itemHeight={itemHeight}
        loop={loop}
        autoplay={autoplay}
        autoplayInterval={autoplayInterval}
        activeSlideAlignment={activeSlideAlignment?activeSlideAlignment: 'start'}
      />
      {pagination && (
        <Pagination
          dotsLength={data.length}
          activeDotIndex={index}
          carouselRef={isCarousel}
          containerStyle={containerStyle}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 8,
            backgroundColor: "#E799AB",
          }}
          tappableDots={true}
          inactiveDotStyle={{
            backgroundColor: "#1C1C1C",

            // Define styles for inactive dots here
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      )}
    </>
  );
};

export default CarouselComponent;
