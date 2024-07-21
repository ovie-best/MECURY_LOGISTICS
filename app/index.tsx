import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import CustomButton from "@/components/CustomButton";

const Index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <ImageBackground
          source={require("../assets/images/Rider-1.jpeg")}
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
        >
          <View style={styles.overlayView}>
            <Image
              style={styles.logo}
              source={require("../assets/images/logo.png")}
              resizeMode="contain"
            />
            <Text style={styles.text}>..the home of logistics</Text>
            <CustomButton title="Sign-In" />
          </View>
        </ImageBackground>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
  },

  overlayView: {
    height: "100%",
    width: "100%",
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    width: "70%",
    marginTop: 0,
    marginBottom: 0,
    marginLeft: "auto",
    marginRight: "auto",
  },

  text: {
    color: "#fff",
    opacity: 0.55,
    marginTop: -20,
    fontWeight: 700,
  },

  btn: {
    backgroundColor: "#00BD35",
    color: "#fff",
    width: 223,
    height: 38,
    opacity: 0,
  },
});

// width: Fixed (223px)px;
// height: Fixed (38px)px;
// top: 64px;
// padding: 4px 92px 4px 92px;
// gap: 10px;
// border-radius: 302.44px 0px 0px 0px;
// opacity: 0px;
