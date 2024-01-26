/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeroIcon from '../assets/Icon';

export default function StarViewers() {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <HeroIcon type={'star'} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: 'black', fontSize: 11}}> 4.5</Text>
        <Text style={{color: 'grey', fontSize: 9}}> (1566) </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
