/* eslint-disable no-alert */
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

export default function ListHotel() {
  // const [isSearchClicked, setSearchClicked] = useState(false);
  const [isFilterShown, setFilterShown] = useState(true);

  const scrollY = useRef(new Animated.Value(0)).current;

  const handleScroll = Animated.event(
    [{nativeEvent: {contentOffset: {y: scrollY}}}],
    {useNativeDriver: false},
  );

  const handleScrollEndDrag = event => {
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
          <SearchView />
          <FilterButton onPressFilterButton={handleFilterButtonShow} />
        </View>
        {/* <ButtonGroup /> */}
        <HotelFilterInputField
          isShown={isFilterShown}
        />
      </View>
      <View style={{flex: 1, marginHorizontal: 20}}>
        <ScrollView
          onScroll={handleScroll}
          onScrollEndDrag={handleScrollEndDrag}
          scrollEventThrottle={8}>
          <PopularHotels />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginVertical: 5,
              marginTop: 20,
            }}>
            <Text style={{fontSize: 18, color: 'black', fontWeight: 600}}>
              Find your comfort!
            </Text>
            <Text style={{color: 'blue'}}> See all</Text>
          </View>
          <Hotel isBookmarked={true} isDisc={true} disc={23} />
          <Hotel isBookmarked={false} />
          <Hotel isBookmarked={false} isDisc={true} disc={33} />
          <Hotel isBookmarked={false} />
          <Hotel isBookmarked={true} isDisc={false} disc={0} />
          <Hotel isBookmarked={false} />
          <Hotel isBookmarked={false} isDisc={true} disc={23} />
          <Hotel isBookmarked={false} />
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}

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
