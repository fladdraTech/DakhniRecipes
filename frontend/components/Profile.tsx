import React, { useState } from 'react';
import { View, TouchableOpacity, Modal, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Profile = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleIconPress = () => {
    setModalVisible(true);
  };

  const handleEdit = () => {
    // Perform action for edit
    setModalVisible(false); // Close the modal
    // Add logic for edit here
  };

  const handleLogout = () => {
    // Perform action for logout
    setModalVisible(false); // Close the modal
    // Add logic for logout here
  };

  return (
    <View style={{alignSelf: 'center', margin: 20}}>
      <TouchableOpacity onPress={handleIconPress} style={{flexDirection: 'row'}}>
        <Text style={{margin: 4, fontSize: 18, color: 'black'}}>Profile</Text>
        <Icon name="chevron-down-sharp" size={30} color="#797979" />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(true);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity style={styles.optionButton} onPress={handleEdit}>
                <Icon name='settings' size={20}></Icon>
              <Text style={styles.optionText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton} onPress={handleLogout}>
                <Icon name='power-sharp' size={20}></Icon>
              <Text style={styles.optionText}>Logout</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity> */}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  optionButton: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    width: 100,
    alignItems: 'center',
    flexDirection: 'row',
  },
  optionText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  closeText: {
    marginTop: 10,
    color: 'blue',
    fontSize: 16,
  },
});

export default Profile;
