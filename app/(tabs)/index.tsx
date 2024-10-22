import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const index = () => {
  return (
    <View style={styles.conatiner} >
      <Text style={styles.txt}>index</Text>
      <View style={styles.box}></View>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  conatiner:{
    flex:1 , 
    backgroundColor:'red', 
    paddingTop: 45 , 
    alignItems:'center' , 
    flexDirection:'row' , 
    justifyContent:'space-between'

  },
  txt:{
    fontSize: 30 , 
    fontWeight:'bold', 
    marginLeft: 20 , 
    color:'orange' , 
  },
  box:{
    height: 200 ,
    width: 200 , 
    borderWidth: 10 , 
    marginTop: 20 , 
    backgroundColor:'blue' , 
    borderColor:  'green', 
    marginRight: 20 , 
  }
})