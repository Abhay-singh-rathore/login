import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './Hstyles';
import {useSelector} from 'react-redux'
import { useNavigation } from '@react-navigation/native';

const Home = ({navigation}) => {
 const { email, password } = useSelector((state) => state);
  return (
    <SafeAreaView style={styles.container}>
      
      {/* Current User Section */}
      <View style={styles.formContainer1}>
        <Text style={styles.title}>Current User</Text>
        <View style={{flexDirection:'column'}}>
        <View style={styles.verticalarr}>
          <Text style={styles.Text}>Current email: </Text>
          <Text style={styles.emtext}>{email}</Text>

        </View>
        <View style={styles.verticalarr}>
          <Text style={styles.Text}>Current password: </Text>
          <Text style={styles.Text}>{password}</Text>
        </View>
        </View>
      </View>

     /* GAP between sections 
      <View style={{ height: 20 }} />

    
        <Button
          title="Go Back"
          onPress={() => navigation.navigate('Login')}
        />
      
    </SafeAreaView>
  );
};

export default Home;
