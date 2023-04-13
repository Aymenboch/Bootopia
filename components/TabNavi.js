import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, {useState} from 'react';
import Favourite from './Favourite'
import BookRoom from './BookRoom'
import AddEvent from './AddEvent'
import BookingList from './BookingList'
import Home from './Home'
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import AccountSetting from './AccountSetting'
import Card from './Card'
import Explore from './Explore';

const Tab = createBottomTabNavigator();
  export default function TabNavi() {
      return (  
            <Tab.Navigator 
            initialRouteName={"Home"}
                screenOptions={ ({route}) => 
                    ({tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    if (route.name === 'Booking') {
                        iconName = focused 
                        ? 'md-calendar'
                        : 'md-calendar-outline'
                    } else if (route.name === 'Explore') {
                        iconName = focused 
                        ? 'md-locate'
                        : 'md-locate-outline'
                    }
                    else if (route.name === 'Card') {
                        iconName = focused 
                        ? 'md-heart'
                        : 'md-heart-outline'
                    }
                    else if (route.name === 'Setting') {
                        iconName = focused  
                        ? 'md-settings'
                        : 'md-settings-outline'
                    }
                    else if (route.name === 'Home') {
                        iconName = focused 
                        ? 'md-home'
                        : 'md-home-outline'
                    }
                        return <Ionicons name={iconName} size={(route.name === 'Home')? 42 :size} color={color} />;
                    },
                    tabBarActiveTintColor: 'orangered',
                    tabBarInactiveTintColor: 'gray',                
            })}> 
                <Tab.Screen options={{ headerShown: false }} name="Booking" component={BookRoom} />
                <Tab.Screen name="Explore" component={Explore} />
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Card" component={Card} />
                <Tab.Screen name="Setting" component={AccountSetting} />       
            </Tab.Navigator>
      );
}