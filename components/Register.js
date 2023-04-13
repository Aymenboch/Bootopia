import { Pressable, StyleSheet, Text, TextInput, View, Image, TouchableHighlight, ScrollView } from 'react-native';
import axios from "axios";
import React, {useContext, useState} from 'react';

export default function Register({ navigation }) {
  password_repeat
  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null);
  const [password_repeat, setPassword_repeat] = useState(null);
  const register = async (username, password) => {
    try {
      const response = await axios.post('http://localhost:5000/api/sign-up', {
        username,
        password,
        password_repeat
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async () => {
    const response = await register(username, password, password_repeat);
    if (response && response.message) {
      console.log('sucess')
    } else {
      console.log('fail')
    }
  };

  return (
    <ScrollView style={styles.container}>
        <Image style={styles.backimg} source={require('../assets/images/Register-img.jpg')}/>
        <View style={styles.secondcontainer}>
          <Text style={styles.title} >Welcome, {'\n'}Register To Access</Text>

          <Text style={styles.text} >Your Username</Text>
          <TextInput value={username} style={styles.inputbox} placeholder="Name"/>
          <Text style={styles.text} >Email</Text>
          <TextInput style={styles.inputbox} placeholder="Email"/>
          <Text style={styles.text} >Password</Text>
          <TextInput value={password} secureTextEntry={true} style={styles.inputbox} placeholder="password"/>
          <Text style={styles.text} >Password Confirm</Text>
          <TextInput value={password_repeat} secureTextEntry={true} style={styles.inputbox} placeholder="confirm password"/>

          <View style={styles.logocontainer}>
                  <Image style={styles.logo} source={require('../assets/images/Gmail-logo.png')}/>
                  <Image style={styles.logo} source={require('../assets/images/Facebook-logo.png')}/>
                  <Image style={styles.logo} source={require('../assets/images/Twitter-logo.png')}/>
          </View>

          <View style={styles.btncontainer}>
            <TouchableHighlight style={styles.btn} underlayColor = {'#7502bf'} activeOpacity={0.95} onPress={handleSubmit}> 
              <View >
                <Text style={styles.btntext} title="Register"> Register </Text> 
              </View>
            </TouchableHighlight>
            <View style={styles.question}>
              <Text style={styles.textquestion}>Already have an account ?</Text>
              <Pressable><Text style={styles.regitertext} onPress={() => navigation.navigate('Login')}> Sign in </Text></Pressable>
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
});
