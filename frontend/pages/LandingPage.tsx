import { View, Text, SafeAreaView, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import LGradient  from 'react-native-linear-gradient'
// import { Icon } from 'react-native-vector-icons/Icon'
import Icon from 'react-native-vector-icons/Ionicons';
import MaskedView from '@react-native-masked-view/masked-view';
import BigButton from '../components/BigButton';


  
const GradientText = (props:any) => {
    return (
      <MaskedView maskElement={<Text {...props} />}>
        <LGradient
          colors={['#FF5F6D', '#FFC371']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          <Text {...props} style={[props.style, {opacity: 0}]} />
        </LGradient>
      </MaskedView>
    );
  };

  
const LandingPage = () => {
    const handleButtonPress = () => {
        // Handle button press action here
        // console.log('Start Cooking Pressed');
      };

  return (
     <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={require('../assets/homeimage.png')}
          style={styles.imageBackground}
        >
          <View style= {{marginTop: 20}}>
            {/* <Text style={styles.imageText}>Eat better </Text> */}
            <Text style={styles.imageText}>
              <Text>Eat </Text>
              {/* <LGradient colors={['#FF5F6D', '#FFC371']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} >
                <Text style={styles.gradientText}>better</Text>
              </LGradient> */}
      <GradientText style={styles.gradientText}>better</GradientText>
            </Text>
            <Text style={styles.imageText2}>every day!</Text>
          </View>

          <View style = {{width: '75%'}}>
          <Text style={styles.imageText3}>Simple way to find </Text>
          <Text style={styles.imageText4}>Tasty Recipe</Text>

          </View>
        </ImageBackground>

        {/* <TouchableOpacity onPress={handleButtonPress} style={styles.button}>
          <LGradient colors={['#FC1125', '#FF9300']} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} style={styles.buttonGradient}>
            <View style={styles.buttonContent}>
              <Text style={styles.buttonText}>Start Cooking</Text>
              <Icon name="arrow-forward" size={20} color="white" style={styles.buttonIcon} />
            </View>
          </LGradient>
        </TouchableOpacity> */}
        <BigButton btnLabel={'Start Cooking'}/>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    imageContainer: {
      flex: 1,
    },
    imageBackground: {
      flex: 1,
      resizeMode: 'cover',
      // justifyContent: 'center',
    },
    imageText: {
      fontSize: 50,
      lineHeight: 60,
      fontWeight: '300',
      color: 'white',
      textAlign: 'left',
      verticalAlign: 'top',
      marginLeft: 20,
  
    },
  
    imageText2:{
      fontSize: 50,
      lineHeight: 60,
      fontWeight: '300',
      color: 'white',
      textAlign: 'left',
      verticalAlign: 'top',
      marginLeft: 20,
    },
  
    imageText3: {
      fontSize: 20,
      lineHeight: 27,
      fontWeight: '400',
      color: 'white',
      textAlign: 'center',
      verticalAlign: 'auto',
      marginTop: 20,
      // paddingRight: 30,
      // marginRight: 30
    },
  
    imageText4: {
      fontSize: 20,
      lineHeight: 27,
      fontWeight: '400',
      color: 'white',
      textAlign: 'center',
      verticalAlign: 'auto',
      marginTop: 10,
      // paddingRight: 30,
      // marginRight: 30
    },
  
    gradient: {
      display: 'flex',
      flexDirection: 'row',
      overflow: 'hidden',
    },
    gradientText: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
          
    },
  
    button: {
      position: 'absolute',
      bottom: 20,
      alignSelf: 'center',
      height: 54,
      width: 240,
      // display:'flex',
      // flexDirection:'row',
      // justifyContent:'center'
      textAlign:'center',
    },
    buttonGradient: {
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 8,
      paddingHorizontal: 20,
      paddingVertical: 14,
      justifyContent:'center'
    },
  
    buttonContent: {
      display:'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    buttonText: {
      color: 'white',
      fontWeight: '500',
      fontSize: 18,
      marginRight: 8,
      textAlign: 'center',
      
    },
    buttonIcon: {
      marginLeft: 5,
      
    },
  
   
  });


export default LandingPage