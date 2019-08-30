import React, { Component } from "react";
import { View, Text } from "react-native";
import { WebView } from "react-native-webview";
import content from "../a";

class SPWebview extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const link = this.props.navigation.getParam("link", "");
    return (
      <View style={{ flex: 1 }}>
        {link !== "" ? (
          <WebView source={{ uri: link }} />
        ) : (
          <WebView originWhitelist={["*"]} source={{ html: content }} />
        )}
      </View>
    );
  }
}

export default SPWebview;
