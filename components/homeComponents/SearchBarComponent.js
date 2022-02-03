import { View, Text } from "react-native";
import React, { useState } from "react";

import { SearchBar } from "react-native-elements";

export default function SearchBarComponent() {
  const [search, setSearch] = useState("");

  const updateSearch = (search) => {
    setSearch(search);
  };

  // found this to be the best way to get the search bar to work with the backend
  // https://stackoverflow.com/questions/65067626/search-bar-get-request-using-express

  const getDataFromAPI = () => {
    console.log("Options Fetched from API");

    fetch("http://dummy.restapiexample.com/api/v1/employees")
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        console.log(res.data);
        for (var i = 0; i < res.data.length; i++) {
          myOptions.push(res.data[i].employee_name);
        }
        setMyOptions(myOptions);
      });
  };

  return (
    <View style={{ marginTop: 15, borderRadius: 5 }}>
      <SearchBar
        placeholder="Search Here..."
        onChangeText={updateSearch}
        value={search}
        inputStyle={{ backgroundColor: "white" }}
        containerStyle={{
          backgroundColor: "white",
          borderWidth: 1,
          borderRadius: 5,
        }}
        inputContainerStyle={{ backgroundColor: "white" }}
        placeholderTextColor={"grey"}
      />
      {console.log(search)}
    </View>
  );
}
