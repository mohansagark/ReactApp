import React, { Component } from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking
} from "react-native";

// let Links = [
//     { facebook: "HTML"},
//     { name: "CSS", rating: 0.6 },
//     { name: "Java", rating: 0.4 },
//     { name: "Java Script", rating: 0.5 }
//   ];

class SocialProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.spHeading}>Social Profile</Text>
        <View style={styles.spContainer}>
          <TouchableOpacity
            onPress={() =>
              navigate("SPWebview", {
                link: "https://www.facebook.com/killamsetty.mohansagar"
              })
            }
          >
            <Image
              style={styles.spIcon}
              source={require("../assets/sp-facebook.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigate("SPWebview", {
                link: "https://github.com/mohansagark"
              })
            }
          >
            <Image
              style={styles.spIcon}
              source={require("../assets/sp-github.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigate("SPWebview", {
                link: "https://www.linkedin.com/in/mohansagark/"
              })
            }
          >
            <Image
              style={styles.spIcon}
              source={require("../assets/sp-linkedin.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(
                "mailto:mohansgr3@gmail.com?subject=Shortlisted through portfolio&body=Welcome onboard"
              );
            }}
          >
            <Image
              style={styles.spIcon}
              source={require("../assets/sp-mail.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

// rgba(212, 206, 206, 1)

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },
  spIcon: {
    width: 30,
    height: 30
  },
  spHeading: {
    fontWeight: "bold",
    alignSelf: "center",
    color: "#87857f"
  },
  spContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 30,
    paddingLeft: 40,
    paddingRight: 40
  }
});

export default SocialProfile;
