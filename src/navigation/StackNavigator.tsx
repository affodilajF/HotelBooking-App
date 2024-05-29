import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BottomTabNavigator from './BottomTabNavigator';
import ListHotel from '../pages/ListHotel';
import HotelDetails from '../pages/HotelDetails';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HotelList"
        component={ListHotel}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HotelDetails"
        component={HotelDetails}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default StackNavigator;
