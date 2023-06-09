import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  View,
  TextInput,
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

export const LoginScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const screenHeight = Dimensions.get("window").height;


  const navigation = useNavigation();

  const handleLogin = () => {

    if (!emailValue || !passwordValue) {
      
      console.log("Please fill in all fields");
      return;
    }
    console.log("Електронна пошта:", emailValue);
    console.log("Пароль:", passwordValue);

    setEmailValue("");
    setPasswordValue("");

    if (navigation) {
      navigation.navigate("Home");
    }
  };

  const keyboardDidShow = () => {
    setIsKeyboardOpen(true);
  };

  const keyboardDidHide = () => {
    setIsKeyboardOpen(false);
  };

  Keyboard.addListener("keyboardDidShow", keyboardDidShow);
  Keyboard.addListener("keyboardDidHide", keyboardDidHide);
  

  return (
    <View style={styles.containerBack}>
      <Image
        source={require("../assets/images/PhotoBG.png")}
        style={styles.backgroundImage}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={Platform.OS === "ios" ? -300 : 0}
        // keyboardVerticalOffset={-300}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View
            style={[styles.innerContainer, { height: (screenHeight * 3) / 5 }]}
          >
            <Text style={styles.loginText}>Увійти</Text>
            <View style={styles.form}>
              <TextInput
                style={[styles.input, emailFocused && styles.inputFocused]}
                placeholder="Електронна пошта"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCompleteType="email"
                value={emailValue}
                onChangeText={setEmailValue}
                autoFocus={false}
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

                {!isKeyboardOpen && (
                  <>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={handleLogin}
                    >
                      <Text style={styles.buttonText}>Увійти</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Registration")}>
                      <Text
                        style={styles.link}
                      >
                        Немає акаунту? Зареєструватися
                      </Text>
                    </TouchableOpacity>
                  </>
                )}
              </View>
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
    bottom: 0,
    left: 0,
    right: 0,
    fontFamily: "Roboto-Regular",
  },
  innerContainer: {
    width: "100%",
    alignItems: "center",
  },

  loginText: {
    fontWeight: "bold",
    marginBottom: 32,
    marginTop: 32,
    fontFamily: "Roboto-Bold",
    fontSize: 36,
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
  form: {
    width: "100%",
    alignItems: "center",
  },
  link: {
    color: "#1B4371",
    textDecorationLine: "none",
    fontSize: 16,
    textAlign: "center",
  },

  showPasswordButton: {
    position: "absolute",
    top: 18,
    right: 16,
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
    fontWeight: "normal",
    fontSize: 16,
  },
});
