
import react from 'react';
import { Image } from 'react-native';


import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';
import ADIcons from 'react-native-vector-icons/AntDesign'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import reel from '../../assets/Images/reel.png'


import DiscorveryScreen from '../screens/DiscoveryScreen';
import CreatePostScreen from '../screens/CreatePostScreen';
import NotificationScreen from '../screens/NotificationScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HomeStackScreen from './home.router'


const Tab = createBottomTabNavigator();

const Router = () => {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Home') {
              return <Foundation name='home' size={27} color={color} />
            }

            if (route.name === 'Discovery') {
              return <Feather name='search' size={24} color={color} />
            }

            if (route.name === 'Post') {
              return <Image source={reel} style={{width: 22, resizeMode: "contain", height: 25}} />
            }

            if (route.name === 'Notification') {
              return <ADIcons name='hearto' size={24} color={color} />
            }

            if (route.name === 'Profile') {
              return <Ionicons name='person-outline' size={24} color={color} />
            }
            // if (route.name === 'Settings') {
            //   iconName = focused ? 'ios-list-box' : 'ios-list';
            // }
          },
          tabBarActiveTintColor: '#000',
          tabBarInactiveTintColor: 'black',
          tabBarShowLabel: false,
        })}
      >
        <Tab.Screen options={{headerShown: false}} name="Home" component={HomeStackScreen} />
        <Tab.Screen options={{headerShown: false}} name="Discovery" component={DiscorveryScreen} />
        <Tab.Screen options={{headerShown: false}} name="Post" component={CreatePostScreen} />
        <Tab.Screen options={{headerShown: false}} name="Notification" component={NotificationScreen} />
        <Tab.Screen options={{headerShown: false}} name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    )
}

export default Router;