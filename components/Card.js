import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';


const coworkingSpaces = [
  {
    id: 1,
    name: 'Work Zone 1.0',
    location: "Immeuble Golden Towers \n Tunis",
    rating: '4.5 stars',
    image: require('../assets/images/WorkZone.png')
  },
  {
    id: 2,
    name: 'MindUp Co-working',
    location: "Tunis, Manar 1",
    rating: '2 stars',
    image : require('../assets/images/Mindup.jpg')
  },
  {
    id: 3,
    name: 'The Hub Coworking',
    location: 'Lac Toba, Tunis',
    rating: '3 stars',
    image : require('../assets/images/HubCoworking.jpg')
  },
];


const Card = () => {
    //code for selecting and unselecting favourite 
    const [favorites, setFavorites] = useState([]);

    const handleFavorite = (id) => {
        const index = favorites.indexOf(id);
        if (index === -1) {
            setFavorites([...favorites, id]);
        } else {
            setFavorites(favorites.filter((fav) => fav !== id));
        } };
        
    const isFavorite = (id) => {
        return favorites.indexOf(id) !== -1;
    };
    
    //code for stars rating 
        const renderSpaceItem = ({ item }) => {
        const rating = parseFloat(item.rating.split(' ')[0]); // extract the rating number
        const fullStars = Math.floor(rating); // number of full stars
        const hasHalfStar = rating - fullStars >= 0.5; // whether there's a half star
        const emptyStars = 5 - fullStars - hasHalfStar; // number of empty stars
        const starColor = 'white'; // yellow color for stars
    
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
          <View style={styles.container}>
            <TouchableOpacity style={[styles.listItem, { borderStyle: 'solid', backgroundColor: '#77C3EC', borderColor: '#ccc', borderRadius : 20, borderWidth: 1, margin: 20 }]}>
              <Image style={styles.img} source={item.image} />
                <View key={item.id}  style={styles.textcontainer}>
                  <Text style={styles.name}>{item.name}</Text>
                  <View style={{flexDirection:'row', justifyContent: 'flex-start'}}>
                  <Ionicons name="pin" size={15} />
                  <Text style={styles.location}>{item.location}</Text>
                  </View>
                  <View style={styles.starContainer}>{starIcons}</View>
                  <TouchableOpacity style={styles.heartIcon} onPress={() => handleFavorite(item.id)}>
                    <Icon key={item.id} name={isFavorite(item.id) ? 'heart' : 'heart-o'} size={24} color={isFavorite(item.id) ? 'red' : 'black'} />
                  </TouchableOpacity>
 
                </View>
            </TouchableOpacity>
          </View>
        );
      };
       
  return (
    <SafeAreaView style={{flex: 5}}>
      <FlatList horizontal={false} data={coworkingSpaces} renderItem={renderSpaceItem} keyExtractor={(item) => item.id} />
    </SafeAreaView>
  );
};

export default Card;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontFamily: 'sans-serif',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 5,
    marginRight: 10
  },
  starContainer: {
    flexDirection: 'row',
  },
  location: {
    fontFamily: 'sans-serif',
    color: 'white',
    fontSize: 11,
    marginBottom: 5,
  },
  rating: {
    fontFamily: 'sans-serif',
    color: '#181394',
    fontSize: 16,
  },
  heartIcon: {
    marginTop: 20,
    justifyContent: 'flex-start'
  },
  img: {
    borderRadius: 20,
    height: 140,
    width: 140,
    alignSelf: 'center'
  },
  textcontainer :{
    marginLeft: 10,
    },
  });
