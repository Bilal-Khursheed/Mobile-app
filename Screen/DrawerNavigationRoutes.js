// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React
import React from "react";

// Import Navigators from React Navigation
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createBottomTabNavigator } from "@react-navigation/t";

// Import Screens
import HomeScreen from "./DrawerScreens/HomeScreen";
import EventsScreen from "./DrawerScreens/EventsScreen";
import CustomSidebarMenu from "./Components/CustomSidebarMenu";
import NavigationDrawerHeader from "./Components/NavigationDrawerHeader";
import Icon from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { StyleSheet } from "react-native";
import ProfileScreen from "./DrawerScreens/ProfileScreen";
import BusinessScreen from "./DrawerScreens/BusinessScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// const HomeScreenStack = ({ navigation }) => {
//   return (
//     <Stack.Navigator initialRouteName="HomeScreen">
//       <Stack.Screen
//         name="HomeScreen"
//         component={HomeScreen}
//         options={{
//           title: "Home", //Set Header Title
//           headerLeft: () => (
//             <NavigationDrawerHeader navigationProps={navigation} />
//           ),
//           headerStyle: {
//             backgroundColor: "#307ecc", //Set Header color
//           },
//           headerTintColor: "#fff", //Set Header text color
//           headerTitleStyle: {
//             fontWeight: "bold", //Set Header text style
//           },
//         }}
//       />
//     </Stack.Navigator>
//   );
// };

// const SettingScreenStack = ({ navigation }) => {
//   return (
//     <Stack.Navigator
//       initialRouteName="SettingsScreen"
//       screenOptions={{
//         headerLeft: () => (
//           <NavigationDrawerHeader navigationProps={navigation} />
//         ),
//         headerStyle: {
//           backgroundColor: "#307ecc", //Set Header color
//         },
//         headerTintColor: "#fff", //Set Header text color
//         headerTitleStyle: {
//           fontWeight: "bold", //Set Header text style
//         },
//       }}
//     >
//       <Stack.Screen
//         name="SettingsScreen"
//         component={SettingsScreen}
//         options={{
//           title: "Settings", //Set Header Title
//         }}
//       />
//     </Stack.Navigator>
//   );
// };

const DrawerNavigatorRoutes = (props) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: "#FFB7D5",
      }}
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Business"
        options={{
          tabBarLabel: "Business",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="business" size={size} color={color} />
          ),
        }}
        component={BusinessScreen}
      />
      <Tab.Screen
        name="Events"
        options={{
          headerShown: false,
          tabBarLabel: "Events",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="event" size={size} color={color} />
          ),
        }}
        component={EventsScreen}
      />
      <Tab.Screen
        name="Profile"
        options={{
          headerShown: false,
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={size} color={color} />
          ),
        }}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

// const DrawerNavigatorRoutes = (props) => {
//   return (
//     <Drawer.Navigator
//       drawerContentOptions={{
//         activeTintColor: '#cee1f2',
//         color: '#cee1f2',
//         itemStyle: {marginVertical: 5, color: 'white'},
//         labelStyle: {
//           color: '#d8d8d8',
//         },
//       }}
//       screenOptions={{headerShown: false}}
//       drawerContent={CustomSidebarMenu}>
//       <Drawer.Screen
//         name="HomeScreenStack"
//         options={{drawerLabel: 'Home Screen'}}
//         component={HomeScreenStack}
//       />
//       {/* <Drawer.Screen
//         name="SettingScreenStack"
//         options={{drawerLabel: 'Setting Screen'}}
//         component={SettingScreenStack}
//       /> */}
//     </Drawer.Navigator>
//   );
// };
const styles = StyleSheet.create({
  BottomNavBar: {
    paddingLeft: 20,
    backgroundColor: "red",
    marginBottom: 30,
  },
});

export default DrawerNavigatorRoutes;
