// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from "react";
import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";

const EditProfileScreen = ({ navigation: { goBack } }) => {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: 30, padding: 10, backgroundColor: "#F5F5FA" }}>
      <TouchableOpacity onPress={() => goBack()}>
        <Ionicons name="arrow-back" size={25} />
      </TouchableOpacity>
      <View style={{ flex: 1, padding: 20 }}>
        <View style={styles.profileImageContainer}>
          <Image
            style={styles.profileImage}
            resizeMode="contain"
            source={{
              uri: "https://images.unsplash.com/photo-1604072366595-e75dc92d6bdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
            }}
          />
        </View>
        <View style={styles.content}>
          <View style={{ width: "100%", marginBottom: 15 }}>
            <Text style={styles.labels}>Username</Text>
            <TextInput style={styles.inputStyle} value={"Bally k"} />
          </View>
          <View style={{ width: "100%", marginBottom: 15 }}>
            <Text style={styles.labels}>Email I’d</Text>
            <TextInput style={styles.inputStyle} value={"Bilal@yopmail.com"} />
          </View>
          <View style={{ width: "100%", marginBottom: 15 }}>
            <Text style={styles.labels}>Phone Number</Text>
            <TextInput style={styles.inputStyle} value={"0900-78601111"} />
            {/* <Text style={styles.inputStyle}>0900-78601111</Text> */}
          </View>
          <View style={{ marginTop: 30 }}>
            <TouchableOpacity
              style={{ width: "100%", justifyContent: "center", alignItems: "center" }}
              onPress={() => {
                alert("Your information is Updated Succesfully.");
                setTimeout(() => {
                  goBack();
                }, 2000);
              }}
            >
              <Text style={styles.updateButton}>Update</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EditProfileScreen;

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
  content: {
    padding: 20,
    flexDirection: "column",
    width: "100%",
    justifyContent: "space-between",
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
  updateButton: {
    width: "80%",
    textAlign: "center",
    backgroundColor: "#FFB7D5",
    padding: 12,
    borderRadius: 10,
    fontSize: 18,
    fontWeight: "500",
  },
});
