/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View, Dimensions} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import StackNavigator from './navigation/StackNavigator';

const {width, height} = Dimensions.get('window');

const App = () => {
  return (
    <View
      style={{
        width,
        height,
      }}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </View>
  );
};

export default App;
