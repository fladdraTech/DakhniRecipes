import React from 'react';
import { View, Image,Text, StyleSheet, Button, ScrollView } from 'react-native';
import Card from '../components/Card';
// import BigCard from '../components/BigCard'
import RatingChip from '../components/RatingChip';
import LinearComp from '../components/Gradient';
import Time from '../components/Time'
import BigCardNew from '../components/BigCardNew';
import BigCard from '../components/BigCard'
import SavedBtn from '../components/SavedBtn';


const  Sample= () => {
    return (
      <View>
          <BigCardNew BigCardName='chicken'></BigCardNew>
        </View>
       
    );
  };
  
  export default Sample;