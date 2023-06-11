
import React, { useState } from "react";
import { PlusIcon, User, Grid } from "../assets/svg/svg";
import { useFonts } from "expo-font";
import * as Font from "expo-font";
import * as SplashScreen from 'expo-splash-screen';


function Add () {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
       <PlusIcon width={24} height={24} />
      </View>
    );
  }
  
  function UserProfile() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <User width={24} height={24}/>
      </View>
    );
  }

  function Gallery () {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
       <Grid width={24} height={24}/>
      </View>
    );
  }
  
  const Tabs = createBottomTabNavigator();
  
  const Home = () => {
    return (
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
  
            if (route.name === "Profile") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            } else if (route.name === "Settings") {
              iconName = focused ? "ios-list-box" : "ios-list";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tabs.Screen name="Settings" component={Settings} />
        <Tabs.Screen name="Profile" component={Profile} />
      </Tabs.Navigator>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
  });
  
  export default Home;
  