
import { RegistrationScreen } from "./src/screens/RegistrationScreen";
import { LoginScreen } from "./src/screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import 'react-native-gesture-handler';
import Home from "./src/screens/Home";
import { PostScreen } from "./src/screens/PostsScreen";
import { CreatePostsScreen } from "./src/screens/CreatePostsScreen";
import { useFonts } from "expo-font";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback } from "react";
import { SafeAreaView } from 'react-native-safe-area-context';

const MainStack = createStackNavigator();
// SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("./src/assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Regular": require("./src/assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./src/assets/fonts//Roboto-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <NavigationContainer >
        <MainStack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
          <MainStack.Screen name="Registration" component={RegistrationScreen} />
          <MainStack.Screen name="Login" component={LoginScreen} /> 
          <MainStack.Screen name="Home" component={Home} /> 
          <MainStack.Screen name="PostScreen" component={PostScreen} /> 
          <MainStack.Screen name="CreatePosts" component={CreatePostsScreen} />
        </MainStack.Navigator>
      </NavigationContainer>
      </SafeAreaView>
    
  );
}
