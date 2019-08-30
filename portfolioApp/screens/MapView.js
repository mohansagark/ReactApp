import React, { Component } from "react";
import { View } from "react-native";
import { WebView } from "react-native-webview";

class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const link =
      "https://www.google.com/maps/place/Prism+Sovereign+Apartments,+12th+Cross,+4th+Main,+BEML+Layout+Ext,+Tigalarpalya,+Brookefield,+Bengaluru,+Karnataka+560066/@12.9561078,77.6922625,14.52z/data=!4m5!3m4!1s0x3bae1222cc7f8567:0x18b8c9fe8bc7423e!8m2!3d12.9622325!4d77.7207506";
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

export default MapView;
