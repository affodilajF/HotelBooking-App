/* eslint-disable react-native/no-inline-styles */

import {TouchableOpacity} from 'react-native';
import React from 'react';
import HeroIcon from '../assets/Icon';

type Props = {
  onPressFilterButton: () => void;
};

const FilterButton: React.FC<Props> = ({onPressFilterButton}) => {
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
      <HeroIcon type={'filter'} boolean={undefined} />
    </TouchableOpacity>
  );
};

export default FilterButton;
