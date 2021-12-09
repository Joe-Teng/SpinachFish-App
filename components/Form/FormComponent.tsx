import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Animated,
} from "react-native";
import {
  customizeFont,
  FontColor,
  FontS,
  FontM,
  InputHeight,
  InputBorderRadius,
  InputPaddingHorizontal,
  ButtonActiveOpacity,
  ThemeBgColor,
  InputSignInBtnHeight,
  InputSignInBtnBorderRadius,
  InputBtnFontStyle,
  InputSpacing,
  ScreenWidth,
  ScreenPaddingHorizontal,
  ButtonCircleWidth,
} from "../../utils/theme.config";
import LinearGradinet from "react-native-linear-gradient";
import IconFormEye from "./IconFormEye";

const MAX_BTN_WIDTH = ScreenWidth - ScreenPaddingHorizontal * 2;

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
  type?: string;
}
const FormInput: React.FC<IFormInput> = (props) => {
  const {
    placeholder = "Please enter",
    errorMessage = "error message",
    validate = true,
    type = "text",
  } = props;
  const [onFocus, setOnFocus] = useState<boolean>(false);
  const [showPlainText, setShowPlainText] = useState<boolean>(
    props.type !== "password"
  );
  return (
    <View>
      <View style={{ position: "relative" }}>
        <TextInput
          style={Object.assign({}, FormStyles.FormInputStyles, {
            borderWidth: onFocus ? 2 : 1,
            paddingRight: !showPlainText
              ? InputPaddingHorizontal * 2 + 12
              : InputPaddingHorizontal,
          })}
          placeholder={placeholder}
          onFocus={() => {
            setOnFocus(true);
          }}
          onBlur={() => {
            setOnFocus(false);
          }}
          secureTextEntry={!showPlainText}
        />
        {type === "password" && (
          <TouchableOpacity
            activeOpacity={1}
            style={FormStyles.InputSuffixStyles}
            onPressIn={() => {
              setShowPlainText(true);
            }}
            onPressOut={() => {
              setShowPlainText(false);
            }}
          >
            <IconFormEye />
          </TouchableOpacity>
        )}
      </View>
      {!validate && errorMessage && (
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

interface IFormSubmitBtn {
  title?: string;
  onPress?: () => void;
}
const FormSubmitBtn: React.FC<IFormSubmitBtn> = (props) => {
  const { title = "Sign  In", onPress = () => {} } = props;
  const [btnValue, setBtnValue] = useState<string>(title);
  const [isLoading, setLoading] = useState<boolean>(false);
  const fadeAnim = useRef(new Animated.Value(MAX_BTN_WIDTH)).current;
  const fadeBtnValueOpacity = useRef(new Animated.Value(1)).current;
  const FadeInView = (props: any) => {
    return (
      <Animated.View
        style={{
          width: fadeAnim,
        }}
      >
        {props.children}
      </Animated.View>
    );
  };

  const startAnimation = (value: any) => {
    return () => {
      Animated.timing(fadeAnim, {
        toValue: value,
        duration: 600,
        useNativeDriver: false,
      }).start(() => {});
    };
  };
  const handleSubmit = () => {
    setBtnValue("laoding");
    setLoading(true);
    startAnimation(52)();

    setTimeout(() => {
      startAnimation(MAX_BTN_WIDTH)();
    }, 2000);
  };

  return (
    <View style={FormStyles.SubmitBtnContainer}>
      <FadeInView>
        <LinearGradinet
          colors={ThemeBgColor}
          style={FormStyles.FormSignInBtnStyles}
        >
          <TouchableOpacity
            activeOpacity={ButtonActiveOpacity}
            style={FormStyles.FormSignInBtnTouchableStyles}
            onPress={() => {
              handleSubmit();
            }}
          >
            <Text style={FormStyles.FormSignInBtnFontStyles}>{btnValue}</Text>
          </TouchableOpacity>
        </LinearGradinet>
      </FadeInView>
    </View>
  );
};

const FormStyles = StyleSheet.create({
  FormLabelContainerStyels: {
    paddingLeft: FontM,
    marginBottom: 4,
  },
  FormLabelStyels: {
    fontSize: customizeFont(FontS),
    lineHeight: customizeFont(FontM),
    color: FontColor,
  },
  FormInputStyles: {
    borderWidth: 1,
    height: InputHeight,
    borderRadius: InputBorderRadius,
    paddingHorizontal: InputPaddingHorizontal,
  },
  InputSuffixStyles: {
    position: "absolute",
    top: 14,
    right: 12,
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
    justifyContent: "center",
    borderRadius: InputSignInBtnBorderRadius,
  },
  FormSignInBtnFontStyles: {
    color: InputBtnFontStyle,
  },
  SubmitBtnContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  FormSignInBtnTouchableStyles: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export { FormLabel, FormInput, FormItem, FormSubmitBtn };
