import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, TextInput, Button, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const dummyData = [
  { id: '1', name: 'HakkaBistro', tags: ['Italian', 'Pizza'] },
  { id: '2', name: 'MrItalia', tags: ['Mexican', 'Tacos'] },
];

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [recentSearches, setRecentSearches] = useState(['Italian', 'Mexican']); 
  const [recommendations, setRecommendations] = useState(['Sushi', 'Burgers']);
  const navigation = useNavigation(); 


  const handleSearch = () => {
    const results = dummyData.filter(
      (restaurant) =>
        restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        restaurant.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    setSearchResults(results);

    setRecentSearches((prevSearches) => [...prevSearches, searchQuery]);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search by name or tags"
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />
      <Button title="Search" onPress={handleSearch} />

      {}
      <FlatList
        data={searchResults}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.resultItem}>
            <Text>{item.name}</Text>
            <Text style={styles.tags}>{item.tags.join(', ')}</Text>
          </View>
        )}
      />

      <Text style={styles.sectionTitle}>Recent Searches:</Text>
      <FlatList
        data={recentSearches}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.recentItem}>{item}</Text>}
      />

      <Text style={styles.sectionTitle}>Recommendations:</Text>
      <FlatList
        data={recommendations}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.recommendationItem}>{item}</Text>}
      />

      {}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={{ color: 'blue', marginTop: 16 }}>Go Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 8,
    paddingLeft: 8,
  },
  resultItem: {
    marginBottom: 16,
  },
  tags: {
    color: 'gray',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
  },
  recentItem: {
    marginBottom: 8,
  },
  recommendationItem: {
    color: 'green',
    marginBottom: 8,
  },
});

export default SearchScreen;
