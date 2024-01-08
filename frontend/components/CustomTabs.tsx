
import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

interface CustomTabsProps {
  label: string | undefined;
  selected: string | undefined;
  setSelected: React.Dispatch<React.SetStateAction<string | undefined>>;
  disabled?: boolean;
}

const CustomTabs: React.FC<CustomTabsProps> = ({ label, selected,setSelected, disabled = false }) => {

  const chipColor = selected === label ? "red" : disabled ? 'grey' : 'white';
  const labelColor = selected === label || disabled ? 'white' : 'black';



  const handlePress = () => {
    if (!disabled) {
        setSelected(label);
      // Logic
    }
  };

  return (
    <View style={{paddingBottom:5}}>
    <TouchableOpacity
      style={[styles.chip, { backgroundColor: chipColor ,borderColor: selected !== label ? 'red':'white'}]}
      onPress={handlePress}
      disabled={disabled}
    >
      <Text style={[styles.label, { color: labelColor }]}>{label}</Text>
    </TouchableOpacity></View>
  );
};

const styles = StyleSheet.create({
  chip: {
    width: 'auto',
    height: 30,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    paddingLeft: 8,
    paddingRight: 8,
    borderWidth:1,
  },
  label: {
    fontWeight: '300',
    fontSize: 12,
  },
  
});

export default CustomTabs;
