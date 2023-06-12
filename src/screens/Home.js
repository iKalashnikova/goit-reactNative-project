import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { PostScreen } from "./PostsScreen";
import { CreatePostsScreen } from "./CreatePostsScreen";
import { ProfileScreen } from "./ProfileScreen";
import { useRoute } from "@react-navigation/native";


const Tabs = createBottomTabNavigator();

const Home = () => {
  
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: route.name === 'Create' ? { display: 'none' } : {},
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Create') {
            iconName = 'add-outline';
          } else if (route.name === 'Posts') {
            iconName = 'grid-outline';
          } else if (route.name === 'Profile') {
            iconName = 'person-outline';
          }

          return (
            <View
              style={[
                styles.iconContainer,
                focused && styles.activeIconContainer,
              ]}
            >
              <Ionicons name={iconName} size={size} color={focused ? styles.activeIcon.color : styles.inactiveIcon.color} />
            </View>
          );
        },
      })}
   
    >
      <Tabs.Screen
        name="Posts"
        options={{
          tabBarLabel: () => null,
        }}
        component={PostScreen}
      />
      <Tabs.Screen
        name="Create"
        options={{
          tabBarLabel: () => null,
        }}
        component={CreatePostsScreen}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarLabel: () => null,
        }}
        component={ProfileScreen}
      />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
    iconContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    activeIconContainer: {
      backgroundColor: '#FF6C00',
      width: 70,
      height: 40,
      borderRadius: 50,
    },
    inactiveIcon: {
        color: 'gray',
      },
      activeIcon: {
        color: 'white',
      },
  });

export default Home;
