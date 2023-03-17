import { Pressable, StyleSheet, Text, View, Platform } from 'react-native';
import React, {useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';


export default function DatePicker({ navigation }) {

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState('date');
  let tempDate = new Date()
  let fTime = 'Hours: ' + tempDate.getHours() + ' | Minutes: ' + tempDate.getMinutes() 
  const [text, setText] = useState(fTime);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date
    setShow(Platform.OS === 'ios')
    setDate(currentDate)

    let tempDate = new Date(currentDate)
    let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear() 
    let fTime = 'Hours: ' + tempDate.getHours() + ' | Minutes: ' + tempDate.getMinutes() 
    setText(fTime)

    console.log(fTime)
  }

  const showMode = (currentMode) => {
    setShow(true)
    setMode(currentMode)
  }

  return (
        <View>
          <Pressable onPress={() => showMode('time')} >
            <View style={styles.datecontainer} >
              <Text style={styles.datetext}>{text}</Text>
            </View>
          </Pressable>
          {show && (<DateTimePicker
            testID='timepicker'
            value={date}
            mode={mode}
            onChange={onChange}
            display='default'
            is24Hour={true}
          />)}
        </View>
  );
}

const styles = StyleSheet.create({
    datecontainer: {
        textAlign:'center',
        marginVertical : 10,
        borderRadius : 10,
        marginRight : 150,
        borderColor : 'black',
        borderWidth : 1,
        padding : 5,
        backgroundColor : '#f5f7fa'
      },
      datetext: {
        textAlign:'center',
        fontSize: 14
      },
});
