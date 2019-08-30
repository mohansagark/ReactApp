import React, { Component } from "react";
import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";

import SocialProfile from "../components/SocialProfile";
import Skills from "../components/Skills";
import { TouchableOpacity } from "react-native-gesture-handler";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigate } = this.props.navigation;
    const image =
      "https://lh3.googleusercontent.com/lX5GiRb-cDwqL87UxhTLbIDu0xKSYPftYq4ir19AXNGNjtUMIouIB6lnLghYbO6vpA3-_EFRMxMQAZhtPIHRJjkz";
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.heading}>
          <TouchableOpacity
            onPress={() => navigate("ImageViewer", { image: image })}
          >
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: "center",
                borderRadius: 50
                // borderWidth: 1,
                // borderColor: "#c9c0bf"
              }}
              source={{
                uri: image
              }}
            />
          </TouchableOpacity>
          <View style={styles.textStyle}>
            <Text style={styles.name}>Mohansagar Killamsetty</Text>
            <Text style={{ fontSize: 16 }}>Software Engineer</Text>
            <TouchableOpacity
              style={styles.mapExtension}
              onPress={() => navigate("Maps")}
            >
              <Text style={{ fontStyle: "italic", color: "#088cff" }}>
                Bangalore
              </Text>
              <Image
                style={styles.mapExtensionPick}
                source={require("../assets/maps_extension.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View />
        <Skills />
        <SocialProfile navigation={this.props.navigation} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingTop: 20
  },
  heading: {
    justifyContent: "flex-start",
    marginTop: 30,
    marginLeft: 20,
    marginBottom: 30,
    flexDirection: "row"
  },
  name: {
    fontWeight: "bold",
    fontSize: 16
  },
  textStyle: {
    padding: 10,
    marginLeft: 20,
    justifyContent: "space-between"
  },
  mapExtension: {
    flexDirection: "row"
  },
  mapExtensionPick: {
    width: 7,
    height: 7,
    marginTop: 5
  }
});

export default Profile;
