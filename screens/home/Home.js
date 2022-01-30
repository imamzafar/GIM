import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
// import SearchBar from "../components/home/SearchBar";
import { ScrollView } from "react-native";
// import RestaurantItems, {
//   localRestaurants,
// } from "../components/home/RestaurantItems";
import { Divider } from "react-native-elements";
import BottomTabs from "../../components/BottomTabs";
import SearchBarComponent from "../../components/homeComponents/SearchBarComponent";
import Carousel from "../../components/homeComponents/Caraousel/Carousel";
// import Categories from "../components/home/Categories";
// import HeaderTabs from "../components/home/HeaderTabs";
import { CarouselData } from "../../data/CarouselData";
import NearbyGym from "../../components/homeComponents/NearbyGym";
export default function Home() {
  //   const [restaurantData, setRestaurantData] = React.useState(localRestaurants);

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
