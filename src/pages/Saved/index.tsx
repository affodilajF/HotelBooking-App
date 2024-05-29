/* eslint-disable react-native/no-inline-styles */

// import {colors} from '@mui/joy';
import * as React from 'react';
import {
  View,
  useWindowDimensions,
  Text,
  ScrollView,
  FlatList,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import HotelDummy from '../../dummyDatas/HotelsDummy';
import DestinationDummy from '../../dummyDatas/DestinationsDummy';
import Destination from '../../components/Destination';
import Hotel2 from '../../components/Hotel2';
// const FirstRoute = () => <View style={{flex: 1, backgroundColor: 'white'}} />;

const savedDestination = () => {
  const renderItem = ({item}) => (
    <View style={{margin: 8}}>
      <Destination size={'medium'} objProps={item} />
    </View>
  );
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <FlatList
        numColumns={2}
        data={DestinationDummy}
        renderItem={renderItem}
        keyExtractor={item => item.key}
      />
    </View>
  );
};

const savedResorts = () => {
  const renderItem = ({item}) => (
    <View
      style={{
        margin: 8,
      }}>
      <Hotel2 size={'small'} objProps={item} />
    </View>
  );
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <FlatList
        numColumns={2}
        data={HotelDummy}
        renderItem={renderItem}
        keyExtractor={item => item.key}
      />
    </View>
  );
};

const renderScene = SceneMap({
  first: savedResorts,
  second: savedDestination,
});

export default function Saved() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Resorts'},
    {key: 'second', title: 'Destinations'},
  ]);

  return (
    <TabView
      renderTabBar={props => (
        <TabBar
          {...props}
          style={{backgroundColor: '#DEE6F9'}}
          indicatorStyle={{backgroundColor: '#4691F2'}}
          indicatorContainerStyle={{backgroundColor: 'white'}}
          renderLabel={({route, focused}) => (
            <View
              style={{
                backgroundColor: focused ? '#DEE6F9' : 'white',
                paddingHorizontal: '20%',
                paddingVertical: 8,
                borderRadius: 30,
              }}>
              <Text
                style={{
                  color: focused ? '#4691F2' : '#4691F2',
                  textAlign: 'center',
                }}>
                {route.title}
              </Text>
            </View>
          )}
        />
      )}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={newIndex => setIndex(newIndex)}
      initialLayout={{width: layout.width}}
    />
  );
}
