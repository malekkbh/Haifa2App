import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Images from "@/assets/images/Images";
import { useLocalSearchParams } from "expo-router";

const Product = () => {
  const params = useLocalSearchParams();
  const data = JSON.parse(params.productData);

  console.log("data: " , data);
  

  return (
    <View style={styles.container}>
      <Image source={data.img} style={styles.image} />
      <Text style={styles.title}>{data.txt}</Text>
      <Text style={styles.price}>price: {data.age}$</Text>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 250,
    width:'100%', 
    resizeMode: "cover",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 20,
  },
  price: {
    fontSize: 25,
    marginLeft: 20,
  },
});
