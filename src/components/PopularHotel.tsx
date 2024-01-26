/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
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
      <View style={styles.bestDealTag}>
        <Text style={{color: 'white', fontWeight: 600}}> {disc}% off ! </Text>
      </View>
    );
  } else {
    return null;
  }
};
const HotelInfo = () => {
  return (
    <View style={styles.infoBestHotelWrapper}>
      <Text style={{fontSize: 17, fontWeight: 500, color: 'black'}}>
        Dome - Bamboo Villa in Eco ...
      </Text>
      <Text style={{fontSize: 12, fontWeight: 300, color: 'grey'}}>
        Tampaksiring, Bali, Indonesia{' '}
      </Text>
      <View
        style={{
          marginTop: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}>
        <StarViewers />
        <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
          <Text style={{fontSize: 20, color: 'green', fontWeight: 800}}>
            {' '}
            $135
          </Text>
          <Text> /night</Text>
        </View>
      </View>
    </View>
  );
};

// Best deal
const PopularHotel = ({isDisc, disc, isLikedParam, likesCount}) => {
  return (
    <TouchableOpacity>
      <DiscTag isDisc={isDisc} disc={disc} />
      <View style={styles.bestDealWrapper}>
        <Likes isLikedParam={isLikedParam} likesCount={likesCount} />
        <View style={styles.bestHotelImageWrapper}>
          <Image
            style={styles.bestHotelImage}
            source={require('D:/SELF LEARNING/PROJECTS/projectOne/src/assets/Images/hotel3.png')}
          />
        </View>
        <HotelInfo />
      </View>
    </TouchableOpacity>
  );
};

export default PopularHotel;

const styles = StyleSheet.create({
  hotelWrapper: {
    backgroundColor: 'red',
    width: '100%',
    height: 50,
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
  bestDealWrapper: {
    marginTop: 20,
    width: 280,
    height: 230,
    marginRight: 15,
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
