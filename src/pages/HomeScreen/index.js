/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';

import React from 'react';
import * as Icons from 'react-native-heroicons/outline';

const HomeScreen = () => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        blurRadius={70}
        source={require('D:/SELF LEARNING/PROJECTS/projectOne/src/assets/Images/background.png')}
        style={styles.backgroundImage}>
        <SearchView style={{flex: 12}} />
        <Text style={styles.dailyForecastText}>Daily Forecast</Text>
        <DailyForecasts style={{flex: 1}} />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  container: {
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#EEEEEE',
    height: '100%',
  },
  searchViewWrapper: {
    marginTop: 10,
    borderRadius: 12,
    paddingHorizontal: 10,
    backgroundColor: '#FFFF',
    flexDirection: 'row',
  },
  searchIcon: {
    margin: 10,
    backgroundColor: '#EEEEEE',
    borderRadius: 50,
    justifyContent: 'center',
    width: 35,
    height: 35,
  },
  dailyForecastWrapper: {
    backgroundColor: '#ffff',
    height: 135,
    alignItems: 'center',
    margin: 10,
    borderRadius: 30,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  iconImage: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginHorizontal: 10,
    marginBottom: 5,
  },
});

const DailyForecasts = () => {
  return (
    <View>
      <ScrollView horizontal>
        <DailyForecast
          urlPhoto="https://steelbluemedia.com/wp-content/uploads/2019/06/new-google-favicon-512.png"
          day="friday"
          temperature="56"
        />
        <DailyForecast day="Sunday" />
        <DailyForecast day="Monday" />
        <DailyForecast day="Monday" />
        <DailyForecast day="Monday" />
        <DailyForecast day="Monday" />
        <DailyForecast day="Monday" />
      </ScrollView>
    </View>
  );
};

const DailyForecast = ({day, urlPhoto, temperature}) => {
  return (
    <View style={styles.dailyForecastWrapper}>
      <Image style={styles.iconImage} source={{uri: urlPhoto}} />
      <Text> {day} </Text>
      <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 3}}>
        {' '}
        {temperature}{' '}
      </Text>
    </View>
  );
};

const SearchView = () => {
  return (
    <View style={styles.searchViewWrapper}>
      <TextInput style={{flex: 8}} />
      <TouchableOpacity style={styles.searchIcon}>
        <Icons.MagnifyingGlassIcon size={23} color={'red'} />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
