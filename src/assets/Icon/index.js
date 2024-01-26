/* eslint-disable prettier/prettier */
import React from 'react';
import * as Icons from 'react-native-heroicons/solid';
import * as Icons2 from 'react-native-heroicons/outline';

const HeroIcon = ({type, boolean}) => {
  switch (type) {
    case 'back':
      return <Icons.ChevronLeftIcon width={20} height={20} color={'orange'} />;
    case 'ticket':
      return <Icons.TicketIcon width={37} height={37} color={'#1769D4'} />;
    case 'location':
      return <Icons.MapPinIcon width={25} height={25} color={'#1769D4'} />;
    case 'calendar':
      return (
        <Icons.CalendarDaysIcon width={25} height={25} color={'#1769D4'} />
      );
    case 'roomMax':
      return <Icons.UserGroupIcon width={25} height={25} color={'#1769D4'} />;
    case 'bookmark':
      if (boolean) {
        return <Icons.BookmarkIcon width={24} height={24} color={'#9AB3ED'} />;
      } else {
        return <Icons2.BookmarkIcon width={24} height={24} color={'#9AB3ED'} />;
      }
    case 'bookmark2':
      if (boolean) {
        return <Icons.BookmarkIcon width={33} height={33} color={'#9AB3ED'} />;
      } else {
        return <Icons2.BookmarkIcon width={33} height={33} color={'#9AB3ED'} />;
      }
    case 'heart':
      if (boolean) {
        return <Icons.HeartIcon width={20} height={20} color={'red'} />;
      } else {
        return <Icons2.HeartIcon width={20} height={20} color={'#FFFF'} />;
      }
    case 'star':
      return <Icons.StarIcon width={15} height={15} color={'orange'} />;
    case 'filter':
      return (
        <Icons.AdjustmentsHorizontalIcon
          width={28}
          height={28}
          color={'white'}
        />
      );
    default:
      return null;
  }
};

export default HeroIcon;
