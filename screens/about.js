import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function About() {
  return (
    <View>
      <Text style = {styles.container}>About Page</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    padding : 24
  }
})