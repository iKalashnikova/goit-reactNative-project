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

//   const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

   const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Regular": require("../assets/fonts/Roboto-Medium.ttf"),
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
      <View style={styles.footer}>
        <View style={styles.footerIcon}>
          <PlusIcon width={24} height={24} />
        </View>
        <View style={styles.footerIcon}>
          {/* <UserIcon width={24} height={24} /> */}
        </View>
        <View style={styles.footerIcon}>
          {/* <SettingsIcon width={24} height={24} /> */}
        </View>
      </View>
    </View>

      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

// const styles = StyleSheet.create({
//   container: {
//       flex: 1,
//     width: "100%",
//     height: "100%",
//     alignItems: "center",
//     justifyContent: "space-around",
//     padding: 24,
//     borderRadius: 25,
//     borderBottomLeftRadius: 0,
//     borderBottomRightRadius: 0,
//     backgroundColor: "#fff",
//     position: "absolute",
//     bottom: 0,
//     left: 0,
//         right: 0,
//     fontFamily: 'Roboto-Regular',
//   },
//   innerContainer: {
//     flex: 1,
//     width: "100%",
//     height: "100%",
//     alignItems: "center",
//   }

//   loginText: {
//     fontWeight: "bold",
//     marginBottom: 32,
//     marginTop:32,
//     fontFamily: "Roboto-Bold",
//     fontSize: 36,
//   },
//   input: {
//     width: "100%",
//     height: 50,
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     marginBottom: 16,
//     fontSize: 16,
//     },
//     inputWraper: {
//       width: "100%",
// position: 'relative',
//   },
//   inputFocused: {
//     borderColor: "#FF6C00",
//   },

//   link: {
//     color: "#1B4371",
//     textDecorationLine: "none",
//     fontSize: 16,
//   },

//   showPasswordButton: {
//     position: "absolute",
//     top: 18,
//     right: 16,
//   },
//   showPasswordButtonText: {
//     color: "#1B4371",
//     fontSize: 16,
//   },
//   button: {
//     flexDirection: "column",
//     alignItems: "center",
//     padding: 16,
//     paddingHorizontal: 32,
//     marginBottom: 16,
//     marginTop: 27,
//     //   flex: 1,
//     width: "100%",
//     alignSelf: "stretch",
//     backgroundColor: "#FF6C00",
//     borderRadius: 100,
//   },
//   buttonText: {
//     color: "#fff",
//     fontWeight: "regular",
//     fontSize: 16,
//   },

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
      fontFamily: 'Roboto-Regular',

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
      fontFamily: 'Roboto-Medium'
    },
    mainContent: {
      flex: 1,
    
    },
    footer: {
      flexDirection: "row",
      height: 60,
      borderTopWidth: 1,
      borderTopColor: "#ccc",
      justifyContent: "space-around",
      alignItems: "center",
    },
    footerIcon: {
      backgroundColor: "orange"
    },
  });
  
