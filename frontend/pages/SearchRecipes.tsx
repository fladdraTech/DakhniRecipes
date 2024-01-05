import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import CustomSearchBar from '../components/CustomSearch'
import FilterButton from '../components/FilterButton';
import BottomNavigationBar from '../components/BottomNavigationBar';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

const SearchRecipes = ({navigation}:{navigation:NavigationProp<ParamListBase>}) => {

  const [searchText, setSearchText] = useState('');

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
    <SafeAreaView style={{height:'100%'}}>
      <View>
        <Text style ={styles.SearchText}>Search Recipes</Text>
      </View>

      <View style = {{marginLeft: 20, flexDirection: 'row', position: 'relative' }}>
        <CustomSearchBar value={searchText} placeholder={'Search'} onChangeText={() => handleSearch} barWidth={'70%'}></CustomSearchBar>

        <FilterButton btnWidth={40}></FilterButton>



      </View>
      <BottomNavigationBar onItemTapped={() => onItemTapped} selectedIndex={0}></BottomNavigationBar>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  },

  SearchText: {
    fontSize: 20,
    // lineHeight: 40,
    fontWeight: '500',
    color: 'black',
    textAlign: 'center',
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

  

  // squareImage: {
  //   // flexDirection: 'row',
  //   marginTop: 30,
  //   height: 40,
    
  // },

  // overLayImg: {
  //   // flexDirection: 'row',
  //   marginTop: 30,
  //   height: 40,
  //   // position: 'absolute',
  //   // top: 50,
  //   // left: 50,
    
  // }
})


export default SearchRecipes