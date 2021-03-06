import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, { useRef} from 'react'
import { Divider } from 'react-native-elements'
//hug, se usa si el componente no se encuentra dentro de un stack, para poder acceder a la navegacion
import { useNavigation } from '@react-navigation/native'; 
import FormLogin from '../components/account/FormLogin';
import Toast from 'react-native-easy-toast';

export default function Login(props) {
  const toastRef = useRef();
  return (
    <ScrollView>
      <Image 
      style={styles.logo}
      resizeMode= "contain"
      source={require( '../assets/logo_utez.png')}
      />
      {/* <Text>xdsdasdsads</Text>
      <Image 
      style={styles.logo}
      resizeMode= "contain"
      source={{uri: 'https://lacensura.com/wp-content/uploads/2021/06/utez_14-01-21.jpg'}}
      /> */}
      <View style={styles.viewContainer}>
        <FormLogin toastRef={toastRef}/>
        <CrearCuenta/>
      </View>
      <Divider style={styles.divider}/>
      <Text>Redes Sociales</Text>
      <Toast
      ref={toastRef}
      position="center"
      opacity={0.8}
      />
    </ScrollView>
  )

  function CrearCuenta(){
    const navigation = useNavigation();
    return(
      <Text style={styles.textRegister}>
        ¿Aún no tienes cuenta {" "}
        <Text style={styles.btnRegistrar} onPress={() => navigation.navigate('register')}>
          Registrate aquí</Text>
      </Text>
    )
  }
}



const styles = StyleSheet.create({
  logo:{
    height:100,
    width: 200,
    alignSelf: "center"
  },
  viewContainer:{
    marginRight:40,
    marginLeft:40
  },
  textRegister:{
    marginTop:15,
    marginLeft:10,
    marginRight:10
  },
  btnRegistrar:{
    color:"#fcb823",
    fontWeight: "bold"
  },
  divider:{
    backgroundColor:"#fcb823",
    margin: 40,
  }
})