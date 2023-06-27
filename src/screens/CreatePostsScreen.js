import React, { useState, useCallback, useEffect } from "react";
import {SimpleLineIcons, MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons';
import { useFocusEffect } from "@react-navigation/native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as Location from "expo-location";

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
  TextInput,
} from "react-native";

export const CreatePostsScreen = ({ navigation }) => {
  const [photo, setPhoto] = useState("");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [place, setPlace] = useState("");

  const [permission, requestPermission] = Camera.useCameraPermissions();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      setLocation(coords);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      // await MediaLibrary.requestCameraPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  // if (!permission) {
  //   // Camera permissions are still loading
  //   return <View />;
  // }

  // if (!permission.granted) {
  //   // Camera permissions are not granted yet
  //   return (
  //     <View style={styles.container}>
  //       <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
  //       <Button onPress={requestPermission} title="grant permission" />
  //     </View>
  //   );
  // }

  const takePhoto = async () => {
    if (cameraRef) {
      const { uri } = await cameraRef.takePictureAsync();
      await MediaLibrary.createAssetAsync(uri);
      setPhoto(uri);
    }
  };

  const deletePhoto = () => {
    setPhoto("");
    setTitle("");
    setLocation("");
    setPlace("");
  };

  const handlePublish = () => {
    console.log(location);
    navigation.navigate("PostScreen");
    console.log("Опубліковано!");
  };

  const isFormValid = title !== "" && location !== "" && photo !== "";
  console.log(isFormValid);

  return (
    <KeyboardAwareScrollView
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardShouldPersistTaps="handled"
      // keyboardVerticalOffset={-300}
      contentContainerStyle={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.headerContent}>
              <TouchableOpacity
              // onPress={back}
              >
                <MaterialIcons name="arrow-back" size={24} color="#000" />
              </TouchableOpacity>
              <Text style={styles.headerText}>Створити Публікацію</Text>
            </View>
          </View>

          <View style={styles.container}>
            <View style={styles.cameraContainer}>
              <Camera style={styles.camera} type={type} ref={setCameraRef}>
                {photo && (
                  <View style={styles.takePhotoContainer}>
                    <Image
                      style={{ width: "100%", height: "100%", borderRadius: 8 }}
                      source={{ uri: photo }}
                    />
                  </View>
                )}
                <View style={styles.photoView}>
                  <TouchableOpacity
                    style={styles.cameraButton}
                    onPress={takePhoto}
                  >
                    <View style={styles.takePhotoOut}>
                      <View>
                        <MaterialIcons
                          name="photo-camera"
                          size={24}
                          color="white"
                          style={styles.takePhoto}
                        />
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              </Camera>
              <Text style={styles.loadText}>
                {photo ? "Редагувати фото" : "Завантажте фото"}
              </Text>
            </View>

            <TextInput
              style={styles.input}
              value={title}
              onChangeText={(text) => setTitle(text)}
              placeholder="Назва..."
            />
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputLocation}
                // value={location ? JSON.stringify(location) : ''}
                // onChangeText={(value) => setLocation(JSON.stringify(value))}
                placeholder="Місцевість..."
                value={place}
                onChangeText={setPlace}
              />
              <SimpleLineIcons
                name="location-pin"
                size={24}
                color="#000"
                style={styles.icon}
              />
            </View>
            <TouchableOpacity
              style={[styles.button, !isFormValid && styles.buttonDisabled]}
              onPress={handlePublish}
              disabled={!isFormValid}
            >
              <Text style={styles.buttonText}>Опублікувати</Text>
            </TouchableOpacity>
          </View>

          {/* <View style={styles.mainContent}> */}
          {/* Список користувачів */}
          {/* Додатковий вміст */}
          {/* </View> */}
          <View style={styles.footer}>
            <TouchableOpacity
              style={[styles.trashIconWraper, !isFormValid && styles.buttonDisabled] }
              onPress={deletePhoto}
            >
              <MaterialCommunityIcons
                name="trash-can-outline"
                size={24}
                color="#000"
                style={styles.trashIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
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
    // borderBottomLeftRadius: 0,
    // borderBottomRightRadius: 0,
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
    position: "absolute",
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
    backgroundColor: "#ccc",
    opacity: 0.5,
  },
  footer: {
    // flex: 1,
    flexDirection: "row",
    height: 60,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
    width: "100%",
  },
  trashIcon: {
    alignItems: "center",
    color: "#fff",
    // backgroundColor: "#FF6C00"
  },
  trashIconWraper: {
    backgroundColor: "#FF6C00",
    opacity: 0.5,
    width: 70,
    height: 40,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  camera: {
    flex: 1,
    // padding: 20,
    marginTop: 32,
    marginRight: 16,
    marginLeft: 16,
    marginBottom: 8,
    borderColor: "#000",
    borderRadius: 25,
    overflow: "hidden",
    // width: "100%",
    // aspectRatio: 1,
  },
  cameraContainer: {
    width: "100%",
    aspectRatio: 1,
  },
  photoView: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "flex-end",
    justifyContent: "center",
    alignItems: "center",
  },

  flipContainer: {
    // flex: 0.1,
    alignSelf: "flex-end",
  },

  cameraButton: { alignSelf: "center", justifyContent: "center" },

  takePhotoOut: {
    // borderWidth: 2,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    // opacity: 0.2,
    borderColor: "white",
    height: 50,
    width: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    position: "relative",
    // flex: 1,
    margin: 20,
  },

  takePhoto: {
    height: 50,
    width: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: -14,
    left: -12,
    color: "white",
  },

  takePhotoContainer: {
    width: "100%",
    height: "100%",
    position: "absolute",
    borderColor: "#FFFFFF",
    borderWidth: 1,
  },

  loadText: {
    fontSize: 16,
    color: "#ccc",
    marginBottom: 48,
    marginLeft: 16,
  },
});
