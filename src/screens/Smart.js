import React, { useEffect, useState, useRef } from "react";
import { Text, View, StyleSheet, ImageBackground, Image } from "react-native";
import { map } from "lodash";
import Carousel from "react-native-snap-carousel/src/carousel/Carousel";
import { Icon, Rating } from "react-native-elements";
import Modal from "../components/Modal";
import Video from "../components/Video";

export default function Smart(props) {
  const { navigation } = props;
  const [data, setData] = useState([]);
  const carouselRef = useRef();

  const [activeIndex, setActiveIndex] = useState(0);
    const [showModal, setShowModal] = useState(false)
    const [renderComponent, setRenderComponent] = useState(null)
  const getExercises = async () => {
    try {
      const response = await fetch("http://192.168.62.185/smart/ejercicio", {
        method: "GET",
        headers: { "Content-Type": "Application/json" },
      });
      const json = await response.json();
      setData(json);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getExercises();
  }, []);

  const ratingComplete = (rating) => {
    console.log("Nuevo rating: " + rating);
  };

  const playVideo = (videoId) =>{
      setShowModal(true)
      setRenderComponent(<Video
        videoId={videoId}
      />)
  }

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.card}>
        <Image style={styles.img} source={{ uri: item.imagen }} />
        <Icon
          type="material-community"
          name="youtube"
          color={"black"}
          size={50}
          onPress={() => playVideo(item.video)}
        />
        <Text style={styles.exercise}>{item.ejercicio}</Text>
        <Text style={styles.description}>{item.descripcion}</Text>
        <Rating
          type="star"
          fractions={1} //En cuanto se dividira cada estrella
          startingValue={parseFloat(item.puntuacion)}
          //readonly
          imageSize={35}
          style={styles.rating}
          onFinishRating={ratingComplete}
        />
        <Text style={styles.points}>{item.puntuacion}/5</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imgBackground}
        source={require("../assets/chadFloppa.png")}
        resizeMode="cover"
      >
        <Carousel
          layout="default"
          ref={carouselRef}
          data={data}
          sliderWidth={400}
          itemWidth={400}
          onSnapItem={(index) => {
            setActiveIndex({ activeIndex: index });
          }}
          renderItem={renderItem}
        />
      </ImageBackground>
      {renderComponent && (
      <Modal isVisible={showModal} setIsVisible={setShowModal} >
        {renderComponent}
      </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgBackground: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    height: "75%",
    padding: 40,
    marginTop: 50,
    marginHorizontal: 25,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1.5,
    borderColor: "#fcb823",
  },
  img: {
    width: "65%",
    height: "65%",
    borderRadius: 5,
  },
  exercise: {
    fontSize: 25,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
  },
  rating: {
    paddingVertical: 10,
  },
  points: {
    fontWeight: "bold",
  },
});
