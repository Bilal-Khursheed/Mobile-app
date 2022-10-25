// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from "react";
import { useState, useRef } from "react";
// import Carousel from 'react-native-snap-carousel';
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
// import Carousel, { Pagination } from "react-native-snap-carousel";
import Icon from "react-native-vector-icons/EvilIcons";
import Carousel from "../Components/Carousel";

export const SLIDER_WIDTH = Dimensions.get("window").width + 10;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const data = [
  {
    id: 1,
    h1: "Today’s Best Seller",
    h2: " Off up to 75%",
    url: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
  },
  {
    id: 2,
    h1: "Weekly Best Sellers",
    h2: " Off up to 25%",
    url: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 3,
    h1: "Monthly Best Sellers",
    h2: " Off up to 50%",
    url: "https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
];
const HomeScreen = () => {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef();
  // console.log("isCarousel====>>>>",(isCarousel.current));
  const renderItem = ({ item }) => {
    return (
      <View style={styles.sliderContainer}>
        <View style={styles.headingContainer}>
          <Text style={styles.sliderHeading}>{item.h1}</Text>
          <Text style={styles.sliderSubHeading}> {item.h2}</Text>
        </View>
        <View style={styles.sliderImageContainer}>
          <Image
            source={{ uri: item.url }}
            style={{
              // width: 90,
              height: 140,
              borderBottomRightRadius: 20,
              borderTopRightRadius: 20,
              borderTopLeftRadius: 75,
            }}
          />
        </View>
      </View>
    );
  };
  const topBusinesses = ({ item }) => {
    return (
      <View style={styles.businessCards}>
        <Image
          style={{ width: "40%", height: 145, borderTopLeftRadius: 20, borderBottomLeftRadius: 20 }}
          resizeMode="contain"
          source={require(`../../Image/test2.jpeg`)}
        // source={{
        //   uri: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        // }}
        />
        <View style={styles.businessCardsContent}>
          <Text style={styles.businessCardsHeading}>
            Buy Imported Mens Wear
          </Text>
          <Text style={styles.businessCardsSubHeading}>
            Order Mens Product now{" "}
          </Text>
          <Text>Start from 50 Dollars</Text>
        </View>
      </View>
    );
  };
  const upComingEvents = ({ item }) => {
    return (
      <View style={styles.businessCardsContainer}>
        <View style={styles.eventCards}>
          <Image
            style={{ width: "100%", height: 100, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
            source={require(`../../Image/test1.jpeg`)}
            resizeMode="contain"
          />
          <View style={{ ...styles.businessCardsContent, height: 60, justifyContent: 'center', width: '100%', borderTopRightRadius: 0, borderBottomLeftRadius: 20 }}>
            <Text style={{ ...styles.businessCardsHeading, padding: 2, fontSize: 15, justifyContent: 'center' }}>
              Buy Imported MensWear
            </Text>

          </View>
        </View>
        <View style={styles.eventCards}>
          <Image
            style={{ width: "100%", height: 100, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
            resizeMode="contain"
            source={{
              uri: "https://images.unsplash.com/photo-1483181957632-8bda974cbc91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            }}
          />
          <View style={{ ...styles.businessCardsContent, height: 60, justifyContent: 'center', width: '100%', borderTopRightRadius: 0, borderBottomLeftRadius: 20 }}>
            <Text style={{ ...styles.businessCardsHeading, padding: 2, fontSize: 15, justifyContent: 'center' }}>
              Buy Imported MensWear{" "}
            </Text>
          </View>
        </View>
      </View>
    )
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FBFDFE" }}>
      <View
        style={{
          marginHorizontal: 0,
          padding: 20,
          paddingLeft: 0,
          paddingBottom: 0,
        }}
      >
        <Carousel
          layout={"default"}
          isCarousel={isCarousel}
          setIndex={setIndex}
          // onSnapToItem={(index) => setIndex(index)}
          data={data}
          renderItem={renderItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          sliderHeight={120}
          itemHeight={120}
          loop={true}
          autoplay={true}
          autoplayInterval={4000}
          index={index}
          containerStyle={styles.containerStyle}
          pagination={true}
        />
      </View>
      <ScrollView style={{ flex: 1, padding: 20, paddingTop: 0 }}>
        <View style={styles.businessContainer}>
          <View style={styles.businessContent}>
            <Text style={styles.businessHeading}>
              Top Rated Businesses in{" "}
              <Text style={{ color: "#6F5B3E" }}>September</Text>
            </Text>
            <View style={styles.arrowIcons}>
              <Icon name="arrow-left" size={45} color={"#E3BC9A"} />
              <Icon
                // style={styles.arrowsRight}
                name="arrow-right"
                size={60}
                color={"#E3BC9A"}
              />
            </View>
          </View>
          <Carousel
            layout={"default"}
            isCarousel={isCarousel}
            setIndex={setIndex}
            // onSnapToItem={(index) => setIndex(index)}
            data={data}
            renderItem={topBusinesses}
            sliderWidth={SLIDER_WIDTH + 50}
            itemWidth={ITEM_WIDTH + 60}
            sliderHeight={180}
            itemHeight={180}
            index={index}
            pagination={false}
          />
          {/* Upcoming Events  */}
        </View>
        <View style={styles.eventsContainer}>
          <View style={{ ...styles.businessContent, marginBottom: 10 }}>
            <Text style={styles.eventsHeading}>
              Upcoming Event in{" "}
              <Text style={{ color: "#6F5B3E" }}>September</Text>
            </Text>
            <View style={styles.arrowIcons}>
              <Icon
                // style={styles.arrowsLeft}
                name="arrow-left"
                size={45}
                color={"#E3BC9A"}
              />
              <Icon
                // style={styles.arrowsRight}
                name="arrow-right"
                size={60}
                color={"#E3BC9A"}
                onPress={(e) => setIndex(index + 1)}
              />
            </View>
          </View>
          <Carousel
            layout={"default"}
            isCarousel={isCarousel}
            setIndex={setIndex}
            // onSnapToItem={(index) => setIndex(index)}  width: WIDTH / 2.62,
            data={data}
            renderItem={upComingEvents}
            sliderWidth={SLIDER_WIDTH + 60}
            itemWidth={ITEM_WIDTH + 50}
            sliderHeight={150}
            itemHeight={200}
            index={index}
            pagination={false}
          />

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  sliderContainer: {
    flexDirection: "row",
    // borderWidth: 0.1,
    borderRadius: 20,
    backgroundColor: "#A59063",
    width: ITEM_WIDTH,
    elevation: 5,
    // borderWidth: 2
  },
  headingContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    height: 140,
    padding: 20,
    width: "60%",
    // borderBottomLeftRadius: 20,
    // borderTopLeftRadius: 20,
  },
  sliderHeading: {
    fontWeight: "600",
    fontSize: 24,
    color: "#000000",
  },
  sliderSubHeading: {
    fontWeight: "600",
    fontSize: 20,
    color: "#FFFFFF",
  },
  sliderImageContainer: {
    width: "40%",
  },
  containerStyle: {
    // marginLeft: 1,
    // borderWidth: 2,
    // borderColor: 'red',
    paddingTop: 10,
    paddingBottom: 10,
    // textAlign: 'left'
    // flex:1,
    // alignContent: 'flex-start',
    // justifyContent: 'flex-start',
    // width: 100
    // marginLeft: 1,
    // left:0
  },
  businessContainer: {
    flex: 1,
    flexDirection: "column",
    height: 220,
    marginTop: 10,
    // marginBottom: 10

  },
  businessContent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  businessHeading: {
    fontSize: 22,
    fontWeight: "600",
    width: "60%",
    lineHeight: 40,
  },
  eventsContainer: {
    flex: 1,
    flexDirection: "column",
    height: 250,
    // borderWidth: 2
  },
  eventsHeading: {
    fontSize: 22,
    fontWeight: "600",
    width: "60%",
    lineHeight: 40,
  },
  arrowIcons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  businessCards: {
    // paddingTop: 15,
    flexDirection: "row",
    // borderWidth: 2,
    borderRadius: 20,
    // width: '100%',
    // borderWidth: 2,
    height: 150,
    paddingTop: 1.5,
    marginLeft: 2,
    elevation: 5,

  },
  businessCardsContent: {
    padding: 10,
    backgroundColor: "#FFFFFF",
    gap: 10,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    width: '60%',
    height: 145
  },
  businessCardsHeading: {
    color: "#333333",
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 32,
    // textAlign: 'center'
    // justifyContent: 'center',
    // alignItems: 'center'
    // borderWidth: 2
  },
  businessCardsSubHeading: {
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 35,
    opacity: 0.5,
    // color: '#1C1C1C'
  },
  eventCards: {
    flexDirection: "column",
    // borderWidth: .2,
    marginRight: 10,
    // marginTop: 2,
    // borderWidth: 2,
    height: 165,
    width: '50%',
    borderRadius: 25,
    // borderWidth: 2,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5
    // borderRadius: 20
  },
  businessCardsContainer: {
    flexDirection: "row",
    // paddingTop: 10,
    width: '100%',
    // borderWidth: 2,
    height: 200
  },
});
