import { Restaurant } from "@/src/types/restaurant";
import { Image, Pressable, Text } from "react-native";

interface RestaurantHorizontalItemProps {
  restaurant: Restaurant;
}

export function RestaurantHorizontalItem({
  restaurant,
}: RestaurantHorizontalItemProps) {
  return (
    <Pressable
      className="flex flex-col items-center justify-center"
      onPress={() => console.log(`Clicou no restaurante '${restaurant.name}'`)}
    >
      <Image
        source={{ uri: restaurant.image }}
        className="w-20 h-20 rounded-full"
      />
      <Text
        className="text-sm mt-2 w-20 text-center leading-4 text-black"
        numberOfLines={2}
      >
        {restaurant.name}
      </Text>
    </Pressable>
  );
}
