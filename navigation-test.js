import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Text>Dashboard</Text>
    </View>
  );
};

const Tabs = createMaterialTopTabNavigator();

const MyTabs = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        tabBarOptions={{
          showIcon: true,
        }}
      >
        <Tabs.Screen
          name='Home'
          component={Home}
          options={{
            tabBarIcon: (tabInfo) => (
              <FontAwesome name='home' size={18} color={'black'} />
            ),
          }}
        />
        <Tabs.Screen
          name='Dashboard'
          component={Dashboard}
          options={{
            tabBarIcon: (tabInfo) => (
              <FontAwesome name='dashboard' size={18} color={'black'} />
            ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default class App extends Component {
  render() {
    return <MyTabs />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'blue',
  },
});
