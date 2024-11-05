import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
//rnfes
const Card = (props : any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>{props.txt + ":"}</Text>
      <Text style={styles.txt}>{props.age}</Text>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    txt:{
        fontSize: 40 , 
        color:'white' , 
        marginRight: 10,
    }, 
    container:{
        flexDirection:'row'
    }
})