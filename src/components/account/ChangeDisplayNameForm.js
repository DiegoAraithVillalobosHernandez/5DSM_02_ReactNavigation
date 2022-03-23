import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Input, Button } from "react-native-elements";
import { color } from "react-native-reanimated";
export default function ChangeDisplayNameForm(props) {
  const { displayName, toastRef, setShowModal } = props;
  const [newDisplayName, setNewDisplayName] = useState(null)
  const [error, setError] = useState(null)
  const onSubmit = () => {
    console.log(newDisplayName);
  };
  return (
    <View style={styles.View}>
      <Input
        placeholder="Nombre y Apellidos"
        containerStyle={styles.input}
        rightIcon={{
          type: "material-community",
          name: "account-circle-outline",
          color: "#c2c2c2",
        }}
        onChange= {(e)=>{
            setNewDisplayName(e.nativeEvent.text)
        }}
        errorMessage={error}
        defaultValue={displayName || ""} //Si contiene algo muestra sino muestra nada
      />
      <Button
        title="Cambiar nombre"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btnStyle}
        onPress={() => onSubmit()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    alignItems: "center",
    paddingVertical: 10,
  },
  input: {
    marginBottom: 10,
  },
  btnContainer: {
    marginTop: 20,
    width: "95%",
  },
  btnStyle: {
    backgroundColor: "#fcb823",
  },
});
