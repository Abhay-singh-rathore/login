import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';

import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/action';
import Home from './Home';


const Signup = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  
  const dispatch = useDispatch();
  
  
        const handlelogin = () =>{
  dispatch(loginUser(email, password));
      navigation.navigate('Home');
  
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
        onPress={handlelogin}
      />
    </View>
    </SafeAreaView>
  );
};

export default Signup;
