// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from "react";
import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity } from "react-native";
import EvilIcons from "react-native-vector-icons/EvilIcons";

const ProfileScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: 50, backgroundColor: "#F5F5FA" }}>
      <View style={{ flex: 1, padding: 20 }}>
        <View style={styles.profileImageContainer}>
          <Image
            style={styles.profileImage}
            resizeMode="contain"
            source={{
              uri: "https://images.unsplash.com/photo-1604072366595-e75dc92d6bdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
            }}
          />
          <Text style={{ color: "#FF006A", fontSize: 12 }}>Join date: 20/04/2022</Text>
        </View>
        <TouchableOpacity style={styles.penIcon} onPress={() => navigation.navigate("editProfileScreen")}>
          <EvilIcons name="pencil" size={30} />
        </TouchableOpacity>
        <View style={{ padding: 20 }}>
          {/* <Text style={{ fontSize: 22, fontWeight: "700" }}>Information</Text> */}
          <View style={styles.informationContainer}>
            <View style={styles.informationContent}>
              <View style={{ width: "100%" }}>
                <Text style={styles.labels}>Username</Text>
                <Text style={styles.inputStyle}>Bally k</Text>
              </View>
              <View style={{ width: "100%" }}>
                <Text style={styles.labels}>Email I’d</Text>
                <Text style={styles.inputStyle}>Bilal@yopmail.com</Text>
              </View>
              <View style={{ width: "100%" }}>
                <Text style={styles.labels}>Phone Number</Text>
                <Text style={styles.inputStyle}>0900-78601111</Text>
              </View>
              <View style={{ width: "100%" }}>
                <Text style={styles.labels}>Credit Card</Text>
                <Text style={styles.inputStyle}>374245455400126 Exp: 05/2023 </Text>
              </View>
            </View>

            {/* <Text style={{ textAlign: "right" }}>Join date:20/04/2022</Text> */}
          </View>
          <View>
            <Text style={{ fontSize: 20, fontWeight: "700", lineHeight: 50 }}>Subscription</Text>
            <View style={styles.subscription}>
              <Text style={{ fontSize: 18,fontWeight: '400', lineHeight: 45 }}>Monthly Subscription </Text>
              <View style={{ flexDirection: "row", justifyContent: "space-between", paddingRight: 10 }}>
                <Text style={{ textAlign: "center", width: "50%", padding: 10, fontWeight: "500", fontSize: 16 }}>$145.00</Text>
                <TouchableOpacity>
                  <Text style={styles.subButton}>Unsubscribe</Text>
                </TouchableOpacity>
              </View>
              <Text style={{ marginTop: 8, textAlign: "center", lineHeight: 45 }}>
                *Your subscription ends on <Text style={{ color: "#FF0000", fontWeight: "500" }}>30 Nov 2022</Text>
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
const styles = StyleSheet.create({
  profileImageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    width: "26%",
    height: 120,
    borderRadius: 40,
    padding: 10,
    borderWidth: 5,
    borderColor: "#FFFFFF",
  },
  informationContent: {
    flexDirection: "column",
    width: "100%",
    justifyContent: "space-between",
  },
  informationContainer: {
    marginTop: 10,
    // borderWidth: 1,
    // borderColor: "#FF00000A",
    padding: 15,
    borderRadius: 20,
    backgroundColor: "#FF00000A",
    // shadowColor: "red",
    // shadowOffset: { width: -2, height: 2 },
    // shadowOpacity: 0.9,
    // shadowRadius: 1,
  },
  inputStyle: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#A9A9A9",
    width: "100%",
    padding: 10,
  },
  labels: {
    fontSize: 16,
    lineHeight: 42,
    fontWeight: "500",
  },
  subscription: {
    backgroundColor: "#FF00000A",
    padding: 12,
    borderRadius: 20,
    paddingTop: 2
  },
  subButton: {
    color: "black",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    backgroundColor: "#FFB7D5",
    padding: 10,
    borderRadius: 10,
  },
  penIcon: {
    position: "absolute",
    top: "26.5%",
    left: "9%",
    padding: 5,
    backgroundColor: "#FFB7D5",
    borderRadius: 70,
  },
});
