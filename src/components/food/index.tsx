import { Food } from "@/src/types/food";
import { Ionicons } from "@expo/vector-icons";
import { Image, Pressable, Text, View } from "react-native";

interface CardHorizontalFoodProps {
  food: Food;
}

export function CardHorizontalFood({ food }: CardHorizontalFoodProps) {
  return (
    <Pressable className="flex flex-col rounded-xl relative">
      <Image source={{ uri: food.image }} className="w-44 h-36 rounded-xl" />

      <View className="flex flex-row bg-neutral-900/90 gap-1 rounded-full absolute top-2 right-3 items-center px-2 py-1 justify-center">
        <Ionicons name="star" size={14} color="#caba04" />
        <Text className="text-white text-sm">{food.rating.toFixed(1)}</Text>
      </View>

      <Text className="text-green-700 font-medium text-lg">
        R$ {food.price.toFixed(2)}
      </Text>
      <Text className="text-black mt-1">{food.name}</Text>
      <Text className="text-neutral-600 text-sm">
        {food.time} - R$ {food.delivery}
      </Text>
    </Pressable>
  );
}
