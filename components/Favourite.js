import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const coworkingSpaces = [
  {
    id: 1,
    name: 'The Wing',
    location: 'Tunis, lac2',
    rating: 4.5
  },
  {
    id: 2,
    name: 'WeWork',
    location: 'Tunis, Aaouina',
    rating: 4.2
  },
  {
    id: 3,
    name: 'Spaces',
    location: 'Sousse, Khzema',
    rating: 4.8
  },
];


const Favourite = () => {
  const [favorites, setFavorites] = useState([]);

  const handleFavorite = (id) => {
    const index = favorites.indexOf(id);
    if (index === -1) {
      setFavorites([...favorites, id]);
    } else {
      setFavorites(favorites.filter((fav) => fav !== id));
    }
  };

  const isFavorite = (id) => {
    return favorites.indexOf(id) !== -1;
  };

  return (
    <View style={styles.container}>
     
      {coworkingSpaces.map((space) => (
      <View style={[styles.listItem, { borderStyle: 'solid', borderColor: '#ccc', borderRadius : 10, borderWidth: 1, margin: 10 }]}>
      <Image style={styles.img} source={require('../assets/images/ws.jpg')} />
        <View key={space.id}  style={styles.textcontainer}>
          <View style={{ flex: 1 }}>
            <Text style={styles.name}>{space.name}</Text>
          </View>
          <Text style={styles.location}>{space.location}</Text>
          <TouchableOpacity style={styles.heartIcon} onPress={() => handleFavorite(space.id)}>
            <Icon name={isFavorite(space.id) ? 'heart' : 'heart-o'} size={24} color={isFavorite(space.id) ? 'red' : 'black'} />
          </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
};
export default Favourite;
const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#fff',
  padding: 20,
  },
  listItem: {
  flexDirection: 'row',
  alignItems: 'center',
  padding: 10,
  },
  name: {
  flex: 1,
  fontFamily: 'sans-serif',
  color: '#181394',
  fontWeight: 'bold',
  fontSize: 18,

  },
  location: {
  marginRight: 16,
  fontFamily: 'sans-serif',
  color: '#181394',
  fontSize: 16,
  },
  rating: {
  fontFamily: 'sans-serif',
  color: '#181394',
  fontSize: 16,
  },
  heartIcon: {
  marginLeft: 16,
  },
  img: {
    borderRadius: 10,
    height: 130,
    width: 130,
    alignSelf: 'center'
    },
    textcontainer :{
      marginLeft: 20
    }
  });