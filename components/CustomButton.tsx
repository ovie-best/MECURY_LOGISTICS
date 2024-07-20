import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { Link } from "expo-router";

const CustomButton = ({ title }) => {
  return (
    <TouchableOpacity style={styles.btn}>
      <Text style={styles.text}>
        <Link href="/sign-in">{title}</Link>
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontWeight: 700,
  },

  btn: {
    backgroundColor: "#00BD35",
    color: "#fff",
    width: 223,
    height: 38,
    marginTop: 5,
  },
});

// width: Fixed (223px)px;
// height: Fixed (38px)px;
// top: 64px;
// padding: 4px 92px 4px 92px;
// gap: 10px;
// border-radius: 302.44px 0px 0px 0px;
// opacity: 0px;
