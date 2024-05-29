import {View, Text} from 'react-native';
import React from 'react';
import HeroIcon from '../assets/Icon';

interface BookmarkProps {
  isBookmarked: boolean;
  size: string;
}

const Bookmark = ({isBookmarked, size}: BookmarkProps) => {
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
