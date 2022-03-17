import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ListItem } from "react-native-elements";
import { map } from "lodash"; //Es como for each

export default function UserOptions() {
  const selectOptions = (key) => {
    switch (key) {
      case "displayName":
        break;
      case "email":
        break;
      case "password":
        break;
    }
  };

  const menuOptions = generateOptions();

  return (
    <View>
      <ListItem
        key={1}
        title={"Cambiar nombres y apellidos"}
        containerStyle={styles.menuItem}
        onPress={() => console.log("chi")}
      />
      <ListItem
        key={2}
        title={"Cambiar contraseña"}
        containerStyle={styles.menuitem}
        onPress={() => console.log("nu")}
      />
    </View>
  );
}

function generateOptions() {
  return [
    {
      title: "Cambiar Nombre y Apellidos",
      iconType: "material-community",
      iconName: "account-circle",
      iconColor: "#ccc",
    },
    {
      title: "Cambiar Correo Electronico",
      iconType: "material-community",
      iconName: "at",
      iconColor: "#ccc",
    },
    {
      title: "Cambiar contraseña",
      iconType: "material-community",
      iconName: "lock-reset",
      iconColor: "#ccc",
    },
  ];
}

const styles = StyleSheet.create({
  menuItem: {
    borderBottomWidth: 1,
    borderBottomColor: "#e3e3e3",
  },
});
