import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "@/components/Card";
import data from "@/constants/data";

const Home = () => {
  const renderProducts = () => {
    const products = data.map((product) => {
      return <Card txt={product.txt} age={product.age} img={product.img} />;
    });

    return products;
  };

  return (
    <View style={styles.conatiner}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderProducts()}
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    paddingTop: 65,
    alignItems: "center",
    // flexDirection:'row' ,
    // justifyContent: "space-between",
  },
  txt: {
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 20,
    color: "orange",
  },
  box: {
    height: 200,
    width: 200,
    borderWidth: 10,
    marginTop: 20,
    backgroundColor: "blue",
    borderColor: "green",
    marginRight: 20,
  },
});
