import { View, Text } from 'react-native'
import React from 'react'
import { NavigationProp, ParamListBase } from '@react-navigation/native';

const NotificationPage = ({navigation}:{navigation:NavigationProp<ParamListBase>}) => {
  return (
    <View>
      <Text>NotificationPage</Text>
    </View>
  )
}

export default NotificationPage