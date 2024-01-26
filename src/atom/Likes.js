/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
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
    <TouchableOpacity onPress={savedLogic} style={styles.loveIcon} activeOpacity={0.8}>
      <HeroIcon type={'heart'} boolean={isLiked} />
      <Text style={{color: 'white', fontWeight: 700}}> {likesCounted} </Text>
    </TouchableOpacity>
  );
};

export default Likes;

const styles = StyleSheet.create({
  loveIcon: {
    position: 'absolute',
    top: 10,
    right: 15,
    zIndex: 1,
    backgroundColor: 'rgba(128, 128, 128, 0.6)',
    // backgroundColor: 'rgba(255, 165, 0, 0.7)',
    // backgroundColor: 'rgba(173, 216, 230, 0.6)',
    // backgroundColor: 'rgba(255, 192, 203, 0.6)',

    padding: 8,
    borderRadius: 50,
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: 'white',
  },
});
