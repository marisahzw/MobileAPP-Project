import React, { useState, useEffect } from 'react';
import { Text, SafeAreaView, StyleSheet, FlatList, View, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapViewScreen from './components/MapView';
import SearchScreen from './components/Search';
import AboutScreen from './components/About';
import RestaurantDetails from './components/RestaurantDetails';
import { Ionicons } from '@expo/vector-icons';
import image0 from './assets/image0.jpg';
import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';
import image4 from './assets/image4.jpg';
import image5 from './assets/image5.jpg';

const Tab = createBottomTabNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getRandomRating = () => (Math.random() * (5 - 1) + 1).toFixed(1);

    const getRandomRestaurantName = () => {
      const adjectives = ['Tasty', 'Savory', 'Delicious', 'Gourmet', 'Exquisite'];
      const nouns = ['Cuisine', 'Bistro', 'Grill', 'Diner', 'Eatery'];
      const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
      const noun = nouns[Math.floor(Math.random() * nouns.length)];
      return `${adjective} ${noun}`;
    };

    const images = [image1, image2, image0, image3, image4, image5];
    const dummyData = Array.from({ length: 8 }, (_, index) => ({
      id: index + 1,
      title: getRandomRestaurantName(),
      thumbnailUrl: images[index % images.length],
      rating: getRandomRating(),
       address: '123 Main St',
        phone: '555-1234',
        email: 'info@example.com',
        openHours: '10:00 AM',
        closeHours: '8:00 PM',
    }));

    setData(dummyData);
    setIsLoading(false);
  }, []);

 return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: '#1e90ff' },
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#ccc',
          tabBarShowLabel: false,
          tabBarIconStyle: { marginBottom: 5 },
        }}
      >
        <Tab.Screen
          name="Home"
          options={{
            title: "Home",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="md-home" size={size} color={color} />
            ),
          }}
        >
          {(props) => <HomeScreen {...props} data={data} isLoading={isLoading} />}
        </Tab.Screen>
        <Tab.Screen
          name="MapView"
          component={MapViewScreen}
          options={{
            title: "Map View",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="md-map" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            title: "Search",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="md-search" size={size} color={color} />
            ),
          }}
        />
       <Tab.Screen
        name="DetailsRestaurant"
        component={RestaurantDetails}
        options={{
          title: 'DetailsRestaurant',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-restaurant" size={size} color={color} />
          ),
        }}
      />
        <Tab.Screen
          name="About"
          component={AboutScreen}
          options={{
            title: "About",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="md-information-circle" size={size} color={color} />
            ),
          }}
        />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}
function HomeScreen({ navigation, data, isLoading }) {
  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => <ListItem item={item} navigation={navigation} />}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </SafeAreaView>
  );
}

function ListItem(props) {
  const { item, navigation } = props;

  return (
    <TouchableOpacity
      style={styles.item}
      key={item.id}
      onPress={() => navigation.navigate('DetailsRestaurant', { item })}
    >
      <Image source={item.thumbnailUrl} style={styles.image} />
      <View style={{ flex: 1, marginLeft: 10 }}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text>Rating: </Text>
          {Array.from({ length: Math.round(item.rating) }, (_, index) => (
            <Text key={index}>⭐</Text>
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  title: {
    margin: 10,
    height: '100%',
    padding: 5,
  },
  image: {
    height: 100,
    width: 100,
    padding: 5,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ddd',
    borderWidth: 1,
    borderColor: 'black',
  },
});
