import { View, Text } from "react-native";
import { useState, useEffect } from "react";
import { RestaurantItem } from "./item";

export interface RestaurantProps {
  id: string;
  name: string;
  image: string;
}

export function RestaurantVerticalList() {
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
    <View className="px-4 fle-1 w-full h-full mb-11 gap-4">
        {restaurants.map(item =>(
            <RestaurantItem item={item} key={item.id}/>
        ))}
    </View>
  );
}
