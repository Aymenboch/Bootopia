import React, { useState } from 'react';
import {StyleSheet,View,Text,TextInput,TouchableOpacity,} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSaveProfile = () => {
    // Implement save profile logic here
    // For example, send a PUT request to update the user's profile
    // using an API
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Phone</Text>
          <TextInput
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={handleSaveProfile}
      >
        <Text style={styles.buttonText}>Save Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  formContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontFamily: 'sans-serif',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#181394',
  },
  input: {
    fontFamily: 'sans-serif',
    fontSize: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: '#8e8e8e',
  },
  button: {
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#C264FF',
    borderRadius: 10,
    padding: 14,
  },
  buttonText:{
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
  },
});


export default Profile;