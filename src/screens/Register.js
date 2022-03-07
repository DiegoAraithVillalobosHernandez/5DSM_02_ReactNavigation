import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React, { useRef } from "react";
import FormRegister from "../components/account/FormRegister";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Toast from "react-native-easy-toast";

export default function Register() {
  const toastRef = useRef();
  //console.log(toastRef)
  return (
    <KeyboardAwareScrollView>
      <Image
        style={styles.logo}
        resizeMode="contain"
        source={require("../assets/logo_utez.png")}
      />
      <View style={styles.viewForm}>
        <FormRegister toastRef={toastRef} />
      </View>
      <Toast ref={toastRef} position="center" opacity={0.8}/>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 100,
    width: 200,
    alignSelf: "center",
  },
  viewForm: {
    marginHorizontal: 40,
  },
});
