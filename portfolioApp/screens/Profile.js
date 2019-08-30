import React, { Component } from "react";
import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";

import SocialProfile from "../components/SocialProfile";
import Skills from "../components/Skills";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.heading}>
          <Image
            style={{
              width: 100,
              height: 100,
              resizeMode: "center",
              borderRadius: 50,
              borderWidth: 1,
              borderColor: "#c9c0bf"
            }}
            source={{
              uri:
                "https://lh3.googleusercontent.com/lX5GiRb-cDwqL87UxhTLbIDu0xKSYPftYq4ir19AXNGNjtUMIouIB6lnLghYbO6vpA3-_EFRMxMQAZhtPIHRJjkz"
            }}
          />
          <View style={styles.textStyle}>
            <Text style={styles.name}>Mohansagar Killamsetty</Text>
            <Text style={{ fontSize: 16 }}>Software Engineer</Text>
            <Text style={{ fontStyle: "italic" }}>Bangalore</Text>
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
  }
});

export default Profile;
