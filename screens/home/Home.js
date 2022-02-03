import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import SearchBarComponent from "../../components/homeComponents/SearchBarComponent";
import Carousel from "../../components/homeComponents/Caraousel/Carousel";
import { CarouselData } from "../../data/CarouselData";
import NearbyGym from "../../components/homeComponents/NearbyGym";
export default function Home() {

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "#fff", padding: 15 }}>
        <SearchBarComponent />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Carousel data={CarouselData} />
        <NearbyGym />
      </ScrollView>
      <Divider width={1} />
      {/* <BottomTabs /> */}
    </SafeAreaView>
  );
}
