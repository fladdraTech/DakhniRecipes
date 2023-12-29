import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import LandingPage from './pages/LandingPage';
function App() {
    
  return (
    <LandingPage/>
    // <SafeAreaView style={styles.container}>
    //   <View style={styles.imageContainer}>
    //     <ImageBackground
    //       source={require('./assets/homeimage.png')}
    //       style={styles.imageBackground}
    //     >
    //       <View style= {{marginTop: 20}}>
    //         {/* <Text style={styles.imageText}>Eat better </Text> */}
    //         <Text style={styles.imageText}>
    //           <Text>Eat </Text>
    //           <LinearGradient colors={['#FF5F6D', '#FFC371']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.gradient}>
    //             <Text style={styles.gradientText}>better</Text>
    //           </LinearGradient>
    //         </Text>
    //         <Text style={styles.imageText2}>every day!</Text>
    //       </View>

    //       <View style = {{width: '75%'}}>
    //       <Text style={styles.imageText3}>Simple way to find </Text>
    //       <Text style={styles.imageText4}>Tasty Recipe</Text>

    //       </View>
    //     </ImageBackground>

    //     <TouchableOpacity onPress={handleButtonPress} style={styles.button}>
    //       <LinearGradient colors={['#FC1125', '#FF9300']} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} style={styles.buttonGradient}>
    //         <View style={styles.buttonContent}>
    //           <Text style={styles.buttonText}>Start Cooking</Text>
    //           <Icon name="arrow-forward" size={20} color="white" style={styles.buttonIcon} />
    //         </View>
    //       </LinearGradient>
    //     </TouchableOpacity>
    //   </View>
    // </SafeAreaView>
  );
}



export default App;
