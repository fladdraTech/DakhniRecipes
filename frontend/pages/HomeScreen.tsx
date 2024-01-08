import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, {useState} from 'react'
import CustomSearchBar from '../components/CustomSearch'
import FilterButton from '../components/FilterButton';
import BottomNavigationBar from '../components/BottomNavigationBar';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import CustomTabs from '../components/CustomTabs';
import SavedBtn from '../components/SavedBtn';
import DetailedCard from '../components/DetailedCard';
import StepsCard from '../components/StepsCard';

// import { ViewComponent } from 'react-native';

const HomeScreen = ({navigation}:{navigation:NavigationProp<ParamListBase>}) => {

  const [searchText, setSearchText] = useState('');

  const [selected,setSelected] = useState<string | undefined>(undefined)

  const handleSearch = (text: string) => {
    //logic
    setSearchText(text);
  
  }
    const onItemTapped = (index: number) => {
      switch (index) {
        case 1: 
        navigation.navigate('HomeScreen');
        break;
        
        default:
         
          break;
      }
  };


  return (
    <SafeAreaView style={{height:'100%', backgroundColor: 'white'}}>
      <View>
        <Text style ={styles.helloText}>Hello Tulip,</Text>
        <Text style={styles.welcomeText}>Welcome to the recipe paradise!</Text>
      </View>

      <View style = {{marginLeft: 20, flexDirection: 'column', position: 'relative' }}>
        <View style={{flexDirection:'row'}}>

        <CustomSearchBar value={searchText} placeholder={'Search'} onChangeText={() => handleSearch} barWidth={'70%'}></CustomSearchBar>

        <FilterButton btnWidth={40}></FilterButton>
        </View>

        <ScrollView  horizontal={true} style={{flexDirection: 'row',maxWidth:'100%',paddingVertical:10}}>
          <CustomTabs key={0} label={'Salad'}  selected={selected} setSelected={setSelected}></CustomTabs>
          <CustomTabs key={1} label={'Breakfast'} selected={selected} setSelected={setSelected}></CustomTabs>
          <CustomTabs key={2} label={'Appetizer'} selected={selected} setSelected={setSelected}></CustomTabs>
          <CustomTabs key={3} label={'Noodle'} selected={selected} setSelected={setSelected}></CustomTabs>
          <CustomTabs key={4} label={'Lunch'} selected={selected} setSelected={setSelected}></CustomTabs>
          <CustomTabs key={5} label={'Lunch2'} selected={selected} setSelected={setSelected}></CustomTabs>

        </ScrollView >


        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginRight: 20, marginTop: 20}}>
          <DetailedCard></DetailedCard>
          <DetailedCard></DetailedCard>
        </View>

        <View>
          <StepsCard></StepsCard>
        </View>


      </View>
      <BottomNavigationBar onItemTapped={() => onItemTapped} selectedIndex={0}></BottomNavigationBar>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  },

  helloText: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
    textAlign: 'left',
    marginTop: 20,
    paddingLeft: 20,
    paddingBottom: 10,
    marginLeft: 10,

  },

  welcomeText: {
    fontSize: 14,
    fontWeight: '400',
    color: 'black',
    marginLeft: 10,
    paddingLeft: 20
    
  },

  

  
})


export default HomeScreen