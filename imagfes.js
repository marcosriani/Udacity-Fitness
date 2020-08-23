import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import ImageEditor from '@react-native-community/image-editor';
import * as ImagePicker from 'expo-image-picker';

class App extends Component {
  state = {
    image: null,
  };

  pickImage = () => {
    ImagePicker.launchImageLibraryAsync({
      allowEditing: true,
      aspect: [2, 1],
    }).then((result) => {
      if (result.cancelled) {
        return;
      }

      ImageEditor.cropImage(
        result.uri,
        {
          offset: { x: 0, y: 0 },
          size: { width: result.width, height: result.height },
          displaySize: { width: 200, height: 100 },
          resizeMode: 'contain',
        },
        (uri) => {
          this.setState(() => ({ image: uri }));
        },
        () => {
          console.log('Error');
        }
      );
    });
  };

  render() {
    const { image } = this.state;

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this.pickImage}>
          <Text>Open Camera Roll</Text>
        </TouchableOpacity>

        {image && <Image style={styles.image} source={{ uri: image }} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(21, 212, 242)',
  },
  img: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    backgroundColor: 'black',
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 50,
    color: 'red',
  },
});

export default App;
