import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, {useState} from 'react';
import Favourite from './Favourite'
import BookRoom from './BookRoom'
import AddEvent from './AddEvent'
import BookingList from './BookingList'
import Home from './Home'
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Profile from './Profile'

const Tab = createBottomTabNavigator();
  export default function TabNavi() {
      return (  
            <Tab.Navigator 
                screenOptions={ ({route}) => 
                    ({tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    if (route.name === 'Booking') {
                        iconName = focused 
                        ? 'md-calendar'
                        : 'md-calendar'
                    } else if (route.name === 'Event') {
                        iconName = 'copy-outline'
                    }
                    else if (route.name === 'Favourite') {
                        iconName = 'md-heart'
                    }
                    else if (route.name === 'Profile') {
                        iconName = 'md-person'
                    }
                    else if (route.name === 'Home') {
                    iconName = 'md-home'
                    }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'orangered',
                    tabBarInactiveTintColor: 'gray',                
            })}> 
                <Tab.Screen options={{ headerShown: false }} name="Booking" component={BookRoom} />
                <Tab.Screen name="Event" component={AddEvent} />
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Favourite" component={Favourite} />
                <Tab.Screen name="Profile" component={Profile} />       
            </Tab.Navigator>
      );
}