/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  HomeIcon,
  BookmarkIcon,
  ShoppingBagIcon,
} from 'react-native-heroicons/solid'; // Sesuaikan impor dengan ikon yang Anda butuhkan

import Home from '../pages/Home';
import Order from '../pages/Order';
import Saved from '../pages/Saved';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let IconComponent;
          let iconName;

          switch (route.name) {
            case 'Home':
              IconComponent = HomeIcon;
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Saved':
              IconComponent = BookmarkIcon;
              iconName = focused ? 'bookmark' : 'bookmark-outline';
              break;
            case 'Order':
              IconComponent = ShoppingBagIcon;
              iconName = focused ? 'shopping-bag' : 'shopping-bag-outline';
              break;
            default:
              iconName = 'help';
              break;
          }

          return <IconComponent name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#4691F2',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{headerShown: false, tabBarLabel: 'Home'}}
      />
      <Tab.Screen
        name="Saved"
        component={Saved}
        options={{headerShown: false, tabBarLabel: 'Saved'}}
      />
      <Tab.Screen
        name="Order"
        component={Order}
        options={{headerShown: false, tabBarLabel: 'Order'}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
