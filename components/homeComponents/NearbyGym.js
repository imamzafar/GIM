import { View, Text, ScrollView } from "react-native";
import React from "react";
import { NearbyGymData } from "../../data/NearbyGymData";
import Carousel from "./Caraousel/Carousel";
import { Divider, Image } from "react-native-elements";

export default function NearbyGym() {
  return (
    <>
      <Divider width={0.52} />
      <View
        style={{
          marginTop: 0,
          backgroundColor: "#eee",
          paddingVertical: 10,
          // paddingLeft: 20,
          marginBottom: 10,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            padding: 13,
            paddingTop: 18,
          }}
        >
          Nearby Gyms
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {NearbyGymData.map((item, index) => (
            <View key={index} style={{ alignItems: "center", marginRight: 30 }}>
              <Image
                source={{ uri: item.url }}
                style={{
                  width: 200,
                  height: 180,
                  // resizeMode: "",
                  borderRadius: 10,
                }}
              />

              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 13,
                }}
              >
                {item.title}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </>
  );
}
