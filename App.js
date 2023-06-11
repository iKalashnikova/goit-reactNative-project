// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from "react-native";
import { RegistrationScreen } from "./src/screens/RegistrationScreen";
import { LoginScreen } from "./src/screens/LoginScreen";
import { PostScreen } from "./src/screens/PostsScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import 'react-native-gesture-handler';

const MainStack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <MainStack.Navigator initialRouteName="Registration" screenOptions={{ headerShown: false }}>
          <MainStack.Screen name="Registration" component={RegistrationScreen} />
          <MainStack.Screen name="Login" component={LoginScreen} /> 
          {/* <PostScreen/> */}
        </MainStack.Navigator>
      </NavigationContainer>

  );
}
