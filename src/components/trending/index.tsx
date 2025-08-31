import { Food } from "@/src/types/food";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { CardHorizontalFood } from "../food";

export function TrendingFoods() {
  const [foods, setFoods] = useState<Food[]>([]);

  useEffect(() => {
    async function getFoods() {
      const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/foods`);
      const data = await response.json();
      setFoods(data);
    }
    getFoods();
  }, []);

  return (
    <FlatList
      data={foods}
      renderItem={({ item }) => <CardHorizontalFood food={item} />}
      horizontal={true}
      contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16 }}
      showsHorizontalScrollIndicator={false}
    />
  );
}
