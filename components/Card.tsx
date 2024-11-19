import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Images from '@/assets/images/Images'
//rnfes
const Card = (props : any) => {
  return (
    <View style={styles.container}>
      <Image source={props.img} style={styles.cat} />
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
        flexDirection:'row' , 
        marginTop: 25
    }, 
    cat:{
      width: 80 , 
      height: 80 ,
    }
})