import React from "react";
import {
  ScrollView,
  View,
  Text,
  Button,
  StyleSheet,
  Image,
} from "react-native";
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
import Loading from "../../components/Loading";

interface ISignIn {}

const LOGO = require("../../assets/images/logo.png");

const SignIn: React.FC = (props: ISignIn) => {
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
          <FormInput />
        </FormItem>
        <FormSubmitBtn />
      </View>
      <Loading />
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
