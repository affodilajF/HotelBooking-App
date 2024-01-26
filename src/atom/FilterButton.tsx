/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import HeroIcon from '../assets/Icon';

type FilterButtonProps = {
  onPressFilterButton: () => void;
};

const FilterButton: React.FC<FilterButtonProps> = ({onPressFilterButton}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#4691F2',
        padding: 10,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: '#4691F2',
      }}
      onPress={onPressFilterButton}>
      <HeroIcon type={'filter'} />
    </TouchableOpacity>
  );
};

export default FilterButton;
