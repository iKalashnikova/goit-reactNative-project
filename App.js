// import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, View, Image } from 'react-native';
import { RegistrationScreen } from './src/screens/RegistrationScreen';
import {LoginScreen} from './src/screens/LoginScreen'


export default function App() {

  return (
    <View style={styles.container}>
      <Image
        source={require("./src/assets/images/PhotoBG.png")}
        style={styles.backgroundImage}
      />
      {/* <RegistrationScreen/> */}
      <LoginScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
 
  backgroundImage: {
    flex: 1,
    // resizeMode: "cover",
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    alignItems: 'center',
    position: "relative"
  },
});
