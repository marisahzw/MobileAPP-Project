import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const RestaurantDetails = ({ route, navigation }) => {
  // Check if route.params and route.params.item are defined
  if (!route.params || !route.params.item) {
    // Render an error message with options to go back to home or search
    return (
      <View style={styles.container}>
        <Text>Error: Restaurant details not available.</Text>
        <TouchableOpacity
          style={styles.goBackButton}
          onPress={() => navigation.navigate('Home')} // Navigate to home screen
        >
          <Text style={styles.goBackButtonText}>Go to Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.goBackButton}
          onPress={() => navigation.navigate('Search')} // Navigate to search screen
        >
          <Text style={styles.goBackButtonText}>Go to Search</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // If item is defined, proceed with rendering the component
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Image source={item.thumbnailUrl} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>Address: {item.address || 'N/A'}</Text>
        <Text style={styles.text}>Phone: {item.phone || 'N/A'}</Text>
        <Text style={styles.text}>Email: {item.email || 'N/A'}</Text>
        <Text style={styles.text}>Rating: {item.rating || 'N/A'}</Text>
        <Text style={styles.text}>Open Hours: {item.openHours || 'N/A'}</Text>
        <Text style={styles.text}>Close Hours: {item.closeHours || 'N/A'}</Text>

        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="md-arrow-back" size={24} color="#1e90ff" />
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 16,
  },
  detailsContainer: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  backButtonText: {
    marginLeft: 8,
    color: '#1e90ff',
    fontSize: 16,
  },
   goBackButton: {
    marginTop: 16,
    padding: 8,
    backgroundColor: '#1e90ff',
    borderRadius: 4,
    alignItems: 'center',
  },
  goBackButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default RestaurantDetails;
