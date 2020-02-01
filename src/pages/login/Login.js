import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../../components/CustomButton";
import { useHistory } from "react-router-native";
import CustomText from "../../components/CustomText";

const Login = () => {
  const history = useHistory();

  const navigateHandler = navigation => {
    history.push(navigation);
  };
  return (
    <View style={styles.container}>
      <CustomText text="Login Page" />
      <CustomButton
        onPress={() => navigateHandler("signin")}
        title="Go SignIn"
      />
      <CustomButton onPress={() => navigateHandler("login")} title="Go Login" />
      <CustomButton
        onPress={() => navigateHandler("profile")}
        title="Go Profile"
      />
      <CustomButton
        onPress={() => navigateHandler("dashboard")}
        title="Go Dashboard"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Login;
