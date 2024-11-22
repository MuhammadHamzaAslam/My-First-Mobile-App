import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { Image, Text, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  return (
    <View>
      <View
        style={{
          height: 50,
          borderBottomWidth: 1,
          borderBottomColor: "#ccc",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 10,
        }}
      >
        <View>
          <MaterialIcons name="menu" size={24} color="black" />
        </View>
        <View>
          <Text style={{ fontSize: 20 }}>Logo</Text>
        </View>
        <View>
          <MaterialIcons name="notifications" size={24} color="black" />
        </View>
      </View>
      <View>
        <Image
          style={{ height: 200, borderRadius: 10, margin: 10 }}
          source={{
            uri: "https://images.unsplash.com/photo-1648477857123-771e9b1c5d17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnlrZXJ8ZW58MHx8MHx8fDA%3D",
          }}
        />
      </View>
    </View>
  );
}
