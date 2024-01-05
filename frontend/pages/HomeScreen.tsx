import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, {useState} from 'react'
import CustomSearchBar from '../components/CustomSearch'
import FilterButton from '../components/FilterButton';
import BottomNavigationBar from '../components/BottomNavigationBar';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import CustomChips from '../components/CustomChips';
import DetailedCard from '../components/DetailedCard';
import Icon from 'react-native-vector-icons/Ionicons';
import Card from '../components/Card';

const HomeScreen = ({navigation}:{navigation:NavigationProp<ParamListBase>}) => {

  const [searchText, setSearchText] = useState('');
  const [tabText, setTabText] = useState<string | undefined>(undefined)
  const [chipText, setChipText] = useState<string | undefined>(undefined)
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
        case 2: 
        navigation.navigate('SavedRecipePage');
        break;
        case 3: 
        navigation.navigate('NotificationPage');
        break;
        case 4: 
        navigation.navigate('AccountPage');
        break;
        
        default:
         
          break;
      }
  };


  return (
    <SafeAreaView style={{height:'100%', backgroundColor: 'white'}}>
      <ScrollView style={{marginBottom: 10}}>
      <View style ={{marginLeft: 20}}>
      <View>
        <Text style ={styles.helloText}>Hello Tulip,</Text>
        <Text style={styles.welcomeText}>Welcome to the recipe paradise!</Text>
      </View>

      <View style = {{flexDirection: 'column', position: 'relative' }}>
        <View style={{flexDirection:'row'}}>

        <CustomSearchBar value={searchText} placeholder={'Search'} onChangeText={() => handleSearch} barWidth={'70%'}></CustomSearchBar>

        <FilterButton btnWidth={40}></FilterButton>
        </View>

        <ScrollView  horizontal={true} style={{flexDirection: 'row',maxWidth:'100%',paddingVertical:10}}>
          <CustomChips key={0} label={'Salad'}  selected={chipText} setSelected={setChipText} defaultSelected={true}></CustomChips>
          <CustomChips key={1} label={'Breakfast'} selected={chipText} setSelected={setChipText}></CustomChips>
          <CustomChips key={2} label={'Appetizer'} selected={chipText} setSelected={setChipText}></CustomChips>
          <CustomChips key={3} label={'Noodle'} selected={chipText} setSelected={setChipText}></CustomChips>
          <CustomChips key={4} label={'Lunch'} selected={chipText} setSelected={setChipText}></CustomChips>
          <CustomChips key={5} label={'Dinner'} selected={chipText} setSelected={setChipText}></CustomChips>

        </ScrollView >


        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginRight: 20, marginTop: 10}}>
          <DetailedCard></DetailedCard>
          <DetailedCard></DetailedCard>
        </View>

        <View style={{marginTop: 30, flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            {/* <Text style={styles.trendingText}>Trending now</Text> */}
             <Image source={require('../assets/category.png')} />
          </View>

          <View style={{flexDirection: 'row' , marginRight: 20}}>
            <Text style={styles.seeAllText}>See All</Text>
            <Icon name='arrow-forward' size={14} style={{padding: 4}} />
          </View>

        </View>

        <View>
          <Card CardName={''} CardImage={'../assets'}></Card>
        </View>

        <View style={{marginTop: 20}}>
          <Text>Popular Category</Text>
        </View>

        
        {/* <View style={{marginTop: 20, flexDirection: 'row'}}>
          <CustomTabs defaultSelected={true} label={'All'} width={100} height={32} margin={4} selected={tabText} setSelected={setTabText}></CustomTabs>
          <CustomTabs label={'Read'} width={100} height={32} margin={4} selected={tabText} setSelected={setTabText}></CustomTabs>
          <CustomTabs label={'Unread'} width={100} height={32} margin={4} selected={tabText} setSelected={setTabText}></CustomTabs>
        </View>

        <View style={{marginTop: 20, flexDirection: 'row'}}>
          <CustomTabs defaultSelected={true} label={'Ingredients'} width={150} height={32} margin={4} selected={selected} setSelected={setSelected}></CustomTabs>
          <CustomTabs label={'Procedure'} width={150} height={32} margin={4} selected={selected} setSelected={setSelected}></CustomTabs>

        </View> */}

        </View>
      </View>
      </ScrollView>
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
    paddingLeft: 18,
    paddingBottom: 10,
    // marginLeft: 10,

  },

  welcomeText: {
    fontSize: 14,
    fontWeight: '400',
    color: 'black',
    paddingLeft: 18
    
  },

  trendingText: {
    color: 'black',
  },

  seeAllText: {
    color: '#FC1125',
    fontSize: 14,
    fontWeight: '400',
  }

  

  
})


export default HomeScreen