import { Pressable, StyleSheet, Text, TextInput, View, Image, TouchableHighlight, ScrollView, Alert } from 'react-native';
import React, {useState} from 'react';
import DatePicker from './DatePicker';
import TimePicker from './TimePicker';
import { SelectList } from 'react-native-dropdown-select-list'
import api from './Api.js';

export default function BookRoom({ navigation }) {
  
  const data = [
      {key:'1', value:'Work Zone 1.0'}, 
      {key:'2', value:'MindUp Co-working'},
      {key:'3', value:'The Hub Coworking'},
  ]

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate); // Update the date state in BookRoom component
  };

  const handleTimeChange = (selectedTime) => {
    setTime(selectedTime); // Update the date state in BookRoom component
  };

  const [workingSpace, setWorkingSpace] = useState("");
  const [room, setRoom] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [person, setPerson] = useState("");
  const [note, setNote] = useState("");
  const [valid, setValid] = useState(false);

  const checkTextInput = () => {
    //Check for the Name TextInput
    if (!room.trim()) {
      alert('Please choose a room');
      return;
    }
    //Check for the Email TextInput
    if (!person.trim()) {
      alert('Please Enter the number of person');
      return;
    }
    if (!workingSpace.trim()) {
      alert('Please choose a workingSpace');
      return;
    }
    //Check for the Email TextInput
    if (!date.trim()) {
      alert('Please choose a date');
      return;
    }
    //Check for the Email TextInput
    if (!time.trim()) {
      alert('Please Enter the time');
      return;
    }
    setValid(true)
    //Checked Successfully
  };
  
    const booking = async (workingSpace, room, date, time, person, note) => {
      try {
        const response = await api.post('/booking', {
          workingSpace,
          room, 
          date, 
          time, 
          person, 
          note
        });
        return response.data;
      } catch (error) {
        console.error(error);
      }
    };

  const handleSubmit = async () => {
    checkTextInput()
    if(valid == true){
    const response = await booking(workingSpace,room, date, time, person, note);
    if (response) {
      console.log('sucess')
      alert("Booked succefully")
      navigation.navigate('Home')}
    } else {
      console.log('fail')
    }}

  return (
    <ScrollView style={styles.container}>
        <Image style={styles.backimg} source={require('../assets/images/bookroom.jpg')}/>
        <View style={styles.secondcontainer}>
          <Text style={styles.title}>Book Room</Text>
          <Text style={styles.text}>Choose WorkingSpace</Text>
          <View style={styles.dropdown}>
          <SelectList 
              setSelected={(val) => setWorkingSpace(val)} 
              data={data} 
              save="value"
              placeholder="select workingspace"   
          />
          </View>
          <Text style={styles.text}>Choose Room</Text>
          <TextInput onChangeText={(value) => setRoom(value)}
          style={styles.inputbox} placeholder="enter room name"/>
          <Text style={styles.text}>Date</Text>
          <DatePicker onDateChange={handleDateChange}/>
          <Text style={styles.text}>Time Range</Text>
          <TimePicker onTimeChange={handleTimeChange}/>
          <Text style={styles.text} >Number of person</Text>
          <TextInput  onChangeText={(value) => setPerson(value)} style={styles.inputbox} placeholder="enter number of person" inputMode='numeric'/>
          <Text style={styles.text} >Note</Text>
          <TextInput onChangeText={(value) => setNote(value)} style={styles.inputbox} placeholder="write your note" inputMode='text'/>
          <View style={styles.btncontainer}>
            <TouchableHighlight style={styles.btn} underlayColor = {'#7502bf'} activeOpacity={0.95} onPress={handleSubmit}> 
              <View >
                <Text style={styles.btntext} title="Booking room" onPress={handleSubmit}> Booking room </Text> 
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
  dropdown: {
    marginVertical: 10,
  },
});