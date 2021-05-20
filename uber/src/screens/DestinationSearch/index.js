import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, SafeAreaView } from 'react-native';

import styles from './styles.js'

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


const DestinationSearch = (props) => {
  const [ originPlace, setOriginPlace ] = useState({});
  const [ destinationPlace, setDestinationPlace ] = useState({});

  useEffect(() => {
    if (!!originPlace && !!destinationPlace) {
      console.log('originPlace: ', originPlace)
      console.log('destinationPlace: ', destinationPlace) 
    }
   
  }, [originPlace, destinationPlace])

  return (
    <SafeAreaView>
      <View style={styles.container}>
      <GooglePlacesAutocomplete
          placeholder='From'
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
            setOriginPlace({ data, details})
          }}
          fetchDetails
          styles={{
            textInput: styles.textInput,
          }}
          query={{
            key: 'AIzaSyCKOZjNVuhSPwbTYGXbZcDhnnigdP1uCnk',
            language: 'en',
          }}
        />

        <GooglePlacesAutocomplete
          placeholder='Where to?'
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
            setDestinationPlace({ data, details})
          }}
          fetchDetails
          styles={{
            textInput: styles.textInput,
          }}
          query={{
            key: 'AIzaSyCKOZjNVuhSPwbTYGXbZcDhnnigdP1uCnk',
            language: 'en',
          }}
        />
      </View>
    </SafeAreaView>
    
  )
}

export default DestinationSearch;