// App.js

import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'
import AppNavigator from './pages/AppNavigator'; // Your stack navigator
import messaging from '@react-native-firebase/messaging';
import { useEffect } from 'react';
import { Alert } from 'react-native';
import notifee, { AndroidImportance } from '@notifee/react-native';
import Geolocation from 'react-native-geolocation-service';

import { PermissionsAndroid, Platform } from 'react-native';

export default function App() {

   async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
}
 



useEffect(() => {
    const setup = async () => {
      Geolocation.setRNConfiguration({
        skipPermissionRequests: false,
        authorizationLevel: 'always',
      });

      if (Platform.OS === 'android') {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('Notification permission granted');
            await getToken();
            console.log('FCM Token:', token);
          } else {
            console.log('Notification permission denied');
          }
        } catch (err) {
          console.warn(err);
        }
      }

      await notifee.createChannel({
        id: 'default',
        name: 'Default Channel',
        importance: AndroidImportance.HIGH,
      });

      const unsubscribe = messaging().onMessage(async remoteMessage => {
        console.log('remote Message:', remoteMessage);
        await notifee.displayNotification({
          title: remoteMessage.notification?.title || 'New Message',
          body: remoteMessage.notification?.body || '',
          android: {
            channelId: 'default',
            smallIcon: 'ic_launcher',
            pressAction: {id: 'default'},
          },
        });
      });

      return unsubscribe;
    };

    setup();
  }, []);



  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
