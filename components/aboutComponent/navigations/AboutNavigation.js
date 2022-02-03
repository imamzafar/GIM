import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import About from "../../../screens/about/About";
import ContactUs from "../ContactUs";
import AboutUs from "../AboutUs";
import TermAndCondition from "../TermAndCondition";
import FAQ from "../FAQ";
import PrivacyPolicy from "../PrivacyPolicy";

export default function AboutNavigation() {
  const Stack = createStackNavigator();

  const screenOptions = {
    // headerShown: false,
  };

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="About" screenOptions={screenOptions}>
        <Stack.Screen
          name="About"
          component={About}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Contact Us" component={ContactUs} />
        <Stack.Screen name="About Us" component={AboutUs} />
        <Stack.Screen name="FAQ" component={FAQ} />
        <Stack.Screen name="Privacy Policy" component={PrivacyPolicy} />
        <Stack.Screen
          name="Terms And Conditions"
          component={TermAndCondition}
        />
        {/* <Stack.Screen name="OrderCompleted" component={OrderCompleted} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
