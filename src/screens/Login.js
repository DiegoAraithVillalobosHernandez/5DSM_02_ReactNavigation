import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'

export default function Login() {
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
        <Text>Formulario Login</Text>
        <Text>Registrate</Text>
      </View>
      <Divider style={styles.divider}/>
      <Text>Redes Sociales</Text>
    </ScrollView>
  )
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