import { useCallback } from "react";
import { registerRootComponent } from "expo";
import { StyleSheet, SafeAreaView } from "react-native";
import { enableScreens } from "react-native-screens";
import Navigation from "@/Navigation";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

enableScreens();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    InterMedium: require("@/media/fonts/Inter-Regular.ttf"),
    InterMedium: require("@/media/fonts/Inter-Medium.ttf"),
    InterSemiBold: require("@/media/fonts/Inter-SemiBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  return <Navigation onLayout={onLayoutRootView} />;
}

registerRootComponent(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
  header: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});