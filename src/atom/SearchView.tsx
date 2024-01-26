/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */

import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

const SearchView = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    console.log('Search Text:', searchText);
  };

  return (
    <View style={styles.searchViewWrapper}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search ..."
        value={searchText}
        onChangeText={text => setSearchText(text)}
      />
      <TouchableOpacity
        style={styles.searchIcon}
        onPress={handleSearch}></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchViewWrapper: {
    flex: 1,
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    paddingStart: 5,
    backgroundColor: 'white',
  },
  searchInput: {
    flex: 8,
    paddingLeft: 8,
  },
  searchIcon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SearchView;
