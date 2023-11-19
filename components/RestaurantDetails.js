import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import styles from './styles';

const RestaurantDetails = ({ route }) => {
  const { restaurant } = route.params;

  return (
    <SafeAreaView>
      <Text>Restaurant Details</Text>
      <Text>Name: {restaurant.name}</Text>
      <Text>Rating: {restaurant.rating}</Text>
      {}
    </SafeAreaView>
  );
};

export default RestaurantDetails;
