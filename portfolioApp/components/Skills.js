import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import SkillTitle from "./SkillTitle";
import SkillProgress from "./SkillProgress";

let SkillSet = [
  { name: "HTML", rating: 0.7 },
  { name: "CSS", rating: 0.6 },
  { name: "Java", rating: 0.4 },
  { name: "Java Script", rating: 0.5 },
  { name: "React native", rating: 0.7 }
];

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const elements = [];
    for (let element of SkillSet) {
      elements.push(
        <View key={element.name} style={styles.skillItem}>
          <SkillTitle>{element.name}</SkillTitle>
          <SkillProgress style={{}} rating={element.rating} />
        </View>
      );
    }
    return (
      <View style={{}}>
        <Text style={styles.skillHeading}> Skills </Text>
        <View style={styles.skillContainer}>{elements}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },
  skillItem: {
    flexDirection: "row",
    marginBottom: 10
  },
  skillHeading: {
    fontWeight: "bold",
    alignSelf: "center",
    color: "#87857f"
  },
  skillContainer: {
    margin: 10,
    paddingLeft: 20,
    paddingRight: 20
  }
});

export default Skills;
