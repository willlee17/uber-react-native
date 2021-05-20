import React, { useState, useEffect } from 'react'
import { View, Image, Text  } from 'react-native';
import Ionicicons from 'react-native-vector-icons/Ionicons';

import styles from './styles.js'

const UberTypeRow = (props) => {
  const { type } = props;


  const getImage = () => {
    if (type.type == 'UberX') return require('../../assets/images/UberX.jpeg')
    if (type.type == 'Comfort') return require('../../assets/images/Comfort.jpeg')
    if (type.type == 'UberXL') return require('../../assets/images/UberXL.jpeg')
  }

  return (
    <View style={styles.container}>
      
      {/* Image */}
      <Image 
        style={styles.image} 
        source={getImage()}
      />

       {/* Car description */}

      <View style={styles.middleContainer}>
        <Text style={styles.type}>
          {type.type}{' '}
          <Ionicicons name="person" size={16}/> 
          3
        </Text>
        <Text style={styles.time}>
          8:03PM drop off
        </Text>
      </View>

     

      {/* Price  */}
      <View style={styles.rightContainer}>
        <Ionicicons name="pricetag" size={18} color={"#42d742"} />
        <Text style={styles.price}>
          est. ${type.price}
        </Text>
      </View>
    </View>
  )
}

export default UberTypeRow ;