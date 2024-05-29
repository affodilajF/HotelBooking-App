/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import React from 'react';
import HotelFilterInputField from '../../components/HotelFilterInputField';
import {useNavigation} from '@react-navigation/native';
import SubHeading from '../../atom/SubHeading';
import Hotel2 from '../../components/Hotel2';
import Destination from '../../components/Destination';
import HotelDummy from '../../dummyDatas/HotelsDummy';
import DestinationDummy from '../../dummyDatas/DestinationsDummy';

const Home = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{backgroundColor: '#4691F2'}}>
      <Profile />
      <View style={styles.viewWrapper}>
        <View style={styles.balanceCardWrapper}>
          <HotelFilterInputField
            isShown={true}
            onPressedSearchButton={() => navigation.navigate('HotelList')}
          />
        </View>
        <View style={styles.sliderWrapper}>
          <ExploreDestinations />
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
        height: 120,
      }}>
      <View>
        <Text style={{color: 'white'}}> Hello, </Text>
        <Text style={{color: 'white', fontSize: 24, fontWeight: '600'}}>
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
    marginHorizontal: 25,
    marginTop: -25,
    elevation: 10,
    shadowColor: '#0F0E60',
    borderWidth: 3, // Lebar outline
    borderColor: '#E2E1FF', // Warna outline
  },
  sliderWrapper: {
    paddingHorizontal: 25,
    // INI PADDING SEMENTARA YAH
    height: 1000,
    paddingTop: 15,
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

const ExploreDestinations = () => {
  const renderItem = ({item}) => (
    <View style={{marginRight: 18}}>
      <Destination size={'small'} objProps={item} />
    </View>
  );
  return (
    <View style={{paddingTop: 15}}>
      <SubHeading
        subHeading={'Explore Destination!'}
        onPressedSeeMore={undefined}
      />
      <View style={{paddingTop: 15}}>
        <FlatList
          horizontal={true}
          data={DestinationDummy}
          renderItem={renderItem}
          keyExtractor={item => item.key}
        />
      </View>
    </View>
  );
};
const PopularHotels = () => {
  const renderItem = ({item}) => (
    <View style={{margin: 8}}>
      <Hotel2 size={'medium'} objProps={item} />
    </View>
  );
  return (
    <View style={{paddingTop: 25}}>
      <SubHeading subHeading={'Popular'} onPressedSeeMore={undefined} />
      <View>
        <FlatList
          horizontal={true}
          data={HotelDummy}
          renderItem={renderItem}
          keyExtractor={item => item.key}
        />
      </View>
    </View>
  );
};
