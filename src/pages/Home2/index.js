/* eslint-disable no-alert */

/* eslint-disable react-native/no-inline-styles */

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import HeroIcon from '../../assets/Icon';
import HotelFilterInputField from '../../components/HotelFilterInputField';

const Home2 = () => {
  // const handleIconPress = iconName => {
  //   alert(iconName);
  // };
  return (
    <View style={{flex: 1, backgroundColor: '#4691F2'}}>
      <Profile />
      <View
        style={{
          flex: 10,
          backgroundColor: 'white',
          borderTopEndRadius: 20,
          borderTopStartRadius: 20,
        }}>
        {/* <BalanceCard /> */}
        <View style={styles.balanceCardWrapper}>
          <HotelFilterInputField isShown={true} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <Menu type="ticket" title="Ticket" onPress={() => alert('Ticket')} />
          {/* <Menu type="ticket" title="Travel" onPress={() => alert('Travel')} /> */}
          <Menu
            type="ticket"
            title="Pesawat"
            onPress={() => alert('Pesawat')}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          {/* <Menu type="ticket" title="Hotel" />
          <Menu type="ticket" title="Wisata" />
          <Menu type="ticket" title="Spot" /> */}
        </View>
      </View>
    </View>
  );
};

const Menu = ({onPress, type, title}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{alignItems: 'center', marginVertical: 20}}>
      <View
        style={{
          padding: 13,
          backgroundColor: '#DEE6F9',
          borderRadius: 10,
          marginBottom: 10,
        }}>
        <HeroIcon type={type} />
      </View>
      <Text> {title} </Text>
    </TouchableOpacity>
  );
};

const Profile = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 2.2,
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
  balanceCardWrapper: {
    backgroundColor: '#FfFFFF',
    padding: 20,
    borderRadius: 20,
    elevation: 10,
    flexDirection: 'row',
    margin: 25,
    marginTop: -25,
    shadowColor: '#0F0E60',
    borderWidth: 4, // Lebar outline
    borderColor: '#E2E1FF', // Warna outline
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

export default Home2;
