import react from 'react';
import { Image, View, Text } from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import logo from '../../assets/Images/logo.png'
import HomeScreen from '../screens/HomeScreen';

import message from '../../assets/Images/messager.png'
import upload from '../../assets/Images/upload.png'

import { ScreenContainer } from 'react-native-screens';

const HomeStack = createNativeStackNavigator();

const HomeRouter = () => {
   return (
    <HomeStack.Navigator>
    <HomeStack.Screen
     name="Home"
     component={HomeScreen}

     options={{
       headerTitle: () => (
         <Image source={logo} resizeMode="contain" style={{width: 125, height: 50}} />
       ),
       headerRight: () => (
        <>
          <Image
            source={upload}  style={{width: 25, resizeMode: "contain", height: 25, paddingLeft: 70}} />
          
          <View style={{position: 'relative'}}>
           <Image source={message} style={{width: 25, resizeMode: "contain", height: 25}} />
            <View
             style={{
               width: 19,
               height: 17,
               backgroundColor: 'red',
               position: 'absolute',
               borderRadius: 50,
               right: -9,
               top: -7,
               color: 'white',
            }}>
              <Text style={{color: 'white',textAlign: 'center' }}>3</Text>
            </View>
          </View>
        </>
       ),
     }}
  />
  </HomeStack.Navigator>
   )
}

export default HomeRouter;