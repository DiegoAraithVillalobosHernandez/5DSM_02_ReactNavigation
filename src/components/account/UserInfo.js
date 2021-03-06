import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Avatar } from "react-native-elements";
import * as firebase from "firebase";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";

export default function UserInfo(props) {
  const {
    userInfo: { uid, photoURL, displayName, email },
    toastRef,
    setLoading,
    setLoadingText,
  } = props;

  const changeAvatar = async () => {
    const resultPermission = await Permissions.askAsync(Permissions.CAMERA);
    const resultPermissionCamera = resultPermission.permissions.camera.status;
    if (resultPermissionCamera == "denied") {
      toastRef.current.show("Se necesitan permisos de camará");
    } else {
      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });
      if (result.cancelled) {
        toastRef.current.show("No has seleccionado imagén");
      } else {
        uploadImage(result.uri)
          .then(() => {
            updatePhotoUrl();
            toastRef.current.show("Imagén subida");
          })
          .catch((err) => {
            console.log(err);
            toastRef.current.show("Error al cargar la imagen");
          });
      }
    }
  };

  const uploadImage = async (uri) => {
    setLoading(true);
    setLoadingText("Cargando Avatar");
    //console.log(uri)
    const response = await fetch(uri);
    //Recuperamos el blob de la imagen
    const blob = await response.blob();
    //Guardamos en el storage
    const ref = firebase.storage().ref().child(`avatar/${uid}`);
    //Subimos el cambio
    return ref.put(blob);
  };

  const updatePhotoUrl = () => {
    setLoadingText("Actualizando avatar")
    firebase
      .storage()
      .ref(`avatar/${uid}`)
      .getDownloadURL()
      .then(async (response) => {
        //console.log(response)
        const update = {
          photoURL: response,
        };

        await firebase.auth().currentUser.updateProfile(update);
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
        toastRef.current.show("Error al actualizar imagen");
      });
  };

  return (
    <View style={styles.viewUserInfo}>
      <Avatar
        rounded
        size={"large"}
        showEditButton
        containerStyle={styles.userAvatar}
        source={
          photoURL
            ? { uri: photoURL }
            : require("../../assets/avatar-default.jpg")
        }
        onEditPress={() => changeAvatar()}
      />
      <View>
        <Text style={styles.userName}>
          {displayName ? displayName : "Anonimo"}
        </Text>
        <Text style={styles.userEmail}>{email ? email : "Invitado"}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewUserInfo: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    paddingTop: 30,
    paddingBottom: 30,
  },
  userAvatar: {
    marginRight: 20,
  },
  userName: {
    fontWeight: "bold",
    paddingBottom: 5,
  },
  userEmail: {},
});
