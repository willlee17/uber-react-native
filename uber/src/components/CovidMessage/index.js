import React from 'react'
import { View, Text } from 'react-native';
import styles from './styles.js';

const CovidMessage = (props) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Travel only if necessary</Text>
        <Text style={styles.description}>Help flatten the curve if you must travel, please exercise caution for your safety and the safety of our community.</Text>
        <Text style={styles.learnMore}>Learn more</Text>
    </View>
  )
}

export default CovidMessage;