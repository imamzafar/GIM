import React from "react";
// import { View, Text } from "react-native";
// import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
// import { TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home/Home";
import About from "../screens/about/About";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
        name="Home"
        component={Home}
      />

      <Tab.Screen
        options={{
          tabBarLabel: "Bookings",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book" color={color} size={size} />
          ),
        }}
        name="Bookings"
        component={About}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Notification",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
        name="Notification"
        component={About}
      />

      <Tab.Screen
        options={{
          tabBarLabel: "About",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
        name="About"
        component={About}
      />
    </Tab.Navigator>
  );
}

export default BottomTabs;
// export default function BottomTabs() {
//   return (
//     <View
//       style={{
//         flexDirection: "row",
//         margin: 10,
//         marginHorizontal: 30,
//         justifyContent: "space-between",
//       }}
//     >
//       <Icon icon="home" text="Home" />
//       <Icon icon="receipt" text="Booking" />
//       <Icon icon="bell" text="Notification" />
//       <Icon icon="user" text="Account" />
//     </View>
//   );
// }

// const Icon = (props) => (
//   <TouchableOpacity>
//     <View>
//       <FontAwesome5
//         name={props.icon}
//         size={25}
//         style={{
//           marginBottom: 3,
//           alignSelf: "center",
//         }}
//       />
//       <Text>{props.text}</Text>
//     </View>
//   </TouchableOpacity>
// );
