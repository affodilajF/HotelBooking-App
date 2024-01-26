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

const Hotel = ({
  isDisc,
  disc,
  thumbnail,
  name,
  adresses,
  price,
  star,
  reviewers,
  isBookmarked,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.hotelWrapper}
      // onPress={() => navigation.navigate('HotelDetails')}
    >
      <Disc isDisc={isDisc} disc={disc} />
      <View style={styles.imageWrapper}>
        <Image
          style={styles.imageHotel}
          source={require('D:/SELF LEARNING/PROJECTS/projectOne/src/assets/Images/hotel3.png')}
        />
      </View>
      <View style={styles.hotelInfo}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 500,
            color: 'black',
            paddingBottom: 3,
          }}>
          Dome - Bamboo Villa in Eco ...{' '}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            paddingBottom: 8,
          }}>
          <Text style={{fontSize: 11}}>Bali, Indonesia </Text>
          <StarViewers />
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
                $135
              </Text>
              <Text style={{fontSize: 9}}> /night</Text>
            </View>
          </View>
          <Bookmark size={'small'} isBookmarked={isBookmarked} />
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
  imageHotel: {
    height: '100%',
    width: '100%',
    borderRadius: 5,
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
  hotelInfo: {
    flex: 2,
    padding: 5,
    justifyContent: 'center',
    paddingLeft: 20,
  },
});
