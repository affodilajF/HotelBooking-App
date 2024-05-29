/* eslint-disable react-native/no-inline-styles */

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Animated,
} from 'react-native';
import React, {useState} from 'react';
import HeroIcon from '../assets/Icon';
import ButtonGroup from './ButtonGroup';

const HotelFilterInputField = ({isShown, onPressedSearchButton}) => {
  if (isShown) {
    return (
      <View>
        <View style={{paddingBottom: 15}}>
          <ButtonGroup />
        </View>
        <Animated.View
          style={{
            backgroundColor: 'white',
            borderRadius: 10,
            padding: 10,
            gap: 20,
          }}>
          <FieldLocation />
          <FieldCalendar />
          <View style={{flexDirection: 'row'}}>
            <FieldRoom />
            <SearchButton onPressedSearchButton={onPressedSearchButton} />
          </View>
        </Animated.View>
      </View>
    );
  } else {
    return null;
  }
};

const FieldLocation = ({placeholder}) => {
  const [inputValue, setInputValue] = useState('');
  return (
    <View style={styles.fieldWrapper}>
      <HeroIcon type={'location'} />
      <TextInput
        style={styles.txtInput}
        placeholder="Indonesia"
        value={placeholder}
        onChangeText={text => setInputValue(text)}
      />
    </View>
  );
};

const FieldCalendar = () => {
  return (
    <TouchableOpacity style={styles.fieldWrapper}>
      <HeroIcon type={'calendar'} />
      <Text> 12 Jan 2024 - 15 Jan 2024 </Text>
    </TouchableOpacity>
  );
};

import {useNavigation} from '@react-navigation/native';
const SearchButton = ({onPressedSearchButton}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        backgroundColor: 'orange',
        height: '100%',
        borderRadius: 10,
      }}
      onPress={onPressedSearchButton}>
      <Text style={{color: 'white', textAlign: 'center', paddingTop: 5}}>
        {' '}
        Search{' '}
      </Text>
    </TouchableOpacity>
  );
};

const FieldRoom = () => {
  return (
    <View
      style={{flexDirection: 'row', alignItems: 'center', gap: 10, flex: 1.5}}>
      <Text> Person </Text>
      <TouchableOpacity style={styles.plusminWrapper}>
        <Text style={styles.txtPlusMin}> - </Text>
      </TouchableOpacity>
      <Text> 1 </Text>
      <TouchableOpacity style={styles.plusminWrapper}>
        <Text style={styles.txtPlusMin}> + </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  plusminWrapper: {
    // backgroundColor: '#4691F2',
    borderWidth: 1, // Lebar outline
    borderColor: '#4691F2',
    borderRadius: 5,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtPlusMin: {
    color: '#4691F2',
    fontWeight: '600',
    fontSize: 20,
  },
  FieldRoomWrapper: {
    flexDirection: 'row',
  },
  wrapper: {},
  fieldWrapper: {
    backgroundColor: 'white',
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: '#4691F2',
    paddingHorizontal: 5,
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 10,
  },
  txtInput: {
    paddingStart: 10,
    fontSize: 16,
    height: 20,
    padding: 0,
    flex: 1,
  },
});

export default HotelFilterInputField;
