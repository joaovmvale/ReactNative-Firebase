import React from "react";

import { StatusBar, StyleSheet } from "react-native";

// Bibliotecas de navegacao
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Importando icones e estilizacoes
import { Ionicons } from "@expo/vector-icons";

import Main from "./src/components/Main";
import List from "./src/components/List";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#7e787c" />
      <Tab.Navigator
        initialRouteName="Main"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            switch (route.name) {
              case "Main":
                iconName = "add-circle-outline";
                size = 40;
                break;
              case "List":
                iconName = "list";
                size = 40;
                break;
              default:
                iconName = "help";
                break;
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#ffc17b",
          tabBarInactiveTintColor: "#777",
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#8e3768",
            borderTopWidth: 3,
            borderTopColor: "black",
          },
        })}
      >
        <Tab.Screen name="Main" title="Input" component={Main} />
        <Tab.Screen name="List" component={List} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
