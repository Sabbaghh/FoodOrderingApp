import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import Colors from "@/src/constants/Colors";
import { Product } from "@/src/constants/types";
import { Link } from "expo-router";
type ProductListItemProps = {
  product: Product;
};
const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <Link href={`/Menu/ProductDetailsScreen/${product.id}`} asChild>
      <Pressable key={product.id} style={styles.container}>
        <Image
          resizeMode="contain"
          source={{ uri: product.image }}
          style={styles.image}
        />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </Pressable>
    </Link>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
    flex: 1,
    maxWidth: "50%",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 600,
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
    fontWeight: "bold",
  },
});

export default ProductListItem;
