import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "expo-router";
import ScreenNames from "@/constants/ScreenNames";

const index = () => {
  const navigation = useNavigation();

  useEffect(() => {

    setTimeout(() => {
        navigation.navigate(ScreenNames.Home);
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>HAIFA 2</Text>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    fontSize: 50,
    fontWeight: "bold",
  },
});
