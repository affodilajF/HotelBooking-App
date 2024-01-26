/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import React from 'react';

const RoomType = () => {
  return (
    <View style={styles.wrapper}>
      <ScrollView horizontal>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.imageHotel}
            source={require('D:/SELF LEARNING/PROJECTS/projectOne/src/assets/Images/room1.jpg')}
          />
        </View>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.imageHotel}
            source={require('D:/SELF LEARNING/PROJECTS/projectOne/src/assets/Images/room2.jpg')}
          />
        </View>
      </ScrollView>

      <View style={styles.infoWrapper}>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.txtRoomTitle}>Superior Room </Text>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Text style={styles.txtInfo}> 16 m2</Text>
            <Text> || </Text>
            <Text style={styles.txtInfo}> 1 double bed </Text>
            <Text> || </Text>
            <Text style={styles.txtInfo}> 2 person </Text>
          </View>
        </View>
        <ScrollView horizontal>
          <Facility Facility={'Ac'} />
          <Facility Facility={'TV'} />
          <Facility Facility={'Wifi'} />
          <Facility Facility={'Breakfast'} />
          <Facility Facility={'Private Pool'} />
        </ScrollView>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'flex-end', flex: 1}}>
            <Text style={{fontWeight: 800, fontSize: 22, color: 'green'}}>
              $135
            </Text>
            <Text style={{fontSize: 9}}> /night</Text>
          </View>

          <View style={styles.chooseButton}>
            <Text style={{color: 'white', fontWeight: 600, fontSize: 15}}>
              Book
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{color: 'blue', fontWeight: 500, fontSize: 15}}>
            Now only{' '}
          </Text>
          <Text style={{color: 'blue', fontWeight: 800, fontSize: 23}}>
            $120{' '}
          </Text>
          {/* <Text> save $12 </Text> */}
        </View>
        <View style={{backgroundColor: 'blue', height: 0.7, marginTop: 5}} />
      </View>
    </View>
  );
};
const Facility = ({Facility}) => {
  return (
    <View
      style={{
        backgroundColor: '#DEE6F9',
        marginRight: 10,
        padding: 3,
        borderRadius: 5,
      }}>
      <Text style={{color: '#4691F2', fontSize: 12}}> {Facility} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  chooseButton: {
    backgroundColor: 'orange',
    flex: 0.8,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoWrapper: {
    gap: 5,
    marginTop: 10,
  },
  txtRoomTitle: {
    color: '#5691F0',
    fontWeight: '600',
    fontSize: 19,
  },
  wrapper: {
    backgroundColor: 'white',
    marginVertical: 10, //ini sementara yaap!
    // borderWidth: 0.5,
    // borderColor: '#4691F2',
  },
  txtInfo: {
    fontSize: 11,
  },
  imageHotel: {
    height: '100%',
    width: '100%',
    borderRadius: 2,
  },
  imageWrapper: {
    height: 120,
    width: 220,
    paddingRight: 10,
  },
});

export default RoomType;
