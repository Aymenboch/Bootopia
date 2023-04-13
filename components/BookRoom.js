import { Pressable, StyleSheet, Text, TextInput, View, Image, TouchableHighlight, ScrollView } from 'react-native';
import React, {useState} from 'react';
import DatePicker from './DatePicker';
import TimePicker from './TimePicker';


export default function BookRoom({ navigation }) {

  return (
    <ScrollView style={styles.container}>
        <Image style={styles.backimg} source={require('../assets/images/bookroom.jpg')}/>
        <View style={styles.secondcontainer}>
          <Text style={styles.title}>Book Room</Text>

          <Text style={styles.text}>Choose Room</Text>
          <TextInput style={styles.inputbox} placeholder="enter room name"/>
          <Text style={styles.text}>Date</Text>
          <DatePicker/>
          <Text style={styles.text}>Time Range</Text>
          <TimePicker/>
          <Text style={styles.text} >Number of person</Text>
          <TextInput style={styles.inputbox} placeholder="enter number of person" inputMode='numeric'/>
          <Text style={styles.text} >Note</Text>
          <TextInput style={styles.inputbox} placeholder="write your note" inputMode='text'/>

          <View style={styles.btncontainer}>
            <TouchableHighlight style={styles.btn} underlayColor = {'#7502bf'} activeOpacity={0.95} onPress={() => alert('Pressed!')}> 
              <View >
                <Text style={styles.btntext} title="Booking room" onPress={() => navigation.navigate('Booking room')}> Booking room </Text> 
              </View>
            </TouchableHighlight>
            <View style={styles.question}>
            </View>
          </View>       
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  secondcontainer: {
    marginLeft: 20,
    marginRight: 15,
  },
  logocontainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  logo: {
    width: 30,
    height: 30,
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
    padding: 14,
  },
  btntext:{
    color: 'white',
    fontWeight: 'bold'
  },
  btncontainer: {
    marginTop: 33,
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
  datePickerStyle: {
    width: 230,
  },
});