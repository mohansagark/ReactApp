import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

import * as Progress from "react-native-progress";

const SkillProgress = props => {
  return (
    <View style={styles.skillProgress}>
      <Progress.Bar progress={1} width={props.rating * 230} color={"green"} />
    </View>
  );
};

const styles = StyleSheet.create({
  skillProgress: { padding: 5, marginLeft: 20 }
});

export default SkillProgress;
