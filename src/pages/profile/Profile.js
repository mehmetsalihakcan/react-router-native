
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomButton from '../../components/CustomButton'
import {useHistory} from 'react-router-native'
import CustomText from "../../components/CustomText";
const Profile = () => {
    const history = useHistory();
  return (
    <View>
        <CustomText text="Profile Page" />
      <CustomButton onPress={()=>history.goBack()} title="Go Back" />
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

export default Profile
