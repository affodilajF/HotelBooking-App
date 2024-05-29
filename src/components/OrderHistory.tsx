/* eslint-disable react-native/no-inline-styles */

import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const OrderHistory = ({typeStatus}) => {
  return (
    <View style={styles.orderItemCOntainer}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 10,
        }}>
        <Text style={{fontWeight: 400, fontSize: 12}}>
          Order Number : 778889937{' '}
        </Text>
        <Text style={{fontWeight: 400, fontSize: 12}}>
          12 Jan 2024, 14:00 WIB
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          paddingVertical: 14,
          paddingHorizontal: 10,
        }}>
        <View style={styles.txtContainer}>
          <Text style={{fontWeight: 700, fontSize: 15, color: '#403DCA'}}>
            Dom - Demolane island
          </Text>
          <Text style={{fontWeight: 400, fontSize: 10}}>Bali, Indonesia </Text>
          <Text style={{fontWeight: 600, fontSize: 12, color: 'black'}}>
            Jumat 2021 - jumat 2023
          </Text>
        </View>
        <TagStatusOrder type={typeStatus} />
      </View>
    </View>
  );
};

const TagStatusOrder = ({type}) => {
  switch (type) {
    case 'canceled':
      return <Text style={styles.txtStatusCancel}> Canceled </Text>;
    case 'waiting':
      return <Text style={styles.txtStatusWaiting}> Payment Waiting </Text>;
    case 'done':
      return <Text style={styles.txtStatusDone}> Done </Text>;
    default:
      return null;
  }
};

const styles = StyleSheet.create({
  orderItemCOntainer: {
    backgroundColor: '#FfFFFF',
    borderRadius: 10,
    shadowColor: '#0F0E60',
    borderWidth: 2, // Lebar outline
    borderColor: '#E2E1FF', // Warna outline
    marginVertical: 10,
    marginHorizontal: 15,
  },
  txtStatusCancel: {
    borderWidth: 1,
    borderColor: 'red',
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 30,
    color: 'red',
    fontSize: 10,
  },
  txtStatusDone: {
    borderWidth: 1,
    borderColor: 'green',
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 30,
    color: 'green',
    fontSize: 10,
  },
  txtStatusWaiting: {
    borderWidth: 1,
    borderColor: 'orange',
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 30,
    color: 'orange',
    fontSize: 10,
  },
});

export default OrderHistory;
