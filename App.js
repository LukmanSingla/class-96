import React, { Component } from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
const Tab = createMaterialBottomTabNavigator();
import Dashboard from "./Screens/Dashboard";
import EnterHomework from "./Screens/EnterHomework";
import Ionicons from "react-native-vector-icons/Ionicons";
export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          labeled={false}
          activeColor="blue"
          inactiveColor="gray"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let icon;
              if (route.name == "Dashboard") {
                icon = focused ? "home" : "home-outline";
              } else if (route.name == "EnterHomework") {
                icon = focused ? "book" : "book-outline";
              }
              return <Ionicons name={icon} color={color} size={25}></Ionicons>;
            },
          })}
        >
          <Tab.Screen name="Dashboard" component={Dashboard} />
          <Tab.Screen name="EnterHomework" component={EnterHomework} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
