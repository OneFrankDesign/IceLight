import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import tw from "./lib/tailwind"; // or, if no custom config: `from 'twrnc'`
import { useAppColorScheme, useDeviceContext } from "twrnc";
import { LinearGradient } from "expo-linear-gradient";
import { Fontisto } from "@expo/vector-icons";

export default function App() {
  useDeviceContext(tw, { withDeviceColorScheme: false });
  const [colorScheme, toggleColorScheme] = useAppColorScheme(tw);

  return (
    <View
      style={tw`flex-1 bg-indigo-200 dark:bg-indigo-600 items-center justify-center`}
    >
      <Text style={tw`text-2xl font-bold text-gray-700 dark:text-gray-200`}>
        Welcome to IceLight{" "}
        <Fontisto name="snowflake-2" size={28} color={"#FCA5A5"} />
      </Text>
      <TouchableOpacity onPress={toggleColorScheme}>
        <Text style={tw`text-black dark:text-white`}>Switch Color Scheme</Text>
      </TouchableOpacity>
      <LinearGradient
        // Background Linear Gradient
        colors={[
          colorScheme === "light"
            ? "rgba(67, 56, 202, 0.3)"
            : "rgba(195, 218, 254, 0.3)",
          "transparent",
        ]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: 200,
        }}
      />
      <LinearGradient
        // Background Linear Gradient
        colors={[
          "transparent",
          colorScheme === "light"
            ? "rgba(67, 56, 202, 0.3)"
            : "rgba(195, 218, 254, 0.3)",
        ]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 200,
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
