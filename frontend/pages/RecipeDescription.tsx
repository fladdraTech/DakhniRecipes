import React, { useEffect,useState } from 'react';
import {View,Text} from "react-native"
import BigCard from '../components/common/BigCard'
import StarCustomTab from "../components/common/StarCustomTab";
import {NavigationProp, ParamListBase} from '@react-navigation/native';

const  RecipeDescription= ({navigation}:{navigation:NavigationProp<ParamListBase>}) =>{
    const [searchText, setSearchText] = useState('');
    const [tabText, setTabText] = useState<string | undefined>(undefined);
    const [chipText, setChipText] = useState<string | undefined>(undefined);
    return (
      <View>
      <View style={{flexDirection:'row',alignSelf:'center'}}>
        
          
      <BigCard BigCardName='Biryani' BigCardWidth={360} Review='13k Reviews'></BigCard>
      
        </View>

        <View style={{flexDirection:'row',width:256,alignSelf:'center',justifyContent:'space-between'}}>
        {/* <View style={{flexDirection:'column', width:'30%'}}> */}
        <StarCustomTab tabBorderColor='gray' label={'Share'}  width={'auto'} height={32} margin={3} selected={tabText} setSelected={setTabText} image="share"></StarCustomTab>
        {/* </View> */}
        {/* <View style={{flexDirection:'column',width:'30%'}}> */}
        <StarCustomTab tabBorderColor='gray' label={'Rate Recipe'}  width={'auto'} height={32} margin={3} selected={tabText} setSelected={setTabText} image="rate"></StarCustomTab>
        {/* </View> */}
        {/* <View style={{flexDirection:'column', width:'30%'}}> */}
        <StarCustomTab tabBorderColor='gray' label={'Reviews'}  width={'auto'} height={32} margin={3} selected={tabText} setSelected={setTabText} image="share"></StarCustomTab>
        {/* </View> */}
        </View>

        </View>
    );
  };
  
  export default RecipeDescription;