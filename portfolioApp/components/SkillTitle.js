import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SkillTitle = props => {
  return (
    <View style={{ width: 100 }}>
      <Text numberOfLines={1} style={[styles.skillTitle]}>
        {props.children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  skillTitle: { fontWeight: "bold", marginLeft: 10 }
});

export default SkillTitle;
