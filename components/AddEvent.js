import { Pressable, StyleSheet, Text, TextInput, View, Image, TouchableHighlight, ScrollView, Platform } from 'react-native';
import React, {useState} from 'react';
import DatePicker from './DatePicker'
import TimePicker from './TimePicker'

export default function AddEvent({ navigation }) {

  return (
    <ScrollView style={styles.container}>
          <Text style={styles.title} >Add Event</Text>
            <Text style={styles.text} >Event title</Text>
              <TextInput style={styles.inputbox} placeholder="What event are you going to do"/>
            <Text style={styles.text} >Upload Poster</Text>
          <View style={styles.logocontainer}>
            <Image style={styles.logo} source={require('../assets/images/first-poster.jpeg')}/>
            <Image style={styles.logo} source={require('../assets/images/second-poster.jpg')}/>
          </View>
          <Text style={styles.text} >Date</Text>
          <DatePicker/>
          <Text style={styles.text} >Time Range</Text>
            <TimePicker/>
          <Text style={styles.text} >Ticket Price</Text>
            <TextInput inputMode='numeric' style={styles.inputbox} placeholder="200 $"/>

          <View style={styles.btncontainer}>
            <TouchableHighlight style={styles.btn} underlayColor = {'#7502bf'} activeOpacity={0.95} onPress={() => alert('Pressed!')}> 
              <View >
                <Text style={styles.btntext} title="Booking room" onPress={() => navigation.navigate('Booking room')}> Book </Text> 
              </View>
            </TouchableHighlight>
          </View>      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 20,
    marginRight: 15,
  },

  logocontainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal : 5,
    marginVertical : 10
  },
  logo: {
    width: 150,
    height: 150,
    marginHorizontal : 5,
  },
  backimg: {
    width: 360,
    height: 170,
  },
  title: {
    marginTop: 15,
    fontFamily: 'sans-serif',
    color: '#181394',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontFamily: 'sans-serif',
    color: '#181394',
    fontWeight: 'bold',
  },
  inputbox: {
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: '#f5f8ff',
    marginBottom: 10,
    padding: 10,
    borderWidth : 1,
    borderColor: '#8e8e8e',
  },
  forgetpass: {
    color : '#8e8e8e',
    fontSize : 11
  },
  btn: {
    alignItems: 'center',
    backgroundColor: '#C264FF',
    borderRadius: 10,
    padding: 10,
    width: 100
  },
  btntext:{
    color: 'white',
    fontWeight: 'bold',
    fontSize : 20
  },
  btncontainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20
  },
  question: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 10,
    color : '#8e8e8e',
  },
  textquestion: {
    color : '#8e8e8e',
  },
  regitertext: {
    color : '#181394',
    fontWeight: 'bold'
  },
  datetext: {
    marginVertical : 10,
    borderRadius : 10,
    marginRight : 270,
    borderColor : 'black',
    borderWidth : 1,
    padding : 5,

  },
});
