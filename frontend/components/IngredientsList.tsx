import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomTabs from '../components/common/CustomTabs';
import StepsCard from '../components/StepsCard';
import BottomNavigationBar from '../components/BottomNavigationBar';

const IngredientsList = () => {
    
    const [tabText, setTabText] = useState<string | undefined>(undefined)
  return (
   <SafeAreaView style={{paddingBottom: 70}}>
    
    <ScrollView style={{flexDirection: 'column',maxWidth:'100%',paddingVertical:10}}>

        <View style={{margin: 20}}>
            <StepsCard txtLabel={'New Recipe Alert!'} description={'Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate velit esse cillum'} time='10 mins ago'></StepsCard>
            <StepsCard txtLabel={'New Recipe Alert!'} description={'Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate velit esse cillum'} time='10 mins ago'></StepsCard>
            <StepsCard txtLabel={'New Recipe Alert!'} description={'Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate velit esse cillum'} time='10 mins ago'></StepsCard>
            <StepsCard txtLabel={'New Recipe Alert!'} description={'Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate velit esse cillum'} time='10 mins ago'></StepsCard>
            <StepsCard txtLabel={'New Recipe Alert!'} description={'Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate velit esse cillum'} time='10 mins ago'></StepsCard>
            <StepsCard txtLabel={'New Recipe Alert!'} description={'Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate velit esse cillum'} time='10 mins ago'></StepsCard>
            <StepsCard txtLabel={'New Recipe Alert!'} description={'Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate velit esse cillum'} time='10 mins ago'></StepsCard>
            <StepsCard txtLabel={'New Recipe Alert!'} description={'Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate velit esse cillum'} time='10 mins ago'></StepsCard>
        </View>
        </ScrollView>
    
    
    
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1 },

    header:{
        fontWeight: '500',
      fontSize: 20,
      color: 'black',
      alignSelf: 'center',
      margin: 10,
  
    },

    todayText: {
        fontWeight: '300',
      fontSize: 12,
      color: 'black',
      alignSelf: 'center',
    //   margin: 10,
    }

})

export default IngredientsList