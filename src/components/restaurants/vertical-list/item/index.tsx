import { Restaurant } from "@/src/types/restaurant";
import { Ionicons } from "@expo/vector-icons";
import { Image, Pressable, Text, View } from "react-native";

interface RestaurantVerticalItemProps {
  restaurant: Restaurant;
}

export function RestaurantVerticalItem({
  restaurant,
}: RestaurantVerticalItemProps) {
  return (
    <Pressable
      className="flex flex-row items-center justify-start gap-2"
      onPress={() => console.log(`Clicou no restaurante '${restaurant.name}'`)}
    >
      <Image
        source={{ uri: restaurant.image }}
        className="w-20 h-20 rounded-full"
      />

      <View className="flex gap-2">
        <Text className="text-base text-black leading-4 font-bold" numberOfLines={2}>{restaurant.name}</Text>

        <View className="flex flex-row items-center gap-1">
            <Ionicons name="star" size={14} color="#ca8a04" />
            <Text className="text-sm">{restaurant.rating.toFixed(1)}</Text>
        </View>
      </View>
    </Pressable>
  );
}
