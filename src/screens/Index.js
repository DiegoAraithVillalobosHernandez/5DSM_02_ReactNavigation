import React, { useEffect, useState } from "react";
import { Text, View, Button } from "react-native";
import {firebaseApp} from '../utils/firebase';
import * as firebase from 'firebase';
import Login from "./Login";
import Loading from "../components/Loading";

export default function Index(props){
    const {navigation} = props;
    const [login, setLogin] = useState(null) //Save session state 
    useEffect(() => { // Check user state
        firebase.auth().onAuthStateChanged((user) => {
            !user ? setLogin(false) : setLogin(true);
        });
    }, []);

    if (login === null) return (<Loading isVisible={true} text={"Cargando"}/>)
    if (login) {
        return(
            <View>
                <Text>Mi index</Text>
                <Button
                title="Ir a Smart"
                onPress={()=>{navigation.navigate("smart")}}
                />
                <Button
                title="Ir a Profile"
                onPress={()=>{navigation.navigate("profile")}}
                />
                <Button
                title="Ir a Training"
                onPress={()=>{navigation.navigate("smart", {screen: "training"})}}
                />
                <Button
                title="Cerrar sesión"
                onPress={() => {firebase.auth().signOut()}}
                />
            </View>
        )
    }else{
        return(
            <Login/>
        )
    }
}