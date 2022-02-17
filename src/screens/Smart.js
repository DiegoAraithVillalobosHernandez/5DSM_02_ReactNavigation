import React from "react";
import { Text, View, Button } from "react-native";

export default function Smart(props){
    const { navigation } = props;
    return(
        <View>
            <Text>Mi smart</Text>
            <Button
            title="Ir a Training"
            onPress={()=>{navigation.navigate("training")}}
            />
            
        </View>
    )
}