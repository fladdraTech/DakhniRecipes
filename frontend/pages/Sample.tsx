import React from 'react';
import { View, Image,Text, StyleSheet, Button, ScrollView } from 'react-native';
import Card from '../components/Card';
import RatingChip from '../components/RatingChip';

const  Sample= () => {
    return (
      <View style={{flexDirection:'row',justifyContent:'flex-start',flexWrap:'wrap'}}>
        <Card CardName="Chicken" CardImage={require('../assets/sample.png')} CardHeight={150} CardWidth={150} />
       
        
        {/* Add more Card components as needed */}
        </View>
    );
  };
  
  export default Sample;