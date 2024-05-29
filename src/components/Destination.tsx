/* eslint-disable react-native/no-inline-styles */

import {View, StyleSheet, Image, Text} from 'react-native';
import React from 'react';
import Likes from '../atom/Likes';

const Destination = ({objProps, size}) => {
  const componentSizeHeight =
    size === 'small' ? 175 : size === 'medium' ? 240 : null;
  const componentSizeWidth =
    size === 'small' ? 155 : size === 'medium' ? 180 : null;

  return (
    <View>
      <Image
        style={{
          width: componentSizeWidth,
          height: componentSizeHeight,
          borderRadius: 18,
        }}
        source={{uri: objProps.photos[0]}}
      />

      <View style={styles.loveIcon}>
        <Likes isLikedParam={true} likesCount={objProps.likesCount} />
      </View>

      <View style={styles.destinationBlackBackground}>
        <View style={styles.informations}>
          <Text style={{color: 'white', fontWeight: '600'}}>
            {' '}
            {objProps.name} {objProps.likesCount}
          </Text>
          <Text style={{color: 'white', fontSize: 8}}>
            {' '}
            {objProps.province}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loveIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  biggestWrapper: {
    width: 155,
    height: 245,
    backgroundColor: 'red',
  },
  informations: {
    position: 'absolute',
    bottom: 13,
    left: 10,
  },
  destinationBlackBackground: {
    width: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    bottom: 0,
    height: '21%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    borderBottomEndRadius: 18,
    borderBottomStartRadius: 18,
  },
});

export default Destination;
