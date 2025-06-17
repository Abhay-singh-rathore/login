import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  View,
  StyleSheet
} from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { loginUser } from '../redux/action';


import Home from './Home';
import Signup from './Signup';

import { addEmail } from '../redux/action'; // Adjust the path as necessary


import styles from './styles'; // Ensure this file exists

const Login = ({ navigation}) => {

  const [email, setEmail ] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [emailDetails, setEmailDetails] = React.useState([]); 
 
// const handleLogin = () => {
//     if (email.trim() !== '' && password.trim() !== '') {
//       const updatedArray = [...emailDetails, { email, password }];

const dispatch = useDispatch();


      const handlelogin = () =>{
dispatch(loginUser(email, password));
    navigation.navigate('Home');

}      
      // setEmailDetails(updatedArray);
      // navigation.navigate('Home', {
      //   Useremail: email,
      //   Userpassword: password,
      //   emailDetails: updatedArray,
        
      // });
    
  

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#aaa"
          keyboardType="email-address"
          autoCapitalize="none"
           value={email}
          onChangeText={setEmail}
         
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#aaa"
          keyboardType='password'
          secureTextEntry
          valie={password}
          onChangeText={setPassword}
        />
          
    

        <TouchableOpacity style={styles.button} onPress={handlelogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.btnsigup}
        onPress={() => navigation.navigate('Signup')}>
            <Text>
                Don't have an account? Sign Up
            </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default Login;
