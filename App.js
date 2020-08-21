import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform, StatusBar } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import History from './components/History';
import AddEntry from './components/AddEntry';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { purple, white, gray } from './utils/colors';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import EntryDetail from './components/EntryDetail';
import Live from './components/Live';

const store = createStore(reducer);

const UdaciStatusBar = ({ backgroundColor, ...props }) => {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
};

const Tab = createMaterialBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showIcon: true,
        shifting: true,
        navigationOptions: {
          header: null,
        },
      }}
      activeColor={Platform.OS === 'ios' ? purple : white}
      inactiveColor={gray}
      barStyle={{
        backgroundColor: Platform.OS === 'ios' ? white : purple,
        shadowColor: 'rgba(0,0,0,0.24)',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowRadius: 6,
        shadowOpacity: 1,
      }}
    >
      <Tab.Screen
        name='History'
        component={History}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name='ios-bookmarks' size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Add Entry'
        component={AddEntry}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name='plus-square' size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Live'
        component={Live}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name='ios-speedometer' size={26} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Tabs} />
        <Stack.Screen
          name='EntryDetail'
          component={EntryDetail}
          options={{
            headerTintColor: white,
            headerStyle: {
              backgroundColor: purple,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <UdaciStatusBar backgroundColor={purple} barStyle='light-content' />
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 25,
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 200,
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: '#757575',
    margin: 50,
  },
  img: {
    width: 100,
    height: 100,
    margin: 50,
  },
});

// state = {
//   value: 0,
//   input: '@tylermcginnis',
//   showInput: false,
// };

// handlePress = () => {
//   alert('Hello!');
// };

// handleToggleSwitch = () => {
//   this.setState((state) => ({
//     showInput: !state.showInput,
//   }));
// };

// handleTextChange = (input) => {
//   this.setState(() => ({
//     input,
//   }));
// };

{
  /* <KeyboardAvoidingView behavior='padding' style={styles.container}> */
}
{
  /* <Image
  // If the file is locally
  // source={require('./img.png')}
  source={{
    uri:
      'https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293__340.jpg',
  }}
  style={styles.img}
/> */
}

{
  /* <TouchableHighlight
  style={styles.btn}
  onPress={this.handlePress}
  underlayColor='#d4271b'
>
  <Text style={styles.btnText}>TouchableHighlight</Text>
</TouchableHighlight> */
}
{
  /* <TouchableOpacity style={styles.btn} onPress={this.handlePress}>
  <Text style={styles.btnText}>TouchableHighlight</Text>
</TouchableOpacity> */
}
{
  /* <TouchableWithoutFeedback onPress={this.handlePress}>
  <View style={styles.btn}>
    <Text style={styles.btnText}>TouchableHighlight</Text>
  </View>
</TouchableWithoutFeedback> */
}

{
  /* TouchableNativeFeedback only works on android */
}
{
  /* <TouchableNativeFeedback
  background={TouchableNativeFeedback.SelectableBackground()}
  onPress={this.handlePress}
>
  <View style={styles.btn}>
    <Text style={styles.btnText}>TouchableHighlight</Text>
  </View>
</TouchableNativeFeedback> */
}

{
  /* Slider component */
}
{
  /* <Slider
  minimumValue={-10}
  maximumValue={10}
  step={1}
  value={this.state.value}
  onValueChange={(value) => this.setState(() => ({ value }))}
/>
<Text>Value: {this.state.value}</Text> */
}

{
  /* <Switch value={showInput} onValueChange={this.handleToggleSwitch} />
{showInput === true && (
  <TextInput
    value={input}
    style={styles.input}
    onChange={this.handleTextChange}
  />
)} */
}

{
  /* <AddEntry />
</KeyboardAvoidingView> */
}
