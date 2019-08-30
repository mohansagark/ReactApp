import React, { Component } from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";

class ImageViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const screenWidth = Math.round(Dimensions.get("window").width);
    const image = this.props.navigation.getParam("image", "");
    return (
      <View>
        <Image source={{ uri: image }} style={styles.imageContainer}></Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    width: 375,
    height: 375,
    marginTop: 150
  }
});

export default ImageViewer;
