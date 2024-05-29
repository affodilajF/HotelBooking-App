/* eslint-disable react-native/no-inline-styles */

import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const SubHeading = ({subHeading, onPressedSeeMore}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 18, color: 'black', fontWeight: '600'}}>
        {subHeading}
      </Text>
      <TouchableOpacity onPress={onPressedSeeMore}>
        <Text style={{color: 'blue'}}> See more</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SubHeading;
