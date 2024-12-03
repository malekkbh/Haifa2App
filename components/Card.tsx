import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Images from "@/assets/images/Images";
import { useNavigation } from "expo-router";
import ScreenNames from "@/constants/ScreenNames";
//rnfes
const Card = (props: any) => {
  const navigation = useNavigation();

  const onCardPress = () => {
    const data = JSON.stringify(props);
    navigation.navigate(ScreenNames.Product, { productData: data });
  };

  return (
    <TouchableOpacity onPress={onCardPress}>
      <View style={styles.container}>
        <Image source={props.img} style={styles.cat} />
        <Text style={styles.txt}>{props.txt + ":"}</Text>
        <Text style={styles.txt}>{props.age}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  txt: {
    fontSize: 40,
    color: "white",
    marginRight: 10,
  },
  container: {
    flexDirection: "row",
    marginTop: 25,
  },
  cat: {
    width: 80,
    height: 80,
  },
});
