import { StyleSheet, Text, View } from "react-native";
import { Overlay } from "react-native-elements";
import React from "react";
import { ActivityIndicator } from "react-native";

export default function Loading(props) {
  const { isVisible, text } = props;
  //Overlay es la capa oscura
  //ActivityIndicator el gif loading
  return (
    <Overlay 
    isVisible = {isVisible}
    windowBackgroundColor = "rgba(0,0,0,0.5)"
    overlayBackgroundColor = "transparent"
    overlayStyle = {styles.overlay}
    >
        <View style={styles.view}>
            <ActivityIndicator
                size={"large"}
                color= "#dedede"
            />
            {text && <Text style={styles.text}>{text}</Text>}
        </View>
    </Overlay>
  );
}

const styles = StyleSheet.create({
    overlay:{
        height:100,
        width:200,
        backgroundColor:"#fff",
        borderColor: "#fcb823",
        borderWidth: 3,
        borderRadius: 10
    },
    view:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    text:{
        color: "#5d5e60",
        textTransform: "uppercase",
        marginTop: 10
    }

});
