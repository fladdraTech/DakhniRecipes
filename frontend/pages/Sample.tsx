import React from 'react';
import { View, Image,Text, StyleSheet, Button, ScrollView } from 'react-native';
import Card from '../components/home/Card';
import RatingChip from '../components/RatingChip';
import LinearComp from '../components/Gradient';
import BigCard from '../components/common/BigCard'

const  Sample= () => {
    return (
      <View>
      <View>
      <View style={{flexDirection:'row',alignSelf:'center'}}>
        
          
      <BigCard BigCardName='Biryani' BigCardWidth={360} Review='13k Reviews'></BigCard>
        
        {/* Add more Card components as needed */}
        </View>

        <View>
      
        </View>

        </View>
        </View>
    );
  };
  
  export default Sample;