import React, { useState } from "react";
import { PlusIcon } from "../assets/svg/svg";
import { useFonts } from "expo-font";
import * as Font from "expo-font";
import * as SplashScreen from 'expo-splash-screen';

import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Image,
  StyleSheet,
  Platform,
  Keyboard,
} from "react-native";

SplashScreen.preventAutoHideAsync();

export const CreatePostsScreen = () => {

// //   const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

//    const [fontsLoaded] = useFonts({
//     "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
//     "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
//     "Roboto-Regular": require("../assets/fonts/Roboto-Medium.ttf"),
//   });

//   const onLayoutRootView = useCallback(async () => {
//     if (fontsLoaded) {
//       await SplashScreen.hideAsync();
//     }
//   }, [fontsLoaded]);

//   if (!fontsLoaded) {
//     return null;
//   }

  return (
      <View >
        <Text >Публікації</Text>
      </View>
  );
};

