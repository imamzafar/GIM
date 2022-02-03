import { View, Text } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function AboutFooter({ navigation }) {
  return (
    <>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Contact Us")}>
          <Row title="Contact Us" iconName="account-box-outline" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("About Us")}>
          <Row title="About Us" iconName="information-outline" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Terms And Conditions")}
        >
          <Row title="Terms & Conditions" iconName="note-multiple-outline" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Privacy Policy")}>
          <Row title="Privacy Policy" iconName="key-variant" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("FAQ")}>
          <Row title="FAQ" iconName="forum" />
        </TouchableOpacity>
        <Row title="Share This App" iconName="share-variant" />
        <Row title="Rate Us" iconName="star-outline" />
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 60,
        }}
      >
        <TouchableOpacity>
          <Logout />
        </TouchableOpacity>
      </View>
    </>
  );
}

const Row = (props) => (
  <>
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        padding: 5,
        paddingVertical: 18,
      }}
    >
      <View style={{ paddingHorizontal: 14 }}>
        <MaterialCommunityIcons
          name={props.iconName}
          //   color={color}
          size={25}
        />
      </View>
      <Text>{props.title}</Text>
    </View>

    <Divider />
  </>
);

const Logout = () => (
  <View>
    <Text style={{ color: "red", fontWeight: "bold", fontSize: 16 }}>
      Logout
    </Text>
  </View>
);

const Divider = () => (
  <View
    style={{
      marginLeft: 50,
      opacity: 0.2,
      borderBottomColor: "black",
      borderBottomWidth: 1,
    }}
  />
);
