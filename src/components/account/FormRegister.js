import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Input, Icon, Button } from "react-native-elements";
import { validateEmail } from "../../utils/validation";
import { isEmpty, size } from "lodash";
import firebase from "firebase";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import Loading from "../Loading";

export default function FormRegister(props) {
  const navigation = useNavigation();
  
  const {toastRef} = props;
  const [showPass, setShowPass] = useState(false);
  const [showPassRepeat, setShowPassRepeat] = useState(false);
  const [formData, setFormData] = useState(defaultFormValues());
  const [loading, setLoading] = useState(false)

  const onSubmit = () => {
    //console.log("OnSubmit");
    //console.log(formData)
    if (isEmpty(formData.email)|| isEmpty(formData.password) || isEmpty(formData.passwordRepeat)) {
      toastRef.current.show("Hay campos vacíos")
      //console.log("Hay campos vacíos")
    } 
    else if (!validateEmail(formData.email)){
      toastRef.current.show("Introduce un email válido")
    }
    else if(size(formData.password) < 6){
      toastRef.current.show("La contraseña debe ser al menos de 6 caracteres")
    }
    else if(formData.password !== formData.passwordRepeat){
      toastRef.current.show("Las contraseñas no coinciden")
    }
    else {
      setLoading(true)
      firebase.auth().createUserWithEmailAndPassword(formData.email, formData.password)
      .then(response => {
        setLoading(false)
        navigation.navigate("index")
      })
      .catch(err => {
        setLoading(false)
        toastRef.current.show("Este correo ya fue registrado")
      })
    }
  }

  const capturarDatos = (event, type) =>{
    //console.log(type) 
    //console.log(event.nativeEvent.text)
    //Con spread podemos guardar los valores de todos los campos
    //añadiendo el nuevo a los antes registrados
    setFormData({...formData,[type]:event.nativeEvent.text})
  }

  return (
    <View style={styles.formContainer}>
      <Input
        onChange={(e) => capturarDatos(e, "email")}
        placeholder="Correo electrónico"
        containerStyle={styles.inputForm}
        rightIcon={
          <Icon type="material-community" name={"at"} iconStyle={styles.icon} />
        }
      />
      <Input
         onChange={(e) => capturarDatos(e, "password")}
        placeholder="Contraseña"
        containerStyle={styles.inputForm}
        password={true}
        secureTextEntry={showPass ? false : true}
        rightIcon={
          <Icon
            type="material-community"
            name={showPass ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.icon}
            onPress={() => setShowPass(!showPass)}
          />
        }
      />
      <Input
      onChange={(e) => capturarDatos(e, "passwordRepeat")}
        placeholder="Repetir Contraseña"
        containerStyle={styles.inputForm}
        password={true}
        secureTextEntry={showPassRepeat ? false : true}
        rightIcon={
          <Icon
            type="material-community"
            name={showPassRepeat ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.icon}
            onPress={() => setShowPassRepeat(!showPassRepeat)}
          />
        }
      />
      <Button
        title={"Registrar"}
        containerStyle={styles.containerBtnRegister}
        buttonStyle={styles.btnRegister}
        onPress={() => onSubmit()}
      />
      <Loading
      isVisible={loading}
      text={"Creando cuenta"}
      />
    </View>
  );
}

function defaultFormValues(){
    return{
        email:"",
        password:"",
        passwordRepeat:""
    }
}

const styles = StyleSheet.create({
  formContainer: {
    marginTop: 30,
  },
  inputForm: {
    width: "100%",
    marginTop: 20,
  },
  containerBtnRegister: {
    marginTop: 20,
    width: "95%",
  },
  btnRegister: {
    backgroundColor: "#fcb823",
  },
  icon: {
    color: "#c1c1c1",
  },
});
