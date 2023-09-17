import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'; 
import { Picker } from '@react-native-picker/picker';

const Duration = ({ navigation }) => {
  const [selectedDuration, setSelectedDuration] = useState(1); 

  const handleNextPress = () => {
    navigation.navigate('MeditationTimer', { duration: selectedDuration });
  };

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedDuration}
        onValueChange={(itemValue) => setSelectedDuration(itemValue)}
        style={styles.pickerStyle}
        mode="dropdown"
      >
        {Array.from({ length: 10 }, (_, i) => i + 1).map((min) => (
          <Picker.Item key={min} label={String(min)} value={min} />
        ))}
      </Picker>
      <Text style={styles.minText}>min</Text>
      <Button title="Next" onPress={handleNextPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pickerStyle: {
    height: 200,
    width: 100,
  },
  minText: {
    fontSize: 16, 
  },
});

export default Duration;