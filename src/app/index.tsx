import { ScrollView, View } from "react-native";
import { Header } from "../components/header";

import Constants from "expo-constants";
import { Banner } from "../components/banner";
import { SearchInput } from "../components/search-input";

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView
      style={{ flex: 1 }}
      className="bg-slate-200"
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8 }}>
        <Header />

        <Banner />

        <SearchInput placeholder="Procure sua comida..." />
      </View>
    </ScrollView>
  );
}
