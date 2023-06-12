import React, { useState, useCallback } from "react";
import { useFonts } from "expo-font";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Icon from "react-native-vector-icons/Ionicons";
import { useFocusEffect } from "@react-navigation/native";

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
  TextInput
} from "react-native";


SplashScreen.preventAutoHideAsync();

export const CreatePostsScreen = ({ navigation }) => {

    const [photo, setPhoto] = useState("");
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");

    const [fontsLoaded] = useFonts({
        "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
        "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
        "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
      });
    
      
      const handlePublish = () => {
        console.log("Опубліковано!");
      };

      const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
        }
      }, [fontsLoaded]);
    
      if (!fontsLoaded) {
        return null;
      }
    
      const isFormValid = title !== "" && location !== "";

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
              <View style={styles.headerContent}>
              <TouchableOpacity
              // onPress={back}
              >
                <Icon name="arrow-back-outline" size={24} color="#000" />
              </TouchableOpacity>
                <Text style={styles.headerText}>Створити Публікацію</Text>
              
             
              </View>
              </View>
    
              <View style={styles.container}>
      <Text>"Завантажити фото"</Text>

      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Назва..."
      />
      <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputLocation}
        value={location}
        onChangeText={setLocation}
        placeholder="Місцевість..."    
      />
       <Icon name="location-outline" size={24} color="#000" style={styles.icon} />
       </View>
      <TouchableOpacity style={[styles.button, !isFormValid && styles.buttonDisabled]}
                  onPress={handlePublish}
                  disabled={!isFormValid}>
        <Text style={styles.buttonText}>Опублікувати</Text>
      </TouchableOpacity>
    </View>
  
              <View style={styles.mainContent}>
                {/* Список користувачів */}
                {/* Додатковий вміст */}
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        // justifyContent: "space-around",
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
      headerContent: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      },
      headerText: {
        flex: 1,
        fontSize: 17,
        fontWeight: "bold",
        textAlign: "center",
        fontFamily: "Roboto-Medium",
      },
      label: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5,
      },
      inputContainer: {
        flexDirection: "row",
        alignItems: "center",
      },
      input: {
        width: "90%",
        height: 40,
        borderColor: "#ccc",
        borderBottomWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
        paddingLeft: 10,
      },
      inputLocation: {
        position: "relative",
        width: "90%",
        height: 40,
        borderColor: "#ccc",
        borderBottomWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderRadius: 5,
        paddingHorizontal: 20,
        marginBottom: 20,
        paddingLeft: 40,
      },
      icon: {
        // marginRight: 15,
        position: 'absolute',
        bottom: 30,
        left: 10,
        right: 5,
        color: "#ccc",
        
      },
      button: {
       
        alignItems: "center",
        padding: 16,
        paddingHorizontal: 32,
        marginBottom: 16,
        marginTop: 27,
    
        width: "90%",
        // alignSelf: "stretch",
        backgroundColor: "#FF6C00",
        borderRadius: 100,
      },
      buttonText: {
        color: "#fff",
        fontWeight: "normal",
        fontSize: 16,
      },
      buttonDisabled: {
        backgroundColor: '#ccc',
        opacity: 0.5,
      }
    });
    
