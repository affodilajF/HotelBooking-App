/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import HeroIcon from '../assets/Icon';

const BackButton = () => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        borderRadius: 50,
        height: 52,
        width: 52,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          backgroundColor: 'white',
          padding: 10,
          borderRadius: 50,
          height: '75%',
          width: '75%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <HeroIcon type={'back'} />
      </View>
    </TouchableOpacity>
  );
};

export default BackButton;
