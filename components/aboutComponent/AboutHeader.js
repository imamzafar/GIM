import { View, Text } from "react-native";
import React from "react";
import { Avatar, Divider, Image } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


export default function AboutHeader() {
  return (
    <SafeAreaView>
      <View style={{ flexDirection: "row", padding: 15, alignItems: "center", justifyContent:'space-around' }}>
        <Avatar
          size="large"
          rounded
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Shah_Rukh_Khan_graces_the_launch_of_the_new_Santro.jpg",
          }}
        />

        <BasicDetails />
        <MaterialCommunityIcons
          name="account-edit"
          //   color={color}
          size={30}
        />
      </View>
      <Divider width={5} />
    </SafeAreaView>
  );
}

const BasicDetails = () => (
  <View>
    <Text style={{ fontSize: 18, fontWeight: "bold" }}>Zafar Imam</Text>
    <Text>imamzafar100@gmail.com</Text>
    <Text>8228885190</Text>
  </View>
);
