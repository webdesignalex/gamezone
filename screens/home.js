import { StyleSheet, Text,TouchableOpacity,TouchableWithoutFeedback,Keyboard, View ,Button,Modal,FlatList} from 'react-native';
import React, {useState} from 'react';
import {MaterialIcons} from '@expo/vector-icons';
import ReviewForm from './reviewForm';
import Card from '../shared/card';
import { add } from 'react-native-reanimated';


export default function Home({navigation}) {
  const [text,setText] = useState([
    {title:'Khaing Thazin Oo',body:'CSE',rating:'3',key:'1'},
    {title:'Chu Thit Sar',body:'CSE',rating:'4',key:'2'},
    {title:'Shoon Pyae Pyae Aung',body:'CSE',rating:'5',key:'3'},
    {title:'Myat Myintzu Thin',body:'ECE',rating:'1',key:'4'},

  ])
  const [modalOpen,setModalOpen] = useState(false)

  const addReview = (text) => {
    text.key = Math.random().toString();
    setText((currentTexts) => {
      return [text,...currentTexts]
    });
    setModalOpen(false);
  }
  return (
    <View style = {styles.container}>
      <Modal visible={modalOpen} animationType="slide">
         <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
         <View style={styles.modalContent}>
          <MaterialIcons 
              name = "close"
              style={{...styles.modalToggle,...styles.modalClose}}
              size={24}
              onPress = {() => setModalOpen(false)}/>
              <ReviewForm addReview={addReview}/>
          </View>
         </TouchableWithoutFeedback>
      </Modal>
      <MaterialIcons 
      name = "add"
      size={24}
      style={styles.modalToggle}
      onPress = {() => setModalOpen(true)}/>
      <FlatList 
      data={text}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails',item)}>
            <Card>
            <Text>{item.title}</Text>
          </Card>
        </TouchableOpacity>
      )}/>


    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    padding : 40
  },
  // titleText:{
  //   padding:20,
  //   fontSize:15,
  //   backgroundColor:'lightblue',
  //   marginBottom:5,
  //   borderRadius:5
  // },
  modalToggle:{
    marginBottom:10,
    borderWidth:1,
    borderColor:'#f2f2f2',
    padding:10,
    borderRadius: 10,
    alignSelf:'center'
  },
  modalClose:{
    marginTop:20,
    marginBottom:0,
  },
  modalContent:{
    flex:1,
  }
})