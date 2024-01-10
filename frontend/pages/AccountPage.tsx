import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Profile from '../components/Profile'
import EditPage from './EditPage'
import { NavigationProp, ParamListBase } from '@react-navigation/native';


const AccountPage = ({navigation}:{navigation:NavigationProp<ParamListBase>}) => {
  return (
    <SafeAreaView>
        <View>
            <Profile></Profile>
        </View>
    </SafeAreaView>
  )
}

export default AccountPage