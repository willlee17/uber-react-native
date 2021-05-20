import React, { useState, useEffect } from 'react'
import { View, Pressable, Text } from 'react-native';
import UberTypeRow from '../UberTypeRow';

import styles from './styles.js'

import typesData from '../../assets/data/types'

const UberTypes = (props) => {

  const confirm = () => {
    console.warn('confirmed')
  }

  return (
    <View>
      {
        typesData.map(type => (
          <UberTypeRow type={type} />
        ))
      }
      <Pressable onPress={confirm} style={{
        backgroundColor: 'black',
        margin: 10,
        padding: 10, 
        alignItems: 'center',
      }}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>Confirm Ride</Text>
      </Pressable>
    </View>
  )
}

export default UberTypes ;