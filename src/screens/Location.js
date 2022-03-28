import { Dimensions, StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import MapView, { Marker, Circle } from "react-native-maps";

export default function Location() {
  //@18.8502885,-99.2029242,17z <-Utez
  const [region, setRegion] = useState({
    latitude: 18.8502885,
    longitude: -99.2029242,
    latitudeDelta: 0.0522, //Que tanto se
    longitudeDelta: 0.0521, //mostrara del mapa
  });
  const [marker, setMarker] = useState({
    latitude: 18.8502885,
    longitude: -99.2029242,
  });
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={region}
        onPress={(e) => {
          setMarker(e.nativeEvent.coordinate),
            setRegion(e.nativeEvent.coordinate);
        }}
        //onRegionChange={(r)=>{}}
        onRegionChangeComplete={(r) => {console.log(r)}}
      >
        <Marker
          key={1}
          coordinate={marker}
          title={"Es mi primer marcador xD"}
          description={"Lo hice en clase de DSM"}
          //image={{uri: "https://upload.wikimedia.org/wikipedia/commons/5/54/Logo-utez.png"}}
        >
          <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/5/54/Logo-utez.png",
            }}
            F
            style={styles.marker}
          />
        </Marker>

        <Circle
          radius={1000}
          center={marker}
          //center={{latitude:18.8502885,longitude:-99.2029242,}}
          strokeWidth={3}
          strokeColor={"red"}
          fillColor={"rgba(255,0,0,0.1)"}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  marker: {
    width: 100,
    height: 50,
  },
});
