import React from "react";
import MapView from "react-native-maps";

const markers = [
  {
    latitude: 12.96216,
    longitude: 77.720916,
    title: "Mohansagar",
    subtitle: "location"
  }
];

class Maps extends React.Component {
  render() {
    return (
      <MapView
        initialRegion={{
          latitude: 12.96216,
          longitude: 77.720916,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        annotations={markers}
        style={{ flex: 1 }}
      />
    );
  }
}

export default Maps;
