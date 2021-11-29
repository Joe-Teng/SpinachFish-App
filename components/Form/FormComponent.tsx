import React, { Children, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import {
  customizeFont,
  FontColor,
  FontM,
  InputHeight,
  InputBorderRadius,
  InputPaddingHorizontal,
  InputErrorColor,
  ThemeBgColor,
  InputSignInBtnHeight,
  InputSignInBtnBorderRadius,
  InputBtnFontStyle,
  InputSpacing,
} from "../../theme.config";
import LinearGradinet from "react-native-linear-gradient";

interface IformLabel {
  label?: string;
}
const FormLabel: React.FC<IformLabel> = (props) => {
  const { label = "Label" } = props;
  return (
    <View style={FormStyles.FormLabelContainerStyels}>
      <Text style={FormStyles.FormLabelStyels}>{label}</Text>
    </View>
  );
};

interface IFormInput {
  placeholder?: string;
  validate?: boolean;
  errorMessage?: string;
}
const FormInput: React.FC<IFormInput> = (props) => {
  const [onFocus, setOnFocus] = useState(false);
  const {
    placeholder = "Please enter",
    errorMessage = "error message",
    validate = true,
  } = props;
  return (
    <View>
      <TextInput
        style={Object.assign({}, FormStyles.FormInputStyles, {
          borderWidth: onFocus ? 2 : 1,
        })}
        placeholder={placeholder}
        onFocus={() => {
          setOnFocus(true);
        }}
        onBlur={() => {
          setOnFocus(false);
        }}
        secureTextEntry={true}
      />
      {validate && errorMessage && (
        <View style={FormStyles.FormErrorStyels}>
          <Text>{errorMessage}</Text>
        </View>
      )}
    </View>
  );
};

const FormItem: React.FC = (props) => {
  return <View style={FormStyles.FormItemStyles}>{props?.children}</View>;
};

interface IFormSignInBtn {
  title?: string;
}
const FormSignInBtn: React.FC<IFormSignInBtn> = (props) => {
  const { title = `SIGN   IN` } = props;
  return (
    <LinearGradinet
      colors={ThemeBgColor}
      style={FormStyles.FormSignInBtnStyles}
    >
      <TouchableOpacity activeOpacity={0.8}>
        <Text style={FormStyles.FormSignInBtnFontStyles}>{title}</Text>
      </TouchableOpacity>
    </LinearGradinet>
  );
};

const FormStyles = StyleSheet.create({
  FormLabelContainerStyels: {
    paddingLeft: FontM,
    marginBottom: 4,
  },
  FormLabelStyels: {
    fontSize: customizeFont(14),
    lineHeight: customizeFont(18),
    color: FontColor,
  },
  FormInputStyles: {
    borderWidth: 1,
    borderColor: `linear`,
    height: InputHeight,
    borderRadius: InputBorderRadius,
    paddingHorizontal: InputPaddingHorizontal,
  },
  FormErrorStyels: {
    paddingLeft: FontM,
    marginTop: 4,
  },
  FormItemStyles: {
    marginBottom: InputSpacing,
  },
  FormSignInBtnStyles: {
    flex: 1,
    height: InputSignInBtnHeight,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: InputSignInBtnBorderRadius,
  },
  FormSignInBtnFontStyles: {
    color: InputBtnFontStyle,
  },
});

export { FormLabel, FormInput, FormSignInBtn, FormItem };
