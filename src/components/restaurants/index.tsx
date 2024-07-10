import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import RestaurantItem from "./item";

export interface RestaurantProps {
  id: string;
  name: string;
  image: string;
}

export function Restaurants() {
  const [restaurants, setRestaurants] = useState<RestaurantProps[]>([]);

  useEffect(() => {
    async function getRestaurants() {
      const response = await fetch(`http://192.168.15.4:3000/restaurants`);
      const data = await response.json();
      setRestaurants(data);
    }
    getRestaurants();
  }, []);

  return (
    <FlatList
      data={restaurants}
      renderItem={({ item }) => <RestaurantItem item={item} />}
      horizontal={true}
      contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16 }}
      showsHorizontalScrollIndicator={false}
    />
  );
}
