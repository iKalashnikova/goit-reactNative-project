import React, { useCallback } from "react";
import { PlusIcon, User, Grid } from "../assets/svg/svg";
import { useFonts } from "expo-font";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

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

export const PostScreen = () => {
  //   const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
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
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={-300}
      style={styles.container}
      onLayout={onLayoutRootView}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerText}>Публікації</Text>
          </View>

          {/* Main Content */}
          <View style={styles.mainContent}>
            {/* Список користувачів */}
            {/* Додатковий вміст */}
          </View>

          {/* Footer */}
          {/* <View style={styles.footer}>
            <View style={styles.userIcon}>
              <Grid style={{ fill: "white", width: 40, height: 40 }} />
            </View>
            <View style={styles.plusIcon}>
              <PlusIcon style={{ fill: "white", width: 13, height: 13 }} />
            </View>
            <View style={styles.gridIcon}>
              <User
                style={{
                  width: 40,
                  height: 40,
                  // strokeWidth: 1,
                  stroke: "#212121",
                  fill: "none",
                }}
              />
            </View> */}
          {/* </View> */}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: 24,
    borderRadius: 25,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: "#fff",
    fontFamily: "Roboto-Regular",
  },
  header: {
    height: 60,
    paddingHorizontal: 16,
    justifyContent: "center",
    borderBottomWidth: 1,
    width: "100%",
    borderBottomColor: "#ccc",
  },
  headerText: {
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Roboto-Medium",
  },
  mainContent: {
    flex: 1,
  },
  footer: {
    // flex: 1,
    flexDirection: "row",
    // justifyContent: "space-between"
    height: 60,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
    width: "100%",
  },

  // plusIcon: {
  //   // flex: 1,
  //   backgroundColor: "#FF6C00",
  //   width: 70,
  //   height: 40,
  //   borderRadius: 50,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   // marginTop: 20,
  // },
  // gridIcon: {
  //   // backgroundColor: "white",
  //   // flex: 1,
  //   marginHorizontal: 30,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   width: 40,
  //   height: 40,
  // },
  // userIcon: {
  //   marginHorizontal: 30,
  //   width: 40,
  //   height: 40,
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
});
