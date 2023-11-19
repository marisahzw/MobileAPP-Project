import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import styles from './styles'; // Make sure to import styles

function AboutScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>About Screen</Text>
    </SafeAreaView>
  );
}

export default AboutScreen;
