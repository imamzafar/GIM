import { View, Text } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Divider } from "react-native-elements";

export default function AboutFooter() {
  return (
    <View>
      <Row title="Contact Us" iconName="account-box-outline" />
      <Row title="Contact Us" iconName="account-box-outline" />
      <Row title="Contact Us" iconName="account-box-outline" />
      <Row title="Contact Us" iconName="account-box-outline" />
    </View>
  );
}

const Row = (props) => (
  <>
    <View style={{ flexDirection: "row", alignItems: "center", padding: 5 }}>
      <MaterialCommunityIcons
        name={props.iconName}
        //   color={color}
        size={30}
      />
      <Text>{props.title}</Text>
    </View>
    <Divider width={1}  />
  </>
);
