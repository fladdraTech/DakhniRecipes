import React, { useState } from 'react';
import { View, Image,Text, StyleSheet, Button, ScrollView } from 'react-native';
import Card from '../components/home/Card';
import RatingChip from '../components/RatingChip';
import LinearComp from '../components/Gradient';
import BigCard from '../components/common/BigCard'
import BigButton from '../components/common/BigButton';
import StarCustomTab from '../components/common/StarCustomTab';
import CustomTabs from '../components/common/CustomTabs';
import LinearGradient from 'react-native-linear-gradient';

const  Sample= () => {

  const [tabText, setTabText] = useState<string | undefined>(undefined);

  const [longTabText, setLongTabText] = useState<string | undefined>(undefined);



  let list;
  if (longTabText === 'Ingredients' ) {
    list = <Text style={{color:'black'}}> Ingredients </Text>  
  } else {
    list = <Text style={{color:'black'}}> Procedure </Text> ;
  }
    return (
      <View>




      <View>
      <View style={{flexDirection:'row',alignSelf:'center'}}>
        
          
      <BigCard BigCardName='Biryani' BigCardWidth={360} Review='13k Reviews'></BigCard>
        
        {/* Add more Card components as needed */}
        </View>

        <View style={{flexDirection:'row',width:256,alignSelf:'center',justifyContent:'space-between',marginTop:20}}>
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

        <View style={{marginTop: 30, flexDirection: 'row',alignSelf:'center'}}>
        
          <CustomTabs defaultSelected={true} label={'Ingredients'} width={'40%'} height={42} margin={4} selected={longTabText} setSelected={setLongTabText}></CustomTabs>
          
          
          <CustomTabs label={'Procedure'} width={'40%'} height={42} margin={4} selected={longTabText} setSelected={setLongTabText}></CustomTabs>
        </View>

        

        {/* <View style={{flexDirection:'row',alignSelf:'center', justifyContent:'space-between', width:357}}>
        <BigButton  btnLabel={'Hello'} btnWidth={'40%'} btnPosition={'relative'} marginTop={120} Press={()=>setSelectedTab(0)}></BigButton>

        <BigButton  btnLabel={'Hi'} btnWidth={'40%'} btnPosition={'relative'} marginTop={120} Press={()=>setSelectedTab(1)}></BigButton>

        </View> */}
        </View>

        

{/* {selectedTab === 0 && <View> <Text style={{color:'black'}}> hello </Text>  </View>}


{selectedTab === 1 && <View> <Text style={{color:'black'}}> hi </Text> </View>} */}


{list}

        
        </View>
    );
  };
  
  export default Sample;