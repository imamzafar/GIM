import { View, Text } from "react-native";
import React, { useState } from "react";
// import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
// import Ionicons from "react-native-vector-icons/Ionicons";
// import AntDesign from "react-native-vector-icons/AntDesign";

import { SearchBar } from "react-native-elements";

export default function SearchBarComponent() {
  const [search, setSearch] = useState("");

  const updateSearch = (search) => {
    setSearch(search);
  };

  return (
    <View style={{ marginTop: 15, borderRadius:5 }}>
      <SearchBar
        placeholder="Search Here..."
        onChangeText={this.updateSearch}
        value={search}
        // styles={{borderRadius:5}}


        inputStyle={{backgroundColor: 'white'}}
        containerStyle={{backgroundColor: 'white', borderWidth: 1, borderRadius: 5}}
        inputContainerStyle={{backgroundColor: 'white'}}
        placeholderTextColor={'#g5g5g5'}
      />
    </View>
  );
}
