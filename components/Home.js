import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const coworkingSpaces = [
  { id: '1', name: 'Space Invision', review: '4.5 stars', imageUrl : require('../assets/images/Twitter-logo.png') },
  { id: '2', name: 'Rihanna', review: '4 stars' ,imageUrl : require('../assets/images/workspace1.jpg')},
  { id: '3', name: 'Riftless', review: '3.5 stars' ,imageUrl : require('../assets/images/workspace1.jpg')},
  { id: '4', name: 'Ceefu', review: '5 stars' ,imageUrl : require('../assets/images/workspace1.jpg')},
  { id: '5', name: 'Bosseless', review: '4 stars',imageUrl : require('../assets/images/workspace1.jpg') },
];

const HomePage = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    // handle search functionality here 
  };

  const renderSpaceItem = ({ item }) => {
    const rating = parseFloat(item.review.split(' ')[0]); // extract the rating number
    const fullStars = Math.floor(rating); // number of full stars
    const hasHalfStar = rating - fullStars >= 0.5; // whether there's a half star
    const emptyStars = 5 - fullStars - hasHalfStar; // number of empty stars
    const starColor = '#FFC107'; // yellow color for stars

    const starIcons = [];
    for (let i = 0; i < fullStars; i++) {
      starIcons.push(<Ionicons key={i} name="star" size={20} color={starColor} />);
    }
    if (hasHalfStar) {
      starIcons.push(<Ionicons key="half-star" name="star-half" size={20} color={starColor} />);
    }
    for (let i = 0; i < emptyStars; i++) {
      starIcons.push(<Ionicons key={`empty-star-${i}`} name="star-outline" size={20} color={starColor} />);
    }

    return (
      <View style={styles.spaceItem}>
        <Text style={styles.spaceName}>{item.name}</Text>
        <Image style={styles.img} source={require('../assets/images/workspace1.jpg')} />
        <View style={styles.starContainer}>{starIcons}</View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search coworking spaces"
        value={searchText}
        onChangeText={setSearchText}
        onSubmitEditing={handleSearch}
      />
      <Text style={styles.recommendedTitle}>Recommended Spaces:</Text>
      <FlatList data={coworkingSpaces} renderItem={renderSpaceItem} keyExtractor={(item) => item.id} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 1,
    backgroundColor: '#fff',
  },
  searchInput: {
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: '#f5f8ff',
    marginBottom: 10,
    padding: 10,
  },
  recommendedTitle: {
    marginLeft: 15,
    marginTop: 10,
    fontFamily: 'sans-serif',
    color: '#181394',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  spaceItem: {
    marginVertical: 10,
    marginHorizontal: 10,
    borderWidth: 2,
    borderRadius : 10,
    borderColor : 'black',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth:8,
  },
  img: {
    borderWidth: 1,
    borderColor : 'black',
    width: 170,
    height: 130,
  }
});
export default HomePage;