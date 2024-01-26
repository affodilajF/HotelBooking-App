/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const ButtonGroup = () => {
  const [selectedButton, setSelectedButton] = useState(0);

  const handleButtonPress = (buttonId: React.SetStateAction<number>) => {
    setSelectedButton(buttonId);
    // Tambahkan logika atau tindakan lain sesuai kebutuhan
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.buttonPinggirKanan,
          selectedButton === 0 && styles.selectedButton,
        ]}
        onPress={() => handleButtonPress(0)}>
        <Text style={styles.buttonText}>All</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, selectedButton === 1 && styles.selectedButton]}
        onPress={() => handleButtonPress(1)}>
        <Text style={styles.buttonText}>Hotel</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, selectedButton === 2 && styles.selectedButton]}
        onPress={() => handleButtonPress(2)}>
        <Text style={styles.buttonText}>Vila</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.buttonPinggirKiri,
          selectedButton === 3 && styles.selectedButton,
        ]}
        onPress={() => handleButtonPress(3)}>
        <Text style={styles.buttonText}>Dome</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 5,
  },
  button: {
    flex: 1,
    backgroundColor: '#9AB3ED',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonPinggirKanan: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9AB3ED',
    paddingVertical: 8,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  buttonPinggirKiri: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#9AB3ED',
    paddingVertical: 8,
    borderTopRightRadius: 5,
    borderBottomEndRadius: 5,
  },
  selectedButton: {
    backgroundColor: '#0067ED',
  },
  buttonText: {
    color: 'white',
    fontSize: 12,
  },
});

export default ButtonGroup;
