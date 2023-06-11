import React, { useState, useCallback } from "react";
import { PlusIcon } from "../assets/svg/svg";
import { useFonts } from "expo-font";
// import * as Font from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import {
  View,
  TextInput,
  Button,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Image,
  StyleSheet,
  Platform,
  Keyboard,
  Dimensions,
} from "react-native";

SplashScreen.preventAutoHideAsync();

export const RegistrationScreen = () => {
  const [imageSource, setImageSource] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [loginFocused, setloginFocused] = useState(false);
  const [loginValue, setLoginValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const screenHeight = Dimensions.get("window").height;

  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium":require("../assets/fonts/Roboto-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  
  const handleRegistration = () => {
    console.log("Логін:", loginValue);
    console.log("Електронна пошта:", emailValue);
    console.log("Пароль:", passwordValue);

    setLoginValue("");
    setEmailValue("");
    setPasswordValue("");
  };

  const keyboardDidShow = () => {
    setIsKeyboardOpen(true);
  };

  const keyboardDidHide = () => {
    setIsKeyboardOpen(false);
  };

  Keyboard.addListener("keyboardDidShow", keyboardDidShow);
  Keyboard.addListener("keyboardDidHide", keyboardDidHide);

  if (!fontsLoaded) {
    return null;
  }
  //   const handleImageUpload = () => {
  //     // Код для завантаження фото тут
  //     // Після завантаження фото оновіть значення imageSource
  //   };

  return (
    <View style={styles.containerBack}>
    <Image
      source={require("../assets/images/PhotoBG.png")}
      style={styles.backgroundImage}
    />
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={-260}
      style={styles.container}
      onLayout={onLayoutRootView}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={[styles.innerContainer, { height: (screenHeight * 2) / 3 }]}
          
        >
        
          <View style={styles.profileImageContainer}>
            <Image source={imageSource} style={styles.profileImage} />
            <TouchableOpacity
            //   onPress={handleImageUpload}
            >
              <View style={styles.plusIconWrapper}>
                <PlusIcon style={styles.plusIcon} />
              </View>
            </TouchableOpacity>
          </View>
          <Text style={styles.registrationText}>Реєстрація</Text>
          <View style={styles.form}>
            <TextInput
              style={[styles.input, loginFocused && styles.inputFocused]}
              placeholder="Логін"
              value={loginValue}
              onChangeText={setLoginValue}
              keyboardType="default"
              autoCapitalize="none"
              autoCompleteType="username"
              autoFocus={true}
              onFocus={() => setloginFocused(true)}
              onBlur={() => setloginFocused(false)}
            />
            <TextInput
              style={[styles.input, emailFocused && styles.inputFocused]}
              placeholder="Електронна пошта"
              value={emailValue}
              onChangeText={setEmailValue}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCompleteType="email"
              autoFocus={true}
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
            />
            <View style={styles.inputWraper}>
              <TextInput
                style={[styles.input, passwordFocused && styles.inputFocused]}
                placeholder="Пароль"
                value={passwordValue}
                onChangeText={setPasswordValue}
                secureTextEntry={!showPassword}
                onFocus={() => setPasswordFocused(true)}
                onBlur={() => setPasswordFocused(false)}
              />
              <TouchableOpacity
                style={styles.showPasswordButton}
                onPress={() => setShowPassword(!showPassword)}
              >
                <Text style={styles.showPasswordButtonText}>
                  {showPassword ? "Сховати" : "Показати"}
                </Text>
              </TouchableOpacity>
            </View>
            {!isKeyboardOpen && (
              <>
                <TouchableOpacity
                  style={styles.button}
                  onPress={handleRegistration}
                >
                  <Text style={styles.buttonText}>Зареєструватися</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}}>
                  <Text style={styles.link}>Вже є акаунт? Увійти</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    position: "absolute",
    width: "100%",
    height: "100%",
    // justifyContent: "center",
  },
  containerBack: {
    flex: 1,
    alignItems: "center",
    position: "relative",
  },
  container: {
    //   flex: 1,
    
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 24,
    borderRadius: 25,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: "#fff",
    position: "absolute",
    // position: "relative",
    bottom: 0,
    left: 0,
    right: 0,
    fontFamily: "Roboto-Regular",
  },
  innerContainer: {
    width: "100%",
    alignItems: "center",
  },

  registrationText: {
    fontWeight: "bold",
    marginBottom: 32,
    fontFamily: "Roboto-Bold",
    fontSize: 36,
  },
  form: {
    width: "100%",
    alignItems: "center",
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
    fontSize: 16,
  },
  inputWraper: {
    width: "100%",
    position: "relative",
  },
  inputFocused: {
    borderColor: "#FF6C00",
  },
  link: {
    color: "#1B4371",
    textDecorationLine: "none",
    fontSize: 16,
  },
  profileImageContainer: {
    width: "33%",
    height: "20%",
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    marginBottom: 32,
    marginTop: -85,
  },
  profileImage: {
    position: "relative",
  },
  plusIconWrapper: {
    position: "absolute",
    width: 25,
    height: 25,
    left: 100,
    top: 80,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "#FF6C00",
    justifyContent: "center",
    alignItems: "center",
    fill: "#FF6C00",
  },
  showPasswordButton: {
    position: "absolute",
    top: 18,
    right: 6,
  },
  showPasswordButtonText: {
    color: "#1B4371",
    fontSize: 16,
  },
  button: {
    flexDirection: "column",
    alignItems: "center",
    padding: 16,
    paddingHorizontal: 32,
    marginBottom: 16,
    marginTop: 27,
    //   flex: 1,
    width: "100%",
    alignSelf: "stretch",
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "regular",
    fontSize: 16,
  },
});

