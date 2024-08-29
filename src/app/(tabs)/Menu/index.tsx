import { StyleSheet, View, FlatList } from "react-native";
import Colors from "@/src/constants/Colors";
import _products from "@/assets/data/products";
import ProductListItem from "@/src/components/ProductListItem";
export default function MenuScreen() {
  return (
    <FlatList
      data={_products}
      renderItem={({ item }) => {
        return <ProductListItem product={item} />;
      }}
      contentContainerStyle={{
        gap: 10,
        padding: 10,
      }}
      columnWrapperStyle={{ gap: 10 }}
      showsVerticalScrollIndicator={false}
      numColumns={2}
    />
  );
}
