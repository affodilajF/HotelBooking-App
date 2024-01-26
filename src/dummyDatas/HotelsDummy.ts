/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';

const hotelsDummy = () => {
  return (
    <View>
      <Text>hotelsDummy</Text>
    </View>
  );
};

const data = [
  {
    key: '1',
    name: 'Dome - Bamboo Villa in Eco ...',
    ratings: 4.5,
    reviewers: 12566,
    likesCount: 125,
    isDisc: true,
    discount: 30,
    lowestPrice: 135,
    checkin: '14:00',
    checkout: '15:00',
    photos: [
      'D:/SELF LEARNING/PROJECTS/projectOne/src/assets/Images/hotel3.png',
      'https://example.com/photo2.jpg',
    ],
    roomType: {
      deluxe: {
        amenities: ['Free Wi-Fi', 'Breakfast', 'Air Conditioning'],
        bedType: 'King-size bed',
        maxOccupancy: 2,
        price: 135,
        photos: [
          'https://example.com/photo1.jpg',
          'https://example.com/photo2.jpg',
        ],
      },
      suite: {
        amenities: ['Free Wi-Fi', 'Breakfast', 'Air Conditioning'],
        bedType: 'King-size bed',
        maxOccupancy: 3,
        price: 175,
        photos: [
          'https://example.com/photo1.jpg',
          'https://example.com/photo2.jpg',
        ],
      },
    },
  },
  {
    key: '2',
    name: 'Alana Hotel',
    ratings: 4.5,
    reviewers: 12566,
    likesCount: 125,
    isDisc: false,
    discount: 0,
    lowestPrice: 135,
    checkin: '14:00',
    checkout: '15:00',
    photos: [
      'https://example.com/photo1.jpg',
      'https://example.com/photo2.jpg',
    ],
    roomType: {
      deluxe: {
        amenities: ['Free Wi-Fi', 'Breakfast', 'Air Conditioning'],
        bedType: 'King-size bed',
        maxOccupancy: 2,
        price: 135,
        photos: [
          'https://example.com/photo1.jpg',
          'https://example.com/photo2.jpg',
        ],
      },
      suite: {
        amenities: ['Free Wi-Fi', 'Breakfast', 'Air Conditioning'],
        bedType: 'King-size bed',
        maxOccupancy: 3,
        price: 175,
        photos: [
          'https://example.com/photo1.jpg',
          'https://example.com/photo2.jpg',
        ],
      },
    },
  },
  {
    key: '3',
    name: 'Mamamamama Vila',
    ratings: 4.5,
    reviewers: 12566,
    likesCount: 125,
    isDisc: true,
    discount: 30,
    lowestPrice: 135,
    checkin: '14:00',
    checkout: '15:00',
    photos: [
      'https://example.com/photo1.jpg',
      'https://example.com/photo2.jpg',
    ],
    roomType: {
      deluxe: {
        amenities: ['Free Wi-Fi', 'Breakfast', 'Air Conditioning'],
        bedType: 'King-size bed',
        maxOccupancy: 2,
        price: 135,
        photos: [
          'https://example.com/photo1.jpg',
          'https://example.com/photo2.jpg',
        ],
      },
      suite: {
        amenities: ['Free Wi-Fi', 'Breakfast', 'Air Conditioning'],
        bedType: 'King-size bed',
        maxOccupancy: 3,
        price: 175,
        photos: [
          'https://example.com/photo1.jpg',
          'https://example.com/photo2.jpg',
        ],
      },
    },
  },
  {
    key: '4',
    name: 'Kakakakas Hotel',
    ratings: 4.5,
    reviewers: 12566,
    likesCount: 125,
    isDisc: true,
    discount: 30,
    lowestPrice: 135,
    checkin: '14:00',
    checkout: '15:00',
    photos: [
      'https://example.com/photo1.jpg',
      'https://example.com/photo2.jpg',
    ],
    roomType: {
      deluxe: {
        amenities: ['Free Wi-Fi', 'Breakfast', 'Air Conditioning'],
        bedType: 'King-size bed',
        maxOccupancy: 2,
        price: 135,
        photos: [
          'https://example.com/photo1.jpg',
          'https://example.com/photo2.jpg',
        ],
      },
      suite: {
        amenities: ['Free Wi-Fi', 'Breakfast', 'Air Conditioning'],
        bedType: 'King-size bed',
        maxOccupancy: 3,
        price: 175,
        photos: [
          'https://example.com/photo1.jpg',
          'https://example.com/photo2.jpg',
        ],
      },
    },
  },
];

export default hotelsDummy;
