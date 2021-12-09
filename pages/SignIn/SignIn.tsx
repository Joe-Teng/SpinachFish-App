import React, { useEffect } from "react";
import { ScrollView, View, StyleSheet, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  StatusBarHeight,
  ScreenPaddingHorizontal,
} from "../../utils/theme.config";
import {
  FormLabel,
  FormInput,
  FormItem,
  FormSubmitBtn,
} from "../../components/Form/FormComponent";

interface ISignIn {}

const LOGO = require("../../assets/images/logo.png");

const SignIn: React.FC = (props: ISignIn) => {
  useEffect(() => {
    (async () => {
      const value = await AsyncStorage.getItem("@storage_Key");
      console.log(value);
    })();
  }, []);
  return (
    <ScrollView style={SignInStyles.container}>
      <View style={SignInStyles.Imagecontainer}>
        <Image style={SignInStyles.Image} source={LOGO} />
      </View>
      <View style={SignInStyles.FormContainer}>
        <FormItem>
          <FormLabel label="Account" />
          <FormInput />
        </FormItem>
        <FormItem>
          <FormLabel label="Password" />
          <FormInput type="password" />
        </FormItem>
        <FormSubmitBtn />
      </View>
      {/* <Loading /> */}
    </ScrollView>
  );
};

const SignInStyles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: StatusBarHeight,
    paddingHorizontal: ScreenPaddingHorizontal,
  },
  Imagecontainer: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 24,
  },
  Image: {
    width: 80,
    height: 80,
  },
  FormContainer: {},
});

export default SignIn;
