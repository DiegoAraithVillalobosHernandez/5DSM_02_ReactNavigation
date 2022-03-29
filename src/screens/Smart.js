import React, { useEffect, useState} from "react";
import { Text, View } from "react-native";
import { map } from 'lodash'

export default function Smart(props){
    const { navigation } = props;
    const [data, setData] = useState([])
    
    const getExercises =  async() =>{
        try{
            const response = await fetch('http://192.168.62.185/smart/ejercicio',{
                method: "GET",
                headers: {"Content-Type":"Application/json"}
            })
            const json = await response.json();
            setData(json)
        }catch(e){
            console.log(e)
        }
    }

    useEffect(() => {
        getExercises();
        console.log(data)
    }, [])
    

    return(
        <View>
            {map(data,(element, index) =>(
                <Text key={index}>{element.ejercicio}</Text>
            ))}
        </View>
    )
}