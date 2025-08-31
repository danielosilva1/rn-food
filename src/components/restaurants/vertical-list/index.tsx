import { Restaurant } from "@/src/types/restaurant";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { RestaurantVerticalItem } from "../vertical-list/item";

export function RestaurantsVerticalList() {
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
    <View className="w-full h-full px-4 flex-1 mb-11 gap-4">
      {restaurants.map((item) => (
        <RestaurantVerticalItem restaurant={item} key={item.id} />
      ))}
    </View>
  );
}
