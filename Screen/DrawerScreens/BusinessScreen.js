// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, Dimensions, Image, ImageBackground, Button, TouchableOpacity, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Fontisto";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import EntypoIcon from "react-native-vector-icons/Entypo";
import CarouselComponent from "../Components/Carousel";
import SearchBar from "../Components/SearchBar";

//
export const SLIDER_WIDTH = Dimensions.get("window").width + 10;
export const WIDTH = Dimensions.get("window").width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.65);

// Data
const data = [
  {
    id: 1,
    h1: "Today’s Best Seller",
    h2: " Off up to 75%",
    url: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=8",
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

const images = [{ url: 'https://images.pexels.com/photos/3489131/pexels-photo-3489131.jpeg?auto=compress&cs=tinysrgb&w=1600' }, { url: 'https://images.pexels.com/photos/1727280/pexels-photo-1727280.jpeg?auto=compress&cs=tinysrgb&w=1600' }, { url: 'https://images.pexels.com/photos/1381556/pexels-photo-1381556.jpeg?auto=compress&cs=tinysrgb&w=1600' }]

const BusinessScreen = ({ navigation }) => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);

  const salesRenderItem = ({ item }) => {
    return (
      <View style={styles.salesSliderContainer}>
        <ImageBackground
          source={{ uri: item.url }}
          resizeMode="contain"
          style={{
            height: 150,
            width: "100%",
          }}
          imageStyle={styles.salesSliderBg}
        >
          <View style={styles.salesSliderContent}>
            <View style={styles.salesHeadingContainer}>
              <Text style={styles.salesSliderHeading}>{item.h1}</Text>
              {/* <Text style={styles.sliderSubHeading}> {item.h2}</Text> */}
            </View>
            <View style={styles.salesFooterContainer}>
              <Icon style={styles.salesArrowsLeft} name="arrow-right-l" size={22} />
              {/* <Text style={styles.sliderHeading}>{item.h1}</Text> */}
              <Text style={styles.sliderSubHeading}> {item.h2}</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  };
  const businessRenderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.businessCards}
        onPress={() =>
          navigation.navigate("businessDetials")}
      >
        {/* <View > */}
        <Image style={{ width: "45%", height: 125, borderRadius: 20 }} resizeMode="contain" source={require(`../../Image/test1.jpeg`)} />
        <View style={styles.businessCardsContent}>
          <Text style={styles.businessCardsHeading}>Complete Gift Box for Mens</Text>
          <Text style={styles.businessCardsSubStars}>
            <AntDesignIcon name="star" color={"#FFC42D"} size={18} /> 4.9
          </Text>
          <Text style={styles.businessCardsLoc}>
            <EntypoIcon name="location-pin" size={18} />
            Dubai, Ajman
          </Text>
          <View style={styles.businessCardFooter}>
            <Text style={styles.businessCardPrice}>$ 500</Text>
            <TouchableOpacity style={styles.businessCardButton}>
              <Text style={{ color: "#FFFF", fontSize: 12, fontWeight: "400" }}>Buy Now</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* </View> */}
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FBFDFE" }}>
      <View style={{ flex: 1, padding: 20 }}>
        <Text style={styles.welcomeText}>Hey, Shaniera! Let's start exploring</Text>
        <SearchBar searchPhrase={searchPhrase} setSearchPhrase={setSearchPhrase} clicked={clicked} setClicked={setClicked} />
        {/* filters */}
        <View style={styles.filtersContainer}>
          {["All", "Clothing", "FootWear", "Bags"].map((item, key) => (
            <Text
              style={{
                ...styles.filterButton,
                backgroundColor: activeFilter === item ? "#FEB6D3" : "#F5F4F8",
                color: activeFilter === item ? "white" : "black",
              }}
              onPress={() => setActiveFilter(item)}
              key={key}
            >
              {item}
            </Text>
          ))}
        </View>
        {/* Cards */}
        <ScrollView>
          <View>
            <CarouselComponent
              layout={"default"}
              ref={isCarousel}
              setIndex={setIndex}
              data={data}
              renderItem={salesRenderItem}
              sliderWidth={SLIDER_WIDTH}
              itemWidth={ITEM_WIDTH}
              sliderHeight={150}
              itemHeight={150}
              index={index}
              containerStyle={{ ...styles.containerStyle, elevation: 5 }}
              pagination={false}
            />
          </View>
          <View>
            <View style={styles.featureBusiness}>
              <Text style={styles.featureBusinessHeading}>Featured Businesses</Text>
              <Text style={styles.featureBusinessViewAll}>View all</Text>
            </View>
            <CarouselComponent
              layout={"default"}
              ref={isCarousel}
              setIndex={setIndex}
              data={data}
              renderItem={businessRenderItem}
              sliderWidth={SLIDER_WIDTH}
              itemWidth={ITEM_WIDTH}
              sliderHeight={150}
              itemHeight={150}
              index={index}
              loop={true}
              containerStyle={styles.containerStyle}
              pagination={false}
            />
          </View>
          <View>
            <View style={styles.featureBusiness}>
              <Text style={styles.featureBusinessHeading}>Explore Nearby Buisnesses</Text>
              {/* <Text style={styles.featureBusinessViewAll}>View all</Text> */}
            </View>
            <View style={styles.NbBusinessCards}>
              {[1, 2, 4, 5].map((item, ind) => (
                <View key={ind} style={styles.NbBusinessCardContent}>
                  <ImageBackground imageStyle={{ height: 140, borderRadius: 20 }} resizeMode="contain" source={ind === 0 ? require(`../../Image/test2.jpeg`) : { uri: images[--ind]?.url }}>
                    <TouchableOpacity style={{ ...styles.businessCardButton, marginTop: 90, width: "52%", padding: 8, marginLeft: "45%" }}>
                      <Text style={{ color: "black", fontSize: 12, fontWeight: "600", textAlign: "center" }}>Buy $200</Text>
                    </TouchableOpacity>
                  </ImageBackground>
                  <View style={{ marginTop: 25, paddingLeft: 5 }}>
                    <Text style={styles.NbBusinessCardTitle}>Makeup Kit</Text>
                    <View style={{ flexDirection: "row", justifyContent: "flex-start", marginTop: 5 }}>
                      <Text style={styles.businessCardsSubStars}>
                        <AntDesignIcon name="star" color={"#FFC42D"} size={16} /> 4.9
                      </Text>
                      <Text style={{ ...styles.businessCardsLoc, marginLeft: 10 }}>
                        <EntypoIcon name="location-pin" size={18} color={"#FA712D"} />
                        Dubai, Ajman
                      </Text>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default BusinessScreen;

const styles = StyleSheet.create({
  welcomeText: {
    fontSize: 22,
    fontWeight: "500",
    width: "60%",
    lineHeight: 40,
  },
  filtersContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10
  },
  filterButton: {
    padding: 15,
    backgroundColor: "#F5F4F8",
    borderRadius: 20,
    fontWeight: "600",
  },
  salesSliderContainer: {
    // flex: 1,
    marginTop: 20,

    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
    // marginLeft: -70
  },
  salesSliderBg: {
    borderRadius: 25,
    borderBottomLeftRadius: 0,
    width: "100%",
    // width: WIDTH/2
    // width: SLIDER_WIDTH
    // borderRadius: 100,
  },
  salesSliderContent: {
    padding: 5,
    flex: 1,
    justifyContent: "space-between",
  },
  salesHeadingContainer: {
    padding: 10,
  },
  salesFooterContainer: {
    flexDirection: "row",
    alignItems: "space-between",
    justifyContent: "space-between",
    paddingLeft: 0,
    paddingRight: 10,
  },
  salesSliderHeading: {
    fontSize: 20,
    fontWeight: "700",
    width: "50%",
    // color: 'red'
  },
  salesArrowsLeft: {
    paddingLeft: 20,
    marginLeft: -5,
    marginBottom: -5,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    borderTopRightRadius: 50,
    backgroundColor: "#DE8E9B",
  },
  featureBusiness: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  featureBusinessHeading: {
    fontWeight: "700",
    fontSize: 20,
  },
  featureBusinessViewAll: {
    textDecorationLine: "underline",
    fontSize: 15,
    fontWeight: "500",
  },
  businessCards: {
    flexDirection: "row",
    backgroundColor: "#F5F4F8",
    borderRadius: 25,
    padding: 6,
    paddingBottom: 10,
    marginTop: 10,
    marginBottom: 10,
    borderColor: 'red',
    // borderWidth: .2,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5
  },
  businessCardsContent: {
    flexDirection: "column",
    padding: 10,
    width: "55%",
  },
  businessCardsHeading: {
    textAlign: "auto",
    lineHeight: 22,
    fontSize: 14,
    fontWeight: "700",
  },
  businessCardsSubStars: {
    justifyContent: "center",
    alignItems: "center",
    // paddingBottom: 4,
    // paddingTop: 4
  },
  businessCardsLoc: {
    color: "#53587A",
    fontSize: 12,
  },
  businessCardFooter: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  businessCardPrice: {
    fontWeight: "700",
    fontSize: 16,
  },
  businessCardButton: {
    borderRadius: 20,
    backgroundColor: "#DE8E9B",
    padding: 12,
  },
  NbBusinessCards: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  NbBusinessCardContent: {
    margin: 10,
    width: WIDTH / 2.62,
    height: 200,
    padding: 2,
    backgroundColor: "#F5F4F8",
    flexDirection: "column",
    borderRadius: 20,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5
  },
  NbBusinessCardTitle: {
    fontWeight: "700",
    fontSize: 16,
  },
});
