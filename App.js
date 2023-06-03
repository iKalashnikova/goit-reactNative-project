// import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, View, Image } from 'react-native';
import { RegistrationScreen } from './src/screens/RegistrationScreen';
import { useFonts } from 'expo-font';
import * as Font from 'expo-font';


export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Bold': require('./src/assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Regular': require('./src/assets/fonts/Roboto-Regular.ttf')
  })

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("./src/assets/images/PhotoBG.png")}
        style={styles.backgroundImage}
      />
      <RegistrationScreen/>
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
  // height: Platform.OS === 'ios' ? 50 : 100
});

// Font.loadAsync({
//   'Roboto-Bold': require('./src/assets/fonts/Roboto-Bold.ttf'),
//   'Roboto-Regular': require('./src/assets/fonts/Roboto-Regular.ttf')
// });