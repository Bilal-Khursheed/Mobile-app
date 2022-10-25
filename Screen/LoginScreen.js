// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import { HeaderTitle } from "@react-navigation/elements";
import React, { useState, createRef } from "react";
import { StyleSheet, TextInput, View, Text, ScrollView, Image, Keyboard, TouchableOpacity, KeyboardAvoidingView, Pressable } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
// import LinearGradient from "react-native-linear-gradient";

// import AsyncStorage from '@react-native-community/async-storage';
// import { AsyncStorage } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Loader from "./Components/Loader";

const LoginScreen = ({ navigation }) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(true);

  const passwordInputRef = createRef();

  const handleSubmitPress = () => {
    setErrortext("");
    if (!userEmail) {
      alert("Please fill Email");
      return;
    }
    if (!userPassword) {
      alert("Please fill Password");
      return;
    }

    setLoading(true);
    setTimeout(async () => {
      await AsyncStorage.setItem("user_id", userEmail);
      navigation.replace("DrawerNavigationRoutes");
      setLoading(true);
    }, 3000);
    return;
    let dataToSend = { email: userEmail, password: userPassword };
    let formBody = [];
    for (let key in dataToSend) {
      let encodedKey = encodeURIComponent(key);
      let encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    fetch("http://localhost:3000/api/user/login", {
      method: "POST",
      body: formBody,
      headers: {
        //Header Defination
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //Hide Loader
        setLoading(false);
        console.log(responseJson);
        // If server response message same as Data Matched
        if (responseJson.status === "success") {
          AsyncStorage.setItem("user_id", responseJson.data.email);
          console.log(responseJson.data.email);
          navigation.replace("DrawerNavigationRoutes");
        } else {
          setErrortext(responseJson.msg);
          console.log("Please check your email id or password");
        }
      })
      .catch((error) => {
        //Hide Loader
        setLoading(false);
        console.error(error);
      });
  };

  return (
    <View style={styles.mainBody}>
      <Loader loading={loading} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          marginTop: "40%",
          // justifyContent: 'center',
          // alignContent: 'center',
        }}
      >
        <View>
          <KeyboardAvoidingView enabled>
            <View style={{ alignItems: "center" }}>
              <HeaderTitle>Welcome back</HeaderTitle>
              <Text>Yaaay! Enter your password to continue</Text>
              {/* <Image
                source={require('../Image/aboutreact.png')}
                style={{
                  width: '50%',
                  height: 100,
                  resizeMode: 'contain',
                  margin: 30,
                }}
              /> */}
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserEmail) => setUserEmail(UserEmail)}
                placeholder="Enter Email" //dummy@abc.com
                placeholderTextColor="#555555"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() => passwordInputRef.current && passwordInputRef.current.focus()}
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserPassword) => setUserPassword(UserPassword)}
                underlineColorAndroid="#f000"
                placeholder="Enter Password"
                placeholderTextColor="#555555"
                ref={passwordInputRef}
                returnKeyType="next"
                secureTextEntry={passwordVisible}
                // onSubmitEditing={() =>
                //   ageInputRef.current && ageInputRef.current.focus()
                // }
                blurOnSubmit={false}
              />
              <Pressable style={styles.EyeIconStyle} onPress={() => setPasswordVisible(!passwordVisible)}>
                <Icon name={passwordVisible ? "eye-slash" : "eye"} size={15} color="#FF408F" />
              </Pressable>
            </View>
            {errortext != "" ? <Text style={styles.errorTextStyle}>{errortext}</Text> : null}

            <View style={styles.BottomSection}>
              <Text style={{ color: "#FF408F", marginTop: 10 }}>Forgot password?</Text>
              <Text style={{ color: "#FF408F", marginTop: 10 }}>
                Not you?{" "}
                <Text style={{ color: "#A57E79" }} onPress={() => navigation.navigate("RegisterScreen")}>
                  Switch Account
                </Text>
              </Text>
            </View>
            <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5} onPress={handleSubmitPress}>
              <Text style={styles.buttonTextStyle}>Login</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#F5FAFE",
    alignContent: "center",
    // borderRadius : '40px'
  },
  SectionStyle: {
    flexDirection: "row",
    height: 60,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },

  BottomSection: {
    flexDirection: "column",
    // width: '100%',
    // alignContent: 'center',
    alignItems: "center",
    // marginLeft: 100
  },

  buttonStyle: {
    backgroundColor: "#E597A8",
    borderWidth: 0,
    color: "#070202",
    borderColor: "#E597A8",
    height: 45,
    alignItems: "center",
    // borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 55,
    marginBottom: 25,
    borderRadius: 30,
  },
  buttonTextStyle: {
    color: "#070202",
    paddingVertical: 13,
    fontSize: 16,
    fontWeight: "700",
  },
  inputStyle: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E0E0E0",
    borderRadius: 12,
    paddingLeft: 15,
    paddingRight: 15,
  },
  registerTextStyle: {
    color: "#1111",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
    alignSelf: "center",
    padding: 10,
  },
  errorTextStyle: {
    color: "red",
    textAlign: "center",
    fontSize: 14,
  },
  EyeIconStyle: {
    position: "absolute",
    marginLeft: 290,
    marginTop: 22,
  },
});
