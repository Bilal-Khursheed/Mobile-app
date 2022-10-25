// Import React and Component
import React, { useState, useEffect, useRef } from "react";
import { ActivityIndicator, View, StyleSheet, Image, Text, Dimensions, TouchableOpacity } from "react-native";

// import AsyncStorage from '@react-native-community/async-storage';
// import { AsyncStorage } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import CarouselComponent from "./Components/Carousel";
import Loader from "./Components/Loader";

// import Carousel from "../Components/Carousel";

export const SLIDER_WIDTH = Dimensions.get("window").width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.5);

const data = [
  {
    id: 1,
    title: "Basic Package",
    desc: "Subscibe today and enjoy unlimited feartures seamleslly",
    heading: "popular",
    months: '01',
    type: 'Monthly',
    price: "$ 100.00"
  },
  {
    id: 2,
    title: "Standard Package",
    desc: "Subscibe today and enjoy unlimited feartures seamleslly",
    heading: "very Popular",
    months: '03',
    type: 'Monthly',
    price: "$ 250.00"

  },
  {
    id: 3,
    title: "Premium Package",
    desc: "Subscibe today and enjoy unlimited feartures seamleslly",
    heading: "MOst Popular",
    type: 'lifetime',
    months: "∞",
    price: "$ 250.00"
  },
];

const SubscriptionPackages = ({ navigation }) => {
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);
  const [index, setIndex] = useState(0);
  const isCarousel = useRef();
  const [loading, setLoading] = useState(false)


  console.log("here is the index====>>>", index)

  useEffect(() => {
    // setTimeout(() => {
    //   setAnimating(false);
    //Check if user_id is set or not
    //If not then send for Authentication
    //else send to Home Screen
    //   AsyncStorage.getItem("user_id").then((value) => {
    //     console.log("here is user", value);
    //     navigation.replace(value === null ? "Auth" : "DrawerNavigationRoutes");
    //   });
    // }, 3000);
    // setTimeout(() => {
    //   AsyncStorage.removeItem("user_id");
    // }, 19000);
  }, []);

  const packagesList = ({ item }) => (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <View style={styles.packageList}>
        <Text style={styles.packageTitle}>{(item.heading).toUpperCase()}</Text>
        <View style={styles.packageDetialsContainer}>
          <Text style={styles.packageContent}>{item.months}</Text>
          <Text style={{ ...styles.packageContent, fontSize: 20, fontWeight: '400', marginTop: -10 }}>{item.type}</Text>
          <Text style={{ ...styles.packageContent, fontSize: 24 }}>{item.price}</Text>
        </View>
      </View>
    </View>
  )

  return (
    <View style={styles.container}>
      <Loader loading={loading} />
      <View style={styles.TFND_header}>
        <Image source={require("../Image/logo.png")} style={{ width: "80%", height: 180, resizeMode: "contain" }} />
      </View>
      <Text style={styles.Heading}>
        World’s biggest collection of Brands.</Text>
      <View style={styles.packages}>
        <View style={{ justifyContent: 'center', alignItems: 'center', padding: 20 }}>
          <Text style={styles.packageHeading}>{data[index].title}</Text>
          <Text style={styles.packageSubHeading}>{data[index].desc}</Text>
        </View>
        <CarouselComponent
          layout={"default"}
          isCarousel={isCarousel}
          setIndex={setIndex}
          // onSnapToItem={(index) => setIndex(index)}
          data={data}
          renderItem={packagesList}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH - 30}
          sliderHeight={150}
          itemHeight={150}
          index={index}
          activeSlideAlignment={'center'}

          pagination={false}
        />
        <TouchableOpacity style={styles.buttonStyle} onPress={() => {
          setLoading(true); setTimeout(() => {
            navigation.replace("DrawerNavigationRoutes");
            setLoading(false)
          }, 300);
        }}>
          <Text style={styles.buttonTextStyle}>Buy Now</Text>
        </TouchableOpacity>
      </View>
      {/* </View> */}
    </View>
  );
};

export default SubscriptionPackages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#EFDDD9",
    // top: 30
  },
  TFND_header: {
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    width: '100%',
    height: 200,
    backgroundColor: "#EFDDD9",
    // borderStyle: "dashed",
    // borderWidth: 1,
    // borderColor: "#7B0000",
    // borderRadius: 150,
    // marginBottom: 40,
  },
  Heading: {
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 22,
    color: "#FF408F",
    maxWidth: '55%',
    textAlign: 'center',
    lineHeight: 35,
    opacity: 0.8
  },
  // activityIndicator: {
  //   marginTop: 60,
  //   height: 60,
  // },
  packages: {
    marginTop: 60,
    height: '54%',
    width: '99%',
    borderBottomWidth: 0,
    borderStartWidth: 1,
    borderLeftWidth: .5,
    borderTopWidth: 2,
    borderRightWidth: 1,
    borderColor: 'pink',
    // borderRadiusT: 30,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    // padding: 20
  },
  packageHeading: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '700',
    lineHeight: 50
  },
  packageSubHeading: {
    fontSize: 14,
    width: '60%',
    textAlign: 'center'
  },
  packageList: {
    marginTop: 40,
    width: 120,
    // padding: 12,
    alignItems: 'center',
    borderColor: '#A57E79',
    borderWidth: 2,
    height: 200,
    borderRadius: 20,
    backgroundColor: '#FFFFFF'
  },
  packageTitle: {
    backgroundColor: '#A57E79',
    width: '100%',
    borderTopRightRadius: 17,
    borderTopLeftRadius: 17,
    padding: 14,
    color: '#FFFFFF',
    fontWeight: '600',
    textAlign: 'center'
  },
  packageDetialsContainer: {
    justifyContent: 'space-between',
    // borderColor: 'blue',
    // borderWidth: 1,
    width: '100%',
    height: '65%',
    alignItems: 'center'
  },
  packageContent: {
    color: '#003151',
    fontSize: 30,
    fontWeight: '700'
  },
  buttonStyle: {
    width: '100%',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonTextStyle: {
    textAlign: 'center',
    padding: 15,
    width: '55%',
    backgroundColor: 'pink',
    borderRadius: 15,
    fontSize: 20,
    fontWeight: '700',
  }
});
