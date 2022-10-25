
// Import React and Component
import React from "react";
import { View, Text, SafeAreaView, StyleSheet, ImageBackground, Linking, Button, TouchableOpacity } from "react-native";
import Fontisto from "react-native-vector-icons/Fontisto";

const EventDetials = ({ navigation: { goBack } }) => {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: 20, padding: 20, }}>
      <View>
        <View style={styles.headingContainer}>
          <TouchableOpacity style={styles.backButtonStyle} onPress={() => goBack()}>
            <Text style={styles.buttonTextStyle}>Black</Text>
          </TouchableOpacity>
          <Text style={styles.heading}>Desi Food Festival</Text>
          <View>
            <Text>Share</Text>
          </View>
        </View>
        <View>
          <ImageBackground
            style={styles.imageContainer}
            imageStyle={{ height: 240, borderRadius: 25, opacity: 0.8 }}
            resizeMode="contain"
            source={{
              uri: "https://plus.unsplash.com/premium_photo-1661387829759-d240773bcb48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            }}
          >
            <Text style={styles.imageContainerHeading}>Halloween Sale!</Text>
            <Text style={styles.imageContainerSubHeading}>All discount up to 60%</Text>
          </ImageBackground>
        </View>
        <View style={styles.midContainer}>
          <Text style={styles.midContainerHeading}>Discount Voucher</Text>
          <Text style={styles.midContainerSubHeading}>
            <Fontisto name="date" size={20} color='black' />{' '} October 27, 2022
          </Text>
        </View>
        <View style={styles.midSecContainer}>
          <Text style={styles.midSecContainerHeading}>Category, Mode & Price:</Text>
          <View style={styles.midSecContent}>
            {['Babies', 'Outlet', '20$'].map((item, ind) => <Text numberOfLines={1} style={styles.midSecContainerItems} key={ind}>{item}</Text>)}
          </View>
        </View>
        {/* Visit Website: www.shoppingclub.com */}
        <View style={styles.linkContainer}>
          <Text>Visit Website: </Text>
          <Text style={{ color: '#001CF9' }}
            onPress={() => Linking.openURL('http://google.com')}>
            www.shoppingclub.com
          </Text>
        </View>
        <View style={styles.couponContainer}>
          <Text style={styles.couponContentImg}><Fontisto name="date" size={20} color='black' /></Text>
          <View style={styles.couponContent}>
            <Text style={styles.couponContentHeading}>
              HLWN40
            </Text>
            <Text style={styles.couponContentDes}>Use this coupon to get 40% off on your transaction</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EventDetials;

const styles = StyleSheet.create({
  headingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 50,
    alignItems: "center",
    marginBottom: 20,
  },
  backButtonStyle: {
    padding: 10
    // borderWidth: 1
    // fontSize: 16
  },
  heading: {
    fontSize: 24,
    fontWeight: "600",
  },
  imageContainer: {
    padding: 20,
  },
  imageContainerHeading: {
    fontSize: 24,
    width: 120,
    color: "#FFFFFF",
    fontWeight: "700",
  },
  imageContainerSubHeading: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 14,
  },
  midContainer: {
    marginTop: 160,
  },
  midContainerHeading: {
    fontSize: 24,
    fontWeight: "600",
  },
  midContainerSubHeading: {
    fontSize: 12,
    color: "#53587A",
    fontWeight: "400",
    lineHeight: 40
  },
  midSecContainer: {},
  midSecContent: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  midSecContainerHeading: {
    fontSize: 18,
    fontWeight: '600'
  },
  midSecContainerItems: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#E3BC9A',
    borderRadius: 10,
    minWidth: 65,
    // justifyContent: 'center',
    // alignItems: 'center',
    color: '#FF008A',
    fontWeight: '400',
    textAlign: 'center',
    fontSize: 16,
  },
  linkContainer: {
    flexDirection: 'row'
  },
  couponContainer: {
    width: '90%',
    margin: 20,
    marginTop: 60,
    backgroundColor: '#FFB7D5',
    opacity: .6,
    borderRadius: 25,
    padding: 25,
    flexDirection: 'row'
  },
  couponContent: {
    marginLeft: 10,

  },
  couponContentHeading: {
    color: '#FF008A',
    fontSize: 20,
    fontWeight: '700'
  },
  couponContentDes: {
    color: '#FF008A',
  },
  couponContentImg: {
    padding: 20,
    backgroundColor: '#A57E79',
    borderRadius: 17

  }
});
