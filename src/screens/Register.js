import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'
import FormRegister from '../components/account/FormRegister'

export default function Register() {
  return (
    <ScrollView>
      <Image
      style={styles.logo}
      resizeMode= "contain"
      source={require( '../assets/logo_utez.png')}
      />
      <View style={styles.viewForm}>
        <FormRegister/>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  logo:{
    height:100,
    width: 200,
    alignSelf: "center"
  },
  viewForm:{
    marginHorizontal:40
  }
})