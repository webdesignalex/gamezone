import { StyleSheet, Text, View,Image } from 'react-native';
import React from 'react';
import Card from '../shared/card';
import { images} from '../styles/globalStyles';


export default function ReviewDetails({navigation,route}){
const  rating = route.params.rating; 
  return (
    <View style={styles.container}>
    <Card>
      <Text>{route.params.title} </Text>
      <Text>{route.params.body} </Text>
      {/* <Text>{route.params?.rating} </Text> */}
      <View style={styles.ratingStyle}>
        <Text>Game Zone Rating: </Text>
        <Image source={images.rating[rating]}/>

      </View>
     
      </Card>
      </View>
  )
}

const styles = StyleSheet.create({
  container:{
    padding : 40
  },
  ratingStyle:{
    flexDirection:'row',
    justifyContent:'center',
    paddingTop:16,
    marginTop:16,
    borderTopWidth:1,
    borderTopColor:'#eee'

  },
  

})