import { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';

// I added useState and TextInput to make the profile card interactive. 05/15/2026
export default function Index() {
  const [name, setName] = useState('');

  return (
    <View style={styles.screen}>
      <Image source={require('./ian.jpg')} style={styles.photo} />
      
      <TextInput
        placeholder="Type your name..."
        onChangeText={setName}
        style={styles.input}
      />
      
      <Text style={styles.name}>
        Hello, {name}!
      </Text>
      
      <Text style={styles.course}>
        MMA Student · CS126
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  photo: { 
    width: 120, 
    height: 120, 
    borderRadius: 60,
    marginBottom: 10
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: 200,
    borderRadius: 8,
    textAlign: 'center'
  },
  name: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    marginTop: 12 
  },
  course: { 
    fontSize: 14, 
    color: '#888',
    marginTop: 4
  }
});