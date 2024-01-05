import React from 'react';
import { View, Image,Text, StyleSheet, Button, ScrollView } from 'react-native';
import Card from '../components/Card';
import RatingChip from '../components/RatingChip';

const  Sample= () => {
    return (
      <View>
      <View>
      <View style={{flexDirection:'row'}}>
        <Card CardName="Chicken" CardImage={require('../assets/sample.png')} CardHeight={150} CardWidth={150} >
        
          </Card>
      
        
        {/* Add more Card components as needed */}
        </View>

        <View>
      <View style={{flexDirection:'row'}}>
        <Card CardName="Chicken" CardImage={require('../assets/sample.png')} CardHeight={150} CardWidth={150} >
        
          </Card>
      
        
        {/* Add more Card components as needed */}
        </View>
        </View>

        </View>
        </View>
    );
  };
  
  export default Sample;