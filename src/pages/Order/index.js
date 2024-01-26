/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import React from 'react';
import OrderHistory from '../../components/OrderHistory';

const Order = () => {
  const data = [
    {key: '1', typeStatus: 'done'},
    {key: '2', typeStatus: 'done'},
    {key: '3', typeStatus: 'canceled'},
    {key: '4', typeStatus: 'waiting'},
    {key: '5', typeStatus: 'done'},
    {key: '6', typeStatus: 'done'},
    {key: '7', typeStatus: 'done'},
    {key: '8', typeStatus: 'canceled'},
    {key: '9', typeStatus: 'done'},
    {key: '10', typeStatus: 'done'},
  ];

  const renderItem = ({item}) => <OrderItem typeStatus={item.typeStatus} />;

  return (
    <View style={{flex: 1, backgroundColor: '#4691F2'}}>
      <View
        style={{
          backgroundColor: '#4691F2',
          padding: 20,
        }}>
        <Text style={{color: 'white', fontSize: 20, fontWeight: 800}}>
          {' '}
          Order History{' '}
        </Text>
      </View>
      <View
        style={{
          borderTopStartRadius: 20,
          borderTopEndRadius: 20,
          backgroundColor: 'white',
          paddingTop: 20,
        }}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.key}
        />
      </View>
    </View>
  );
};

//  order
const OrderItem = ({typeStatus}) => {
  return (
    <View>
      <OrderHistory typeStatus={typeStatus} />
    </View>
  );
};

export default Order;
