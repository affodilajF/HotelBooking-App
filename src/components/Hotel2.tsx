/* eslint-disable react-native/no-inline-styles */

import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import HeroIcon from '../assets/Icon';
import StarViewers from '../atom/StarViewers';
import Likes from '../atom/Likes';

// destructuring component

const DiscTag = ({isDisc, disc}) => {
  if (isDisc) {
    return (
      <Text
        style={{
          fontSize: 11,
          color: 'white',
          fontWeight: '600',
          top: 8,
          position: 'absolute',
          zIndex: 1,
          backgroundColor: '#0EBE20',
          padding: 8,
          borderTopLeftRadius: 10,
          borderBottomRightRadius: 10,
          borderTopRightRadius: 10,
          transform: [{rotate: '-15deg'}],
        }}>
        {' '}
        {disc}% off !{' '}
      </Text>
    );
  } else {
    return null;
  }
};
const HotelInfo = ({objProps, size}) => {
  const priceFontSize = size === 'small' ? 16 : size === 'medium' ? 22 : null;
  return (
    <View style={styles.infoBestHotelWrapper}>
      <Text
        numberOfLines={1}
        style={{fontSize: 15, fontWeight: 500, color: 'black'}}>
        {objProps.name}
      </Text>
      <Text
        numberOfLines={1}
        style={{fontSize: 10, fontWeight: 300, color: 'grey'}}>
        {objProps.address}
      </Text>
      <View
        style={{
          marginTop: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <StarViewers rating={objProps.ratings} ratinger={objProps.ratinger} />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{fontSize: priceFontSize, color: 'green', fontWeight: 800}}>
            ${objProps.lowestPrice}
          </Text>
          <Text style={{fontSize: 9}}> /night</Text>
        </View>
      </View>
    </View>
  );
};

// Best deal
const Hotel2 = ({objProps, size}) => {
  const componentSizeHeight =
    size === 'small' ? 175 : size === 'medium' ? 280 : null;
  const componentSizeWidth =
    size === 'small' ? 240 : size === 'medium' ? 230 : null;
  return (
    <TouchableOpacity>
      <DiscTag isDisc={objProps.isDisc} disc={objProps.discount} />
      <View
        style={{
          width: componentSizeHeight,
          height: componentSizeWidth,
          marginTop: 15,
        }}>
        <View style={styles.loveIcon}>
          <Likes isLikedParam={true} likesCount={123} />
        </View>
        <View style={styles.bestHotelImageWrapper}>
          <Image
            style={styles.bestHotelImage}
            source={{uri: objProps.photos[0]}}
          />
        </View>
        <HotelInfo objProps={objProps} size={size} />
      </View>
    </TouchableOpacity>
  );
};

export default Hotel2;

const styles = StyleSheet.create({
  hotelWrapper: {
    backgroundColor: 'red',
    width: '100%',
    height: 50,
  },
  loveIcon: {
    position: 'absolute',
    top: 10,
    right: 15,
    zIndex: 1,
  },
  bestDealTag: {
    top: 8,
    position: 'absolute',
    zIndex: 1,
    backgroundColor: '#0EBE20',
    padding: 8,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    transform: [{rotate: '-15deg'}],
  },
  // bestDealWrapper: {
  //   // marginTop: 20,
  //   // width: 310,
  //   // height: 230,
  // width: 175,
  // height: 330,
  //   // marginRight: 15,
  // },
  bestDealWrapper: {
    marginTop: 20,
    width: 280,
    height: 230,
  },
  bestHotelImageWrapper: {
    width: '100%',
    height: '100%',
    flex: 1.5,
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  bestHotelImage: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  infoBestHotelWrapper: {
    paddingHorizontal: 15,
    paddingTop: 15,
    flex: 1,
    backgroundColor: 'white',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
});
