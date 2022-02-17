import React from "react";
import { Text, View, Button } from "react-native";

export default function Profile(props){
    const { navigation } = props;
    return(
        <View>
            <Text>Mi profile</Text>
            <Button
            title="Ir a Index"
            onPress={()=>{navigation.navigate("index")}}
            />
        </View>
    )
}