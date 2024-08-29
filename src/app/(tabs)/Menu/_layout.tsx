import { Stack } from "expo-router";
import React from "react";

const _Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false, title: "Menu" }}
      />
      <Stack.Screen name="ProductDetailsScreen/[id]" />
    </Stack>
  );
};

export default _Layout;
