import React, { Component } from "react";
import { SafeAreaView, Button, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

class Home extends Component {
  static navigationOptions = {
    title: "Portfolio"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          onPress={() => navigate("Profile", { name: "Webview" })}
        >
          <Image
            source={require("../assets/portfolio.png")}
            style={styles.launchPortfolio}
          />
        </TouchableOpacity>

        <Button
          title="Mohansagar's Profile"
          onPress={() => navigate("Profile", { name: "MohansagarProfile" })}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  launchPortfolio: {
    width: 100,
    height: 100,
    marginBottom: 10
  }
});

export default Home;
