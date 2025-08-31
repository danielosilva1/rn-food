import { ScrollView, View } from "react-native";
import { Banner } from "../components/banner";
import { Header } from "../components/header";
import { SearchInput } from "../components/search-input";
import { Section } from "../components/section";
import { TrendingFoods } from "../components/trending";

import Constants from "expo-constants";
import { RestaurantsHorizontalList } from "../components/restaurants/horizontal-list";
import { RestaurantsVerticalList } from "../components/restaurants/vertical-list";

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

      <Section
        title="Comidas em alta"
        label="Veja mais"
        action={() => console.log("Clicou no 'Veja mais'")}
        size="text-2xl"
      />

      <TrendingFoods />

      <Section
        title="Famosos no RNFood"
        label="Veja todos"
        action={() => console.log("Clicou no 'Veja todos'")}
        size="text-xl"
      />

      <RestaurantsHorizontalList />

      <Section
        title="Restaurantes"
        size="text-xl"
      />

      <RestaurantsVerticalList />
    </ScrollView>
  );
}
