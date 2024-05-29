/* eslint-disable react-native/no-inline-styles */

import {View, KeyboardAvoidingView, Animated, FlatList} from 'react-native';
import React, {useState, useRef} from 'react';
import Hotel from '../../components/Hotel';
import SearchView from '../../atom/SearchView';
import FilterButton from '../../atom/FilterButton';
import HotelFilterInputField from '../../components/HotelFilterInputField';
import BackButton from '../../atom/BackButton';
import {useNavigation} from '@react-navigation/native';
import HotelDummy from '../../dummyDatas/HotelsDummy';

export default function ListHotel() {
  // const [isSearchClicked, setSearchClicked] = useState(false);
  const [isFilterShown, setFilterShown] = useState(false);
  const scrollY = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  const renderItem = ({item}) => <Hotel objectItem={item} />;

  const handleScroll = Animated.event(
    [{nativeEvent: {contentOffset: {y: scrollY}}}],
    {useNativeDriver: false},
  );

  const handleScrollEndDrag = (event: {
    nativeEvent: {contentOffset: {y: any}};
  }) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const threshold = 10;

    if (offsetY > threshold && isFilterShown) {
      setFilterShown(false);
    } else if (offsetY <= threshold && !isFilterShown) {
      // setFilterShown(true);
    }
  };

  const handleFilterButtonShow = () => {
    if (isFilterShown) {
      setFilterShown(false);
    } else {
      setFilterShown(true);
    }
  };

  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <View
        style={{
          padding: 20,
          backgroundColor: '#DEE6F9',
          borderBottomEndRadius: 30,
          borderBottomStartRadius: 30,
          gap: 10,
        }}>
        <View style={{flexDirection: 'row', gap: 20}}>
          <View style={{flexDirection: 'row', flex: 1}}>
            <BackButton
              buttonStyle={'two'}
              type={'back'}
              onPressedBackButton={() => navigation.navigate('Home')}
            />
            <SearchView />
          </View>
          <FilterButton onPressFilterButton={handleFilterButtonShow} />
        </View>
        <HotelFilterInputField isShown={isFilterShown} />
      </View>
      <View style={{flex: 1, marginHorizontal: 20}}>
        <FlatList
          onScroll={handleScroll}
          onScrollEndDrag={handleScrollEndDrag}
          scrollEventThrottle={8}
          data={HotelDummy}
          renderItem={renderItem}
          keyExtractor={item => item.key}
        />
      </View>
    </KeyboardAvoidingView>
  );
}
