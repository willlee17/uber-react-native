import React from 'react'
import { View, Text, Image } from 'react-native';

import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';


const HomeMap = (props) => {
  return (
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{width: '100%', height: '100%'}}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
    >
      <Marker
        coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
      >
        <Image 
          style={{width: 70, height: 50, resizeMode: 'contain'}}
          source={require('../../assets/images/top-UberX.png')}
        />
      </Marker>
    </MapView>
  )
}

export default HomeMap;