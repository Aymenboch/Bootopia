import { Pressable, StyleSheet, Text, TextInput, View, Image, TouchableHighlight, ScrollView } from 'react-native';

export default function Login({ navigation }) {
  return (
    <ScrollView style={styles.container}>
        <Image style={styles.backimg} source={require('../assets/images/Login-img.jpg')}/>
        <View style={styles.secondcontainer}>
          <Text style={styles.title} >Welcome, {'\n'}Please Login First</Text>

          <Text style={styles.text} >Email</Text>
          <TextInput style={styles.inputbox} placeholder="mail@gmail.com"/>
          <Text style={styles.text} >Password</Text>
          <TextInput secureTextEntry={true} style={styles.inputbox} placeholder="password"/>

          <View style={styles.logocontainer}>
              <View style={styles.logocontainer2}>
                  <Image style={styles.logo} source={require('../assets/images/Gmail-logo.png')}/>
                  <Image style={styles.logo} source={require('../assets/images/Facebook-logo.png')}/>
                  <Image style={styles.logo} source={require('../assets/images/Twitter-logo.png')}/>
              </View>
              <View>
                  <Text style={styles.forgetpass}>Forget Password?</Text>   
              </View>    
          </View>

          <View style={styles.btncontainer}>
            <TouchableHighlight style={styles.btn} underlayColor = {'#7502bf'} activeOpacity={0.95} onPress={() => navigation.navigate('TabNavi')}> 
              <View >
                <Text style={styles.btntext} title="Login" > Login </Text> 
              </View>
            </TouchableHighlight>
            <View style={styles.question}>
              <Text style={styles.textquestion}>Don't have an account yet?</Text>
              <Pressable><Text style={styles.regitertext} onPress={() => navigation.navigate('Register')}> Register </Text></Pressable>
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
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logocontainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logo: {
    width: 30,
    height: 30,
    marginHorizontal : 5,
  },
  backimg: {
    width: 360,
    height: 250,
  },
  title: {
    marginTop: 30,
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
  btncontainer: {
    marginTop: 40,
  },
  question: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 35,
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
