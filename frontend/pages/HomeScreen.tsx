import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style ={styles.helloText}>Hello Tulip,</Text>
        <Text style={styles.welcomeText}>Welcome to the recipe paradise!</Text>
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  helloText: {
    fontSize: 20,
    // lineHeight: 40,
    fontWeight: '500',
    color: 'black',
    textAlign: 'left',
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
})

export default HomeScreen