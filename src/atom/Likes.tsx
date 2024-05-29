/* eslint-disable react-native/no-inline-styles */

import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import HeroIcon from '../assets/Icon';

const Likes = ({isLikedParam, likesCount}) => {
  const [isLiked, setIsLiked] = useState(isLikedParam);
  const [likesCounted, setLikesCounted] = useState(likesCount);
  // isLiked => apakah data sudah di like
  //  true => sudah di like
  // false => tidak di like

  const savedLogic = () => {
    if (isLiked) {
      setIsLiked(false);
      setLikesCounted(likesCounted - 1);
      //   alert('unlike');
    } else if (!isLiked) {
      setIsLiked(true);
      setLikesCounted(likesCounted + 1);
      //   alert('like');
    }
  };

  return (
    <TouchableOpacity
      onPress={savedLogic}
      style={styles.loveIcon}
      activeOpacity={0.8}>
      <HeroIcon type={'heart'} boolean={isLiked} />
      <Text style={{color: 'white', fontWeight: '700'}}> {likesCounted} </Text>
    </TouchableOpacity>
  );
};

export default Likes;

const styles = StyleSheet.create({
  loveIcon: {
    backgroundColor: 'rgba(128, 128, 128, 0.6)',

    padding: 8,
    borderRadius: 50,
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: 'white',
  },
});
