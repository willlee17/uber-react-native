import React, { useState, useEffect } from 'react'
import { View, Dimensions } from 'react-native';
import HomeMap from '../../components/HomeMap';
import UberTypes from '../../components/UberTypes'

import styles from './styles.js'

const SearchResults = (props) => {


  return (
    <View>
      <View style={{height: Dimensions.get('window').height - 400}}>
        <HomeMap />
      </View>
     
     <View style={{height: 400}}>
      <UberTypes />
     </View>
    </View>
    
  )
}

export default SearchResults;