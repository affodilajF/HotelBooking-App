/* eslint-disable no-alert */
/* eslint-disable react/self-closing-comp */
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
  KeyboardAvoidingView,
  Animated,
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import HeroIcon from '../../assets/Icon';
import BestDealHotel from '../../components/PopularHotel';
import Hotel from '../../components/Hotel';
import SearchView from '../../atom/SearchView';
import FilterButton from '../../atom/FilterButton';
import ButtonGroup from '../../components/ButtonGroup';
import HotelFilterInputField from '../../components/HotelFilterInputField';

const Home = () => {
  // const handleIconPress = iconName => {
  //   alert(iconName);
  // };
  return (
    <ScrollView style={{backgroundColor: '#4691F2'}}>
      <Profile />
      <View style={styles.viewWrapper}>
        <View style={styles.balanceCardWrapper}>
          <HotelFilterInputField isShown={true} />
        </View>
        <View style={styles.sliderWrapper}>
          <PopularHotels />
          <PopularHotels />
        </View>
      </View>
    </ScrollView>
  );
};

const Profile = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        paddingTop: 15,
        // alignItems: 'center',
        flex: 2.2,
        height: 120,
      }}>
      <View>
        <Text style={{color: 'white'}}> Hello, </Text>
        <Text style={{color: 'white', fontSize: 24, fontWeight: 600}}>
          {' '}
          Fadil Daffodil!{' '}
        </Text>
      </View>
      <View>
        <Image
          style={styles.image2}
          source={require('D:/SELF LEARNING/PROJECTS/projectOne/src/assets/Images/wallet.png')}
        />
      </View>
    </View>
  );
};

const BalanceCard = () => {
  return (
    <View style={styles.balanceCardWrapper}>
      <View style={{flex: 1}}>
        <Text style={{fontWeight: '800', fontSize: 18, color: '#4441E6'}}>
          Current{' '}
        </Text>
        <Text style={{fontWeight: '300', fontSize: 15, marginTop: 30}}>
          My Ballance
        </Text>
        <Text style={{fontWeight: '800', fontSize: 25, color: '#0F0E60'}}>
          Rp.555665.000{' '}
        </Text>
      </View>
      <View>
        <Image
          style={styles.image}
          source={require('D:/SELF LEARNING/PROJECTS/projectOne/src/assets/Images/wallet.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewWrapper: {
    backgroundColor: 'white',
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
  },
  balanceCardWrapper: {
    backgroundColor: '#FfFFFF',
    padding: 20,
    borderRadius: 20,
    elevation: 10,
    // flexDirection: 'row',
    marginHorizontal: 25,
    marginTop: -25,
    shadowColor: '#0F0E60',
    borderWidth: 3, // Lebar outline
    borderColor: '#E2E1FF', // Warna outline
  },
  sliderWrapper: {
    paddingHorizontal: 25,
  },
  image: {
    flex: 1,
    width: 80,
    height: 100,
  },
  image2: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },

  iconMenu: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
    padding: 10,
  },
});

export default Home;

const PopularHotels = ({show}) => {
  if (!show) {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: 5,
            marginTop: 20,
          }}>
          <Text style={{fontSize: 18, color: 'black', fontWeight: 600}}>
            Popular
          </Text>
          <Text style={{color: 'blue'}}> See all</Text>
        </View>
        <View>
          <ScrollView horizontal>
            <BestDealHotel
              isLikedParam={true}
              isDisc={true}
              disc={30}
              likesCount={1239}
            />
            <BestDealHotel
              isLikedParam={false}
              isDisc={false}
              disc={0}
              likesCount={1011}
            />
            <BestDealHotel
              isLikedParam={false}
              isDisc={false}
              disc={0}
              likesCount={989}
            />
            <BestDealHotel
              isLikedParam={true}
              isDisc={true}
              disc={30}
              likesCount={654}
            />
          </ScrollView>
        </View>
      </View>
    );
  } else {
    return null;
  }
};
