import React, { useState, useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

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


export const ProfileScreen = () => {
  const [imageSource, setImageSource] = useState(null);
  const navigation = useNavigation();

  const screenHeight = Dimensions.get("window").height;


  return (
    <View style={styles.containerBack}>
      <Image
        source={require("../assets/images/PhotoBG.png")}
        style={styles.backgroundImage}
      />
      <View style={styles.container}>
        <View
          style={[styles.innerContainer, { height: (screenHeight * 2) / 3 }]}
        >
          <View style={styles.profileImageContainer}>
            <Image source={imageSource} style={styles.profileImage} />

            <TouchableOpacity
            //   onPress={handleImageUpload}
            >
              <View style={styles.plusIconWrapper}>
                <Icon
                  name="close-outline"
                  size={24}
                  color="#ccc"
                  style={styles.plusIcon}
                />
              </View>

              <View style={styles.logoutIconWrapper}>
                <Icon name="log-out-outline" size={30} color="#ccc" />
              </View>
            </TouchableOpacity>
          </View>
          <Text style={styles.registrationText}>Ім'я</Text>
          <View style={styles.form}></View>
        </View>
      </View>
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
    left: 110,
    top: 80,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    fill: "#FF6C00",
  },
  plusIcon: {
    marginTop: -1,
    marginLeft: 1,
  },
  logoutIconWrapper: {
    position: "absolute",
    right: -130,
    top: 76
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
