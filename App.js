import React from "react";
import type { Node } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import { ThemeColor, ThemeBgColor, ThemeScreenPadding } from "./theme.config";
import Svg, { Path, Rect } from "react-native-svg";

const App: () => Node = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView style={AppStyles.Container}>
        <View style={AppStyles.Content}>
          <Svg
            width="24"
            height="24"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="M10 44C13.3137 44 16 41.3137 16 38V23.5147V4H4V38C4 41.3137 6.68629 44 10 44Z"
              fill="none"
              stroke="#000"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <Path
              d="M14.2422 42.2426L43.9848 12.5L35.4848 4L15.9995 23.5147"
              stroke="#000"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <Path
              d="M24.4853 32H44V44H12.5"
              stroke="#000"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </Svg>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const AppStyles = StyleSheet.create({
  Container: {
    backgroundColor: ThemeBgColor,
    height: "100%",
  },
  Content: {
    paddingHoriontal: 30,
    backgorundColor: "red",
  },
});

export default App;
