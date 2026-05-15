import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, ScrollView, StyleSheet } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);

  
    const message =
    count === 0 && name === ''
      ? 'Tap the buttons!'
      : `${name ? `${name}, ` : ''}You tapped ${count} times!`;


  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <Image source={require('./ian.jpg')} style={styles.image} />

      
      <TextInput
        placeholder="Enter your name"
        onChangeText={setName}
        style={styles.input}
      />

      
      <Text style={styles.greeting}>
        {name === '' ? 'Ad astra Abyssosque ⭐' : `Ad astra abyssosque, ${name}! ⭐`}
      </Text>

      <Text style={styles.message}>{message}</Text>

      <View style={styles.buttonContainer}>
        <Button title="+" onPress={() => setCount(count + 1)} />
        <Button title="-" onPress={() => setCount(count - 1)} />
        <Button title="Reset" onPress={() => setCount(0)} />
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white', 
    padding: 20,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginBottom: 12,
    width: '80%',
    borderRadius: 6,
    backgroundColor: 'white',
  },
  greeting: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 6,
    textAlign: 'center',
  },
  message: {
    fontSize: 16,
    color: '#555',
    marginBottom: 16,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 10,
    width: '60%',
  },
});
