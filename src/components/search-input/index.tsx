import { Feather } from "@expo/vector-icons";
import { TextInput, View } from "react-native";

interface SearchInputProps {
  placeholder?: string;
}

export function SearchInput({ placeholder }: SearchInputProps) {
  return (
    <View className="w-full h-14 flex-row border border-slate-500 rounded-full items-center gap-2 px-4 bg-transparent">
      <Feather name="search" size={24} color="#64748b" />

      <TextInput
        className="w-full h-full flex-1 bg-transparent"
        placeholder={placeholder}
      />
    </View>
  );
}
