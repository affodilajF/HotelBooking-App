/* eslint-disable react-native/no-inline-styles */

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeroIcon from '../assets/Icon';

export default function StarViewers({rating, ratinger}) {
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
        <Text style={{color: 'black', fontSize: 11}}> {rating} </Text>
        <Text style={{color: 'grey', fontSize: 9}}> ({ratinger}) </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
