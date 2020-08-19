import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AddEntry from './components/AddEntry';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import History from './components/History';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const store = createStore(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <View style={{ height: 20 }} />
          <History />
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
