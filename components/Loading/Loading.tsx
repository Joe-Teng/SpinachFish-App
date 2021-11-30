import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";

const Loading = () => {
  const fadeAnim1 = useRef(new Animated.Value(1)).current;
  const fadeAnim2 = useRef(new Animated.Value(1)).current;
  const fadeAnim3 = useRef(new Animated.Value(1)).current;
  const fadeAnim4 = useRef(new Animated.Value(1)).current;
  const fadeAnim5 = useRef(new Animated.Value(1)).current;
  const fadeAnim6 = useRef(new Animated.Value(1)).current;
  const fadeAnim7 = useRef(new Animated.Value(1)).current;
  const fadeAnim8 = useRef(new Animated.Value(1)).current;

  const FadeInView = (props) => {
    return (
      <Animated.View
        style={{
          opacity: props?.animatedData,
        }}
      >
        {props.children}
      </Animated.View>
    );
  };

  useEffect(() => {
    Animated.timing(fadeAnim1, {
      toValue: 0.1,
      duration: 1400,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(fadeAnim1, {
        toValue: 1,
        duration: 700,
        useNativeDriver: false,
      }).start();
    });
    setTimeout(() => {
      Animated.timing(fadeAnim2, {
        toValue: 0.1,
        duration: 1000,
        useNativeDriver: false,
      }).start(() => {
        Animated.timing(fadeAnim2, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }).start();
      });
    }, 300);
    setTimeout(() => {
      Animated.timing(fadeAnim3, {
        toValue: 0.1,
        duration: 1000,
        useNativeDriver: false,
      }).start(() => {
        Animated.timing(fadeAnim3, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }).start(() => {});
      });
    }, 600);
    setTimeout(() => {
      Animated.timing(fadeAnim4, {
        toValue: 0.1,
        duration: 1000,
        useNativeDriver: false,
      }).start(() => {
        Animated.timing(fadeAnim4, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }).start(() => {});
      });
    }, 900);
    setTimeout(() => {
      Animated.timing(fadeAnim5, {
        toValue: 0.1,
        duration: 1000,
        useNativeDriver: false,
      }).start(() => {
        Animated.timing(fadeAnim5, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }).start(() => {});
      });
    }, 1200);
    setTimeout(() => {
      Animated.timing(fadeAnim6, {
        toValue: 0.1,
        duration: 1000,
        useNativeDriver: false,
      }).start(() => {
        Animated.timing(fadeAnim6, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }).start(() => {});
      });
    }, 1500);
    setTimeout(() => {
      Animated.timing(fadeAnim7, {
        toValue: 0.1,
        duration: 1000,
        useNativeDriver: false,
      }).start(() => {
        Animated.timing(fadeAnim7, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }).start(() => {});
      });
    }, 1800);
    setTimeout(() => {
      Animated.timing(fadeAnim8, {
        toValue: 0.1,
        duration: 1000,
        useNativeDriver: false,
      }).start(() => {
        Animated.timing(fadeAnim8, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }).start(() => {});
      });
    }, 2100);
  }, [fadeAnim1]);

  return (
    <View style={LoadingStyles.LoadingContainer}>
      <View style={LoadingStyles.LoadingBox}>
        <FadeInView animatedData={fadeAnim1}>
          <View style={LoadingStyles.LoadingItem1}></View>
        </FadeInView>
        <FadeInView animatedData={fadeAnim2}>
          <View style={LoadingStyles.LoadingItem3}></View>
        </FadeInView>
        <FadeInView animatedData={fadeAnim3}>
          <View style={LoadingStyles.LoadingItem4}></View>
        </FadeInView>
        <FadeInView animatedData={fadeAnim4}>
          <View style={LoadingStyles.LoadingItem5}></View>
        </FadeInView>
        <FadeInView animatedData={fadeAnim5}>
          <View style={LoadingStyles.LoadingItem2}></View>
        </FadeInView>
        <FadeInView animatedData={fadeAnim6}>
          <View style={LoadingStyles.LoadingItem7}></View>
        </FadeInView>
        <FadeInView animatedData={fadeAnim7}>
          <View style={LoadingStyles.LoadingItem8}></View>
        </FadeInView>
        <FadeInView animatedData={fadeAnim8}>
          <View style={LoadingStyles.LoadingItem6}></View>
        </FadeInView>
      </View>
    </View>
  );
};

const LoadingStyles = StyleSheet.create({
  LoadingContainer: {
    alignItems: "center",
  },
  LoadingBox: {
    flex: 1,
    width: 40,
    height: 40,
    borderRadius: 20,
    position: "relative",
  },
  LoadingItem1: {
    width: 4,
    height: 14,
    backgroundColor: "blue",
    position: "absolute",
    left: 18,
    borderRadius: 2,
  },
  LoadingItem2: {
    width: 4,
    height: 14,
    backgroundColor: "blue",
    position: "absolute",
    left: 18,
    top: 26,
    borderRadius: 2,
  },
  LoadingItem3: {
    width: 4,
    height: 14,
    backgroundColor: "blue",
    position: "absolute",
    left: 27,
    top: 4,
    transform: [{ rotateZ: "45deg" }],
    borderRadius: 2,
  },
  LoadingItem4: {
    width: 4,
    height: 14,
    backgroundColor: "blue",
    position: "absolute",
    left: 30,
    top: 13,
    transform: [{ rotateZ: "90deg" }],
    borderRadius: 2,
  },
  LoadingItem5: {
    width: 4,
    height: 14,
    backgroundColor: "blue",
    position: "absolute",
    left: 27,
    top: 22,
    transform: [{ rotateZ: "135deg" }],
    borderRadius: 2,
  },
  LoadingItem6: {
    width: 4,
    height: 14,
    backgroundColor: "blue",
    position: "absolute",
    left: 9,
    top: 4,
    transform: [{ rotateZ: "-45deg" }],
    borderRadius: 2,
  },
  LoadingItem7: {
    width: 4,
    height: 14,
    backgroundColor: "blue",
    position: "absolute",
    left: 10,
    top: 22,
    transform: [{ rotateZ: "-135deg" }],
    borderRadius: 2,
  },
  LoadingItem8: {
    width: 4,
    height: 14,
    backgroundColor: "blue",
    position: "absolute",
    left: 6,
    top: 13,
    transform: [{ rotateZ: "90deg" }],
    borderRadius: 2,
  },
});

export default Loading;
