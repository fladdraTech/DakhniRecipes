import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

const SavedBtn = () => {
  return (
    <TouchableOpacity>
        <View style={styles.viewArea}>
        <Icon name="bookmark-outline" size={18} />
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    viewArea:{
        borderRadius: 100,
        padding: 8,
        backgroundColor: 'white',
        height: 35,
        width: 35,
    }
})

export default SavedBtn