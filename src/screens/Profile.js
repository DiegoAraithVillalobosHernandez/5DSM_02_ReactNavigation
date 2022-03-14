import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState, useRef } from "react";
import { Button } from "react-native-elements";
import * as firebase from "firebase";
import { useNavigation } from "@react-navigation/native";
import UserInfo from "../components/account/UserInfo";
import UserOptions from "../components/account/UserOptions";
import Toast from "react-native-easy-toast";

export default function Profile() {
  const toastRef = useRef();
  const navigation = useNavigation();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    (async () =>{
      const user = firebase.auth().currentUser;
      setUserInfo(user)
    })()
  }, [])

  //Es como un if ternario
  //{variableEvaluar && true}
  return (
    <View style={styles.userInfo}>
      {userInfo && <UserInfo userInfo={userInfo} toastRef={toastRef}/>}
      <UserOptions/>
      <Button
        title={"Cerrar sesión"}
        buttonStyle={styles.btnCloseSesion}
        titleStyle={styles.btnTitle}
        onPress={() => {
          firebase.auth().signOut();
          navigation.navigate("index");
        }}
      />
      <Toast 
      ref={toastRef} 
      position= "center"
      opacity={0.8}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  userInfo: {
    minHeight: "100%",
    backgroundColor: "#f2f2f2",
  },
  btnCloseSesion: {
    marginTop: 30,
    borderRadius: 1,
    backgroundColor: "#fcb823",
    borderTopWidth: 1,
    borderTopColor: "#e3e3e3",
    borderBottomWidth: 1,
    borderBottomColor: "#e3e3e3",
    paddingHorizontal: 10,
  },
  btnTitle: {
    color: "#fff",
  },
});
