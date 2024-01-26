/* eslint-disable prettier/prettier */
import {View, Text, Dimensions} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../pages/HomeScreen';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Order from '../pages/Order';
import ListHotel from '../pages/ListHotel';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HotelDetails from '../pages/HotelDetails';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="HotelList" component={ListHotel} />
      <Stack.Screen name="HotelDetails" component={HotelDetails} />
    </Stack.Navigator>
  );
};
const {width, height} = Dimensions.get('window');
const Router = () => {
  return (
    <View
      style={{
        width,
        height,
      }}>
      <Tab.Navigator>
        <Tab.Screen
          name="Login coba"
          options={{headerShown: false}}
          component={HotelDetails}
        />
        <Tab.Screen
          name="Hotel"
          component={ListHotel}
          options={{headerShown: false}}
          // screenOptions={{
          //   tabBarHideOnKeyboard: true,
          // }}
        />
        <Tab.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Order"
          component={Order}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </View>
  );
};

export default Router;
