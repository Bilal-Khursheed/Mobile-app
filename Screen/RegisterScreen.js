// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, { useState, createRef, useRef } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from "react-native";
import PhoneInput from "react-native-phone-number-input";
import Icon from "react-native-vector-icons/FontAwesome5";

import Loader from "./Components/Loader";

const RegisterScreen = (props) => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [confirmPassVisible, setConfirmPassVisible] = useState(true);
  //   const phoneInput = useRef(null);
  const [isRegistrationSuccess, setIsRegistrationSuccess] = useState(false);

  const emailInputRef = createRef();
  const ageInputRef = createRef();
  const addressInputRef = createRef();
  const passwordInputRef = createRef();
  const phoneInput = createRef();

  const handleSubmitButton = () => {
    setErrortext("");
    if (!userName) {
      alert("Please fill Name");
      return;
    }
    if (!userEmail) {
      alert("Please fill Email");
      return;
    }
    // if (!userAge) {
    //   alert("Please fill Age");
    //   return;
    // }
    // if (!userAddress) {
    //   alert("Please fill Address");
    //   return;
    // }
    if (!userPassword) {
      alert("Please fill Password");
      return;
    }
    //Show Loader
    setLoading(true);
    var dataToSend = {
      name: userName,
      email: userEmail,
      age: userAge,
      address: userAddress,
      password: userPassword,
    };
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    setTimeout(() => {
      setIsRegistrationSuccess(true);
      setLoading(false)
      props.navigation.navigate("subscription")
    }, 3000);
    // fetch("http://localhost:3000/api/user/register", {
    //   method: "POST",
    //   body: formBody,
    //   headers: {
    //     //Header Defination
    //     "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((responseJson) => {
    //     //Hide Loader
    //     setLoading(false);
    //     console.log(responseJson);
    //     // If server response message same as Data Matched
    //     if (responseJson.status === "success") {
    //       setIsRegistrationSuccess(true);
    //       console.log("Registration Successful. Please Login to proceed");
    //     } else {
    //       setErrortext(responseJson.msg);
    //     }
    //   })
    //   .catch((error) => {
    //     //Hide Loader
    //     setLoading(false);
    //     console.error(error);
    //   });
  };
  if (isRegistrationSuccess) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#307ecc",
          justifyContent: "center",
        }}
      >
        <Image
          source={require("../Image/success.png")}
          style={{
            height: 150,
            resizeMode: "contain",
            alignSelf: "center",
          }}
        />
        <Text style={styles.successTextStyle}>Registration Successful</Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => props.navigation.navigate("subscription")}
        >
          <Text style={styles.buttonTextStyle}>Login Now</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={styles.MainBody}>
      <Loader loading={loading} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <View style={styles.HeaderSection}>
          <Text style={{ fontWeight: "700", fontSize: 21, marginBottom: 15 }}>
            Sign up{" "}
          </Text>
          <Text>
            or{" "}
            <Text
              style={{ color: "#FF408F", fontSize: 16 }}
              onPress={() => props.navigation.navigate("LoginScreen")}
            >
              Sign In
            </Text>
          </Text>
        </View>
        <KeyboardAvoidingView enabled style={{ marginTop: 20 }}>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserName) => setUserName(UserName)}
              underlineColorAndroid="#f000"
              placeholder="First Name"
              placeholderTextColor="#555555"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={() =>
                emailInputRef.current && emailInputRef.current.focus()
              }
              blurOnSubmit={false}
              autoFocus
            />
            <TextInput
              style={{ ...styles.inputStyle, marginLeft: 6 }}
              onChangeText={(UserName) => setUserName(UserName)}
              underlineColorAndroid="#f000"
              placeholder="Last Name"
              placeholderTextColor="#555555"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={() =>
                emailInputRef.current && emailInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserEmail) => setUserEmail(UserEmail)}
              underlineColorAndroid="#f000"
              placeholder="Email"
              placeholderTextColor="#555555"
              keyboardType="email-address"
              ref={emailInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current && passwordInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.PhoneInputStyle}>
            <PhoneInput
              containerStyle={styles.PhoneInputFieldStyle}
              textContainerStyle={styles.TextInputStylePass}
              flagButtonStyle={styles.FlagButtonStyle}
              ref={phoneInput}
              defaultValue={phoneNumber}
              defaultCode="AE"
              layout="first"
              placeholder="Phone Number"
              onChangeText={(text) => {
                setPhoneNumber(text);
              }}
              onSubmitEditing={() =>
                passwordInputRef.current && passwordInputRef.current.focus()
              }
              blurOnSubmit={false}
              // onChangeFormattedText={(text) => {
              //   setFormattedValue(text);
              // }}
              withDarkTheme
            // withShadow
            // autoFocus
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
              onSubmitEditing={() =>
                ageInputRef.current && ageInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
            <Pressable
              style={styles.EyeIconStyle}
              onPress={() => setPasswordVisible(!passwordVisible)}
            >
              <Icon
                name={passwordVisible ? "eye-slash" : "eye"}
                size={15}
                color="#FF408F"
              />
            </Pressable>
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserPassword) => setUserPassword(UserPassword)}
              underlineColorAndroid="#f000"
              placeholder="Confirm Password"
              placeholderTextColor="#555555"
              ref={passwordInputRef}
              returnKeyType="next"
              secureTextEntry={confirmPassVisible}
              onSubmitEditing={() =>
                ageInputRef.current && ageInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
            <Pressable
              style={styles.EyeIconStyle}
              onPress={() => setConfirmPassVisible(!confirmPassVisible)}
            >
              <Icon
                name={confirmPassVisible ? "eye-slash" : "eye"}
                size={15}
                color="#FF408F"
              />
            </Pressable>
          </View>
          {errortext != "" ? (
            <Text style={styles.errorTextStyle}>{errortext}</Text>
          ) : null}
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={handleSubmitButton}
          >
            <Text style={styles.buttonTextStyle}>Register</Text>
          </TouchableOpacity>
          <View style={{ ...styles.SectionStyle, marginTop: -10 }}>
            <Text style={{ textAlign: "center", lineHeight: 30 }}>
              By tapping Register, you agree to our
              <Text style={{ fontWeight: "bold" }}> Terms of use </Text>and{" "}
              <Text style={{ fontWeight: "bold" }}>Privacy</Text>.
            </Text>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default RegisterScreen;

const styles = StyleSheet.create({
  MainBody: { flex: 1, backgroundColor: "#F5FAFE", paddingTop: 60 },
  SectionStyle: {
    flexDirection: "row",
    height: 65,
    marginTop: 5,
    marginLeft: 35,
    marginRight: 35,
    margin: 5,
  },
  EyeIconStyle: {
    position: "absolute",
    marginLeft: 290,
    marginTop: 22,
  },
  PhoneInputStyle: {
    marginTop: 5,
    marginLeft: 35,
    flexDirection: "row",
    margin: 5,
    height: 60,
    borderWidth: 0,
  },
  PhoneInputFieldStyle: {
    backgroundColor: "#FFFFFF",
    borderRadius: 0,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E0E0E0",
    borderRadius: 12,
    width: "91%",
  },
  TextInputStylePass: {
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },
  FlagButtonStyle: {
    marginTop: 10,
    borderRightWidth: 0.5,
    height: 40,
  },
  HeaderSection: {
    padding: 10,
  },
  buttonStyle: {
    backgroundColor: "#E293A2",
    borderWidth: 0,
    color: "#1111",
    borderColor: "#E293A2",
    height: 50,
    alignItems: "center",
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 30,
    marginBottom: 20,
    shadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  buttonTextStyle: {
    color: "black",
    paddingVertical: 15,
    fontSize: 18,
    fontWeight: "700",
    lineHeight: 23,
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
  errorTextStyle: {
    color: "red",
    textAlign: "center",
    fontSize: 14,
  },
  successTextStyle: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    padding: 30,
  },
});
