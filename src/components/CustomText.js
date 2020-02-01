import React from "react";
import { Text, StyleSheet } from "react-native";

const CustomText = props => {
  return <Text style={styles.text}>{props.text} </Text>;
};
const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: "bold",
    justifyContent:'center',
    alignItems:'center'
    
  }
});

export default CustomText;
