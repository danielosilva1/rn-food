import { Restaurant } from "@/src/types/restaurant";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { RestaurantCard } from "./card";

export function Restaurants() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    async function getRestaurants() {
      const response = await fetch(
        `${process.env.EXPO_PUBLIC_API_URL}/restaurants`
      );
      const data = await response.json();
      setRestaurants(data);
    }
    getRestaurants();
  }, []);

  return (
    <FlatList
      data={restaurants}
      renderItem={({ item }) => <RestaurantCard restaurant={item} />}
      horizontal={true}
      contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16 }}
      showsHorizontalScrollIndicator={false}
    />
  );
}
