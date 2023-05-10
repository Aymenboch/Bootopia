import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  Image,
  TouchableHighlight,
  ScrollView,
  Pressable,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Card from "./Card";
import { TouchableOpacity } from "react-native";

const coworkingSpaces = [
  {
    id: "1",
    name: "Space Invision",
    rating: "4.5 stars",
    imageUrl: require("../assets/images/ws.jpg"),
  },
  {
    id: "2",
    name: "Rihanna",
    rating: "4 stars",
    imageUrl: require("../assets/images/workspace1.jpg"),
  },
  {
    id: "3",
    name: "Riftless",
    rating: "3.5 stars",
    imageUrl: require("../assets/images/workspace1.jpg"),
  },
  {
    id: "4",
    name: "Ceefu",
    rating: "5 stars",
    imageUrl: require("../assets/images/workspace1.jpg"),
  },
  {
    id: "5",
    name: "Bosseless",
    rating: "4 stars",
    imageUrl: require("../assets/images/workspace1.jpg"),
  },
];
const coworkingSpacestype = [
  { id: "1", name: "Desk", image: require("../assets/images/desk.png") },
  {
    id: "2",
    name: "Meeting-Room",
    image: require("../assets/images/meeting-room.png"),
  },
  {
    id: "3",
    name: "Private-Office",
    image: require("../assets/images/private-office.png"),
  },
];

const HomePage = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    // handle search functionality here
  };

  const renderTypeItem = ({ item }) => {
    return (
      <SafeAreaView style={{}}>
        <TouchableOpacity style={styles.imgcontainer}>
          <Image style={styles.imgbox} source={item.image} />
          <Text style={styles.imgtext}>{item.name}</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  };

  const ListFlat = () => {
    return (
      <FlatList
        nestedScrollEnabled
        horizontal
        data={coworkingSpacestype}
        renderItem={renderTypeItem}
        keyExtractor={(item) => item.id}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search coworking spaces"
        value={searchText}
        onChangeText={setSearchText}
        onSubmitEditing={handleSearch}
      />
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            marginLeft: 5,
          }}
        >
          <Ionicons name="search" size={20} color="red" />
          <Text style={styles.text}>Find the perfect space for you</Text>
        </View>
        <SafeAreaView>
          <ListFlat />
        </SafeAreaView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            marginLeft: 5,
            marginBottom: 5,
          }}
        >
          <Ionicons name="pin" size={25} color="blue" />
          <Text style={styles.text1}>Explore around</Text>
        </View>
        <Card />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    padding: 5,
    backgroundColor: "#fff",
  },
  searchInput: {
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: "#f5f8ff",
    marginHorizontal: 10,
    padding: 10,
    borderColor: "gray",
    borderWidth: 1,
  },
  recommendedTitle: {
    marginLeft: 15,
    marginTop: 10,
    fontFamily: "sans-serif",
    color: "#181394",
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
  },
  spaceItem: {
    marginTop: 20,
    marginHorizontal: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "black",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 8,
  },
  img: {
    borderWidth: 1,
    borderColor: "black",
    width: 170,
    height: 130,
  },
  imgcontainer: {
    borderWidth: 1,
    borderColor: "#f5f8ff",
    borderRadius: 10,
    backgroundColor: "#f5f8ff",
    marginHorizontal: 10,
    marginTop: 20,
    marginBottom: 10,
  },
  imgbox: {
    backgroundColor: "#f5f8ff",
    width: 90,
    marginHorizontal: 20,
    marginVertical: 20,
    height: 90,
  },
  text: {
    fontFamily: "sans-serif",
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
    marginHorizontal: 5,
  },
  text1: {
    fontFamily: "sans-serif",
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
  },
  imgtext: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 12,
    marginBottom: 15,
  },
});
export default HomePage;
