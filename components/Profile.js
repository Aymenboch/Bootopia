import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View, Image, TouchableHighlight, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const Profile = ({ navigation }) => {
    const myIcon = <Icon name="chevron-right" size={20} color="#181394" />;

  return (
    <View style={styles.container}>
      <Text style={styles.title} >Account Setting</Text>
      <View style={styles.flex}>
        <Text style={styles.text}>Profile</Text>
        <View>{myIcon}</View>
      </View>
      <View style={styles.flex}>
        <Text style={styles.text}>Help Center</Text>
        <View>{myIcon}</View>
      </View>
      <View style={styles.flex}>
      <Text style={styles.text}>Feedback</Text>
      <View>{myIcon}</View>
      </View>
      <View style={styles.flex}>
      <Text style={styles.text}>Application Setting</Text>
      <View>{myIcon}</View>
      </View>
      <View style={styles.flex}>
      <Text style={styles.text}>Terms and Conditions</Text>
      <View>{myIcon}</View>
      </View>
      <TouchableHighlight style={styles.btn} underlayColor = {'#7502bf'} activeOpacity={0.95} onPress={() => navigation.push('Login')}> 
            <View >
                <Text style={styles.btntext}> Disconnect </Text> 
            </View>
      </TouchableHighlight>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 20,
        marginRight: 15,
    },
    title: {
        marginTop: 15,
        fontFamily: 'sans-serif',
        color: '#181394',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
      },
    text: {
        marginVertical: 15,
        fontSize: 15,
        fontFamily: 'sans-serif',
        color: 'gray',
        fontWeight: 'bold',
      },
    btn: {
        marginTop: 20,
        alignItems: 'center',
        backgroundColor: '#C264FF',
        borderRadius: 10,
        padding: 14,
      },
    btntext:{
        color: 'white',
        fontWeight: 'bold'
      },
    flex:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})