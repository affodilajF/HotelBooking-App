/* eslint-disable react-native/no-inline-styles */

import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import BackButton from '../../atom/BackButton';
import Likes from '../../atom/Likes';
import HeroIcon from '../../assets/Icon';
import Bookmark from '../../atom/Bookmark';
import StarViewers from '../../atom/StarViewers';
import Hotel from '../../components/Hotel';
import RoomType from '../../components/RoomType';
import {useNavigation} from '@react-navigation/native';
import hotelsDummy from '../../dummyDatas/HotelsDummy';

const HotelDetails = ({route}) => {
  const {objectItem} = route.params;
  return (
    <ScrollView style={{padding: 20, backgroundColor: 'white'}}>
      <ImageSection objectItem={objectItem} />
      <InfoSection objectItem={objectItem} />
    </ScrollView>
  );
};

const ImageSection = ({objectItem}) => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.imageWrapper}>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.imageHotel}
            source={{uri: objectItem.photos[0]}}
          />
        </View>
        <View style={styles.hotelTitleBackground}>
          <View style={{width: '100%'}}>
            <Text style={styles.hotelTitle}>{objectItem.name}</Text>
            <Text style={styles.hotelTitle2}> {objectItem.address} </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                marginTop: 5,
              }}>
              <View style={{gap: 5, flexDirection: 'row'}}>
                <View
                  style={{
                    backgroundColor: '#0EBE20',
                    padding: 5,
                    paddingHorizontal: 15,
                    borderRadius: 15,
                  }}>
                  <Text
                    style={{color: 'white', fontSize: 16, fontWeight: '500'}}>
                    {objectItem.lowestPrice}$ - {objectItem.highestPrice}$
                  </Text>
                </View>
                <Text
                  style={{
                    paddingHorizontal: 15,
                    backgroundColor: 'black',
                    padding: 5,
                    borderRadius: 15,
                    color: 'white',
                  }}>
                  {' '}
                  {objectItem.discount}% OFF{' '}
                </Text>
              </View>
              <Bookmark size={'medium'} isBookmarked={false} />
            </View>
          </View>
        </View>
        <View style={styles.backButton}>
          <BackButton
            buttonStyle={'one'}
            style={styles.backButton}
            type={'back'}
            onPressedBackButton={() => navigation.navigate('HotelList')}
          />
        </View>
        <View style={styles.likesButton}>
          <Likes isLikedParam={true} likesCount={123} />
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#DEE6F9',
          padding: 12,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{color: 'black', fontSize: 12, flexWrap: 'wrap'}}>
          {objectItem.road}
        </Text>
        <StarViewers />
      </View>
    </View>
  );
};

const InfoSection = ({objectItem}) => {
  return (
    <View style={styles.hotelInfosContainer}>
      <Text style={styles.txtSubTitle}>Description</Text>
      <Text style={styles.txtDesc}>{objectItem.desc}</Text>
      <View style={{marginTop: 15}}>
        <Text style={styles.txtSubTitle}>Accomondation Policies</Text>
        <View style={styles.checkInOutWrapper}>
          <Text>Check-in Time </Text>
          <Text>From {objectItem.checkin} </Text>
        </View>
        <View style={styles.checkInOutWrapper}>
          <Text>Check-out Time </Text>
          <Text>Before {objectItem.checkout} </Text>
        </View>
      </View>
      <View style={{marginTop: 15}}>
        <Text style={styles.txtSubTitle}>Room Type</Text>
        <RoomType />
        <RoomType />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  txtSubTitle: {
    color: 'black',
    fontSize: 15,
    fontWeight: '600',
    paddingVertical: 5,
  },
  checkInOutWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtSub: {
    color: 'black',
  },
  hotelInfosContainer: {
    // flex: 1,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#DEE6F9',
    paddingHorizontal: 15,
    paddingBottom: 30,
    paddingTop: 15,
  },
  hotelTitleBackground: {
    width: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    bottom: 0,
    height: '21%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingTop: 8,
  },
  backButton: {
    position: 'absolute',
    left: '3%',
    top: '3%',
  },
  likesButton: {
    position: 'absolute',
    right: '3%',
    top: '3%',
  },
  hotelTitle: {
    fontWeight: '600',
    color: 'white',
    fontSize: 18,
  },
  hotelTitle2: {
    color: 'white',
    opacity: 0.8,
    fontSize: 12,
  },
  imageWrapper: {
    backgroundColor: 'white',
    height: 480,
  },
  imageHotel: {
    height: '100%',
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  txtDesc: {
    lineHeight: 20,
    color: 'black',
    fontSize: 12,
    textAlign: 'justify',
  },
});

export default HotelDetails;
