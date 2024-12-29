import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Images from "@/assets/images/Images";
import { useNavigation } from "expo-router";
import ScreenNames from "@/constants/ScreenNames";
import AntDesign from "@expo/vector-icons/AntDesign";

//rnfes
const Card = (props: any) => {
  const navigation = useNavigation();
  const [x, setX] = useState(0);
  const [color, setColor] = useState("red");
  // const [state , setState] = useState(initValue)

  const onCardPress = () => {
    const data = JSON.stringify(props);
    navigation.navigate(ScreenNames.Product, { productData: data });
  };

  const onPlusPress = () => {
    // x++;
    setX(x + 1);
  };

  const onMinusPress = () => {
    if (x > 0) {
      setX(x - 1);
    }
  };

  return (
    <TouchableOpacity
      style={[styles.cardContinner, { backgroundColor: color }]}
      onPress={onCardPress}
    >
      <Image source={props.img} style={styles.cat} />
      <View>
        <View style={styles.container}>
          <Text style={styles.txt}>{props.txt + ":"}</Text>
          <Text style={styles.txt}>{props.age}</Text>
        </View>
        <View style={styles.iconsContainer}>
          <AntDesign
            name="pluscircleo"
            size={24}
            color="black"
            onPress={onPlusPress}
          />
          <Text style={styles.amount}>{x}</Text>
          <AntDesign
            name="minuscircleo"
            size={24}
            color="black"
            onPress={onMinusPress}
          />
        </View>
        <View style={styles.circlesContainer}>
          <TouchableOpacity
            onPress={() => setColor("red")}
            style={[styles.circle, { backgroundColor: "red" }]}
          />
          <TouchableOpacity
            onPress={() => setColor("blue")}
            style={[styles.circle, { backgroundColor: "blue" }]}
          />
          <TouchableOpacity
            onPress={() => setColor("yellow")}
            style={[styles.circle, { backgroundColor: "yellow" }]}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  txt: {
    fontSize: 40,
    // color: "white",
    marginRight: 10,
  },
  container: {
    flexDirection: "row",
  },
  cat: {
    width: 80,
    height: 80,
  },
  cardContinner: {
    borderWidth: 1,
    flexDirection: "row",
    marginTop: 20,
  },
  iconsContainer: {
    flexDirection: "row",
    marginLeft: 10,
  },
  amount: {
    fontSize: 25,
    marginHorizontal: 10,
  },
  circlesContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  circle: {
    width: 35,
    height: 35,
    borderRadius: 35,
    marginLeft: 10,
    borderWidth: 1,
  },
});
