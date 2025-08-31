import { ScrollView, View } from "react-native";
import { Banner } from "../components/banner";
import { Header } from "../components/header";
import { SearchInput } from "../components/search-input";
import { Section } from "../components/section";

import Constants from "expo-constants";

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

        <Section
          title="Comidas em alta"
          label="Veja mais"
          action={() => console.log("Clicou no 'Veja mais'")}
          size="text-2xl"
        />
      </View>
    </ScrollView>
  );
}
