// Import React and Component
import React, { useState, useEffect } from "react";
import { ActivityIndicator, View, StyleSheet, Image } from "react-native";

// import AsyncStorage from '@react-native-community/async-storage';
// import { AsyncStorage } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

const SplashScreen = ({ navigation }) => {
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      // Check if user_id is set or not
      // If not then send for Authentication
      // else send to Home Screen
      AsyncStorage.getItem("user_id").then((value) => {
        console.log("here is user", value);
        navigation.replace(value === null ? "Auth" : "DrawerNavigationRoutes");
      });
    }, 3000);
    setTimeout(() => {
      AsyncStorage.removeItem("user_id");
    }, 19000);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.TFND_header}>
        <Image source={require("../Image/logo1.png")} style={{ width: "100%", resizeMode: "contain", marginTop: -40 }} />
      </View>
      {/* <View>
        <Text style={styles.Heading}>
          <Text style={{ color: "#FF005C" }}>TFND</Text> For
        </Text>
        <Text style={styles.Heading}> Everyone</Text>
      </View> */}
      <ActivityIndicator animating={animating} color="#FF005C" size="large" style={styles.activityIndicator} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#E799AB",
    // top: 30
  },
  TFND_header: {
    marginTop: 90,
    alignItems: "center",
    justifyContent: "center",
    width: 220,
    height: 220,
    backgroundColor: "#F0CDCD",
    borderStyle: "dashed",
    // borderWidth: 1,
    // borderColor: "#7B0000",
    borderRadius: 150,
    // marginBottom: 40,
  },
  Heading: {
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: 45,
    color: "#A15842",
  },
  activityIndicator: {
    marginTop: 60,
    height: 60,
  },
});
