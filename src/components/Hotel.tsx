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
import Bookmark from '../atom/Bookmark';
import StarViewers from '../atom/StarViewers';
import {useNavigation} from '@react-navigation/native';

const Disc: React.FC<{isDisc: boolean; disc: number}> = ({isDisc, disc}) => {
  if (isDisc) {
    return <Text style={styles.discTag}> {disc}% off </Text>;
  } else {
    return null;
  }
};

// isDisc,
// disc,
// thumbnail,
// name,
// adresses,
// price,
// star,
// reviewers,
// isBookmarked,

const Hotel = ({objectItem}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.hotelWrapper}
      onPress={() =>
        navigation.navigate('HotelDetails', {objectItem: objectItem})
      }>
      <Disc isDisc={objectItem.isDisc} disc={objectItem.discount} />
      <View style={styles.imageWrapper}>
        <Image style={styles.imageHotel} source={{uri: objectItem.photos[0]}} />
      </View>
      <View style={styles.hotelInfo}>
        <Text
          numberOfLines={1}
          style={{
            fontSize: 16,
            fontWeight: '500',
            color: 'black',
            paddingBottom: 3,
          }}>
          {objectItem.name}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            paddingBottom: 8,
          }}>
          <Text style={{fontSize: 11}}> {objectItem.province} </Text>
          <StarViewers rating={objectItem.ratings} ratinger ={objectItem.ratinger} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}>
          <View style={{flexDirection: 'column'}}>
            <Text style={{fontSize: 9, color: 'black'}}>Start from </Text>
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
              <Text style={{fontWeight: '800', fontSize: 22, color: '#4691F2'}}>
                ${objectItem.lowestPrice}
              </Text>
              <Text style={{fontSize: 9}}> /night</Text>
            </View>
          </View>
          <Bookmark size={'small'} isBookmarked={objectItem.isBookmarked} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Hotel;

const styles = StyleSheet.create({
  hotelWrapper: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '100%',
    height: 120,
    marginVertical: 8,
    borderRadius: 5,
    borderWidth: 0.5, // Lebar outline
    borderColor: '#E2E1FF', // Warna outline
    paddingHorizontal: 10,
  },
  discTag: {
    position: 'absolute',
    backgroundColor: '#0EBE20',
    color: 'white',
    padding: 3,
    borderRadius: 5,
    zIndex: 1,
  },
  imageWrapper: {
    flex: 0.8,
    borderRadius: 10,
    paddingVertical: 10,
    backgroundColor: 'white',
  },
  imageHotel: {
    height: '100%',
    width: '100%',
    borderRadius: 5,
  },
  hotelInfo: {
    flex: 2,
    padding: 5,
    justifyContent: 'center',
    paddingLeft: 20,
  },
});
