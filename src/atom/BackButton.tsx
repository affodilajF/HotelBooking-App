/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import HeroIcon from '../assets/Icon';

interface BackButtonProps {
  onPressedBackButton: () => void;
  buttonStyle: string;
}

const BackButton = ({onPressedBackButton, buttonStyle} : BackButtonProps) => {
  if (buttonStyle === 'one') {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.6)',
          borderRadius: 50,
          height: 52,
          width: 52,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={onPressedBackButton}>
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
          <HeroIcon type={'back'} boolean={undefined} />
        </View>
      </TouchableOpacity>
    );
  } else if (buttonStyle === 'two') {
    return (
      <TouchableOpacity
        style={{
          height: 30,
          width: 20,
          padding : 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={onPressedBackButton}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <HeroIcon type={'back2'} boolean={undefined} />
        </View>
      </TouchableOpacity>
    );
  }
};

export default BackButton;
