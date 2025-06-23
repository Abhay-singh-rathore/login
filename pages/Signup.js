import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';

import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { login } from '../redux/AuthSlice';
import Home from './Home';
import { getAuth, createUserWithEmailAndPassword } from '@react-native-firebase/auth';


const Signup = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  
  const dispatch = useDispatch();
  
  
        const handlesignup = () =>{
  createUserWithEmailAndPassword(getAuth(), email, password)
  .then(() => {
    navigation.navigate('Home');
    dispatch(login({ email, password }));
    console.log('User account created & signed in!');
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });

  
  }  
  


  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.formContainer}>
      <Text style={styles.title}>Sign Up</Text>

      <TextInput
      style={styles.input}
      placeholder='Email'
      placeholderTextColor='#aaa'
      keyboardType='email-address'
      value={email}
      onChangeText={setEmail}
      autoCapitalize='none'/>
        <TextInput
            style={styles.input}
            placeholder='Password'
            placeholderTextColor='#aaa'
            value={password}
            onChangeText={setPassword}
            secureTextEntry />

      <Button
        title=" sign up"
        onPress={handlesignup}
      />
    </View>
    </SafeAreaView>
  );
};

export default Signup;
