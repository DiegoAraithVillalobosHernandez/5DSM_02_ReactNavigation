import React from "react";
import { Text, View, Button } from "react-native";

export default function Index(props){
    const {navigation} = props;
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
            onPress={()=>{navigation.navigate('smart', {screen: 'training'})}}
            />
        </View>
    )
}