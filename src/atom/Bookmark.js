/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import HeroIcon from '../assets/Icon';

const Bookmark = ({isBookmarked, size}) => {
  switch (size) {
    case 'small':
      return (
        <View>
          <HeroIcon type={'bookmark'} boolean={isBookmarked} />
        </View>
      );
    case 'medium':
      return (
        <View>
          <HeroIcon type={'bookmark2'} boolean={isBookmarked} />
        </View>
      );
  }
};

export default Bookmark;
