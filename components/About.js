import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  credits: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  copyright: {
    fontSize: 14,
    color: 'gray',
  },
});

function AboutScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>About Screen</Text>
      <Text style={styles.credits}>
        App created by:
        {'\n'}
        - Marisa, Tafadzwa
        {'\n'}
        - Khungureev, Bulat
        {'\n'}
        - Jeyaseelan, Jafrin Sugantha
        {'\n'}
        - Batuev, Arsalan
      </Text>
      <Text style={styles.copyright}>&copy; 2023 DinePal</Text>
    </SafeAreaView>
  );
}

export default AboutScreen;
