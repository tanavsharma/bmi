/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import type {Node} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet
}from 'react-native'

class Inputs extends Component{

  

  render() {
    return (
      <View style = {styles.container}>

      <Text style = {styles.title}>BMI Calculator</Text>

      <Text style = {styles.label}>Height</Text>
      <TextInput style = {styles.input}/>

      <Text style = {styles.label}>Weight</Text>
      <TextInput style = {styles.input}/>

      <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.calculate(this.state.height, this.state.weight)
               }>
               <Text style = {styles.submitButtonText}> Calculate </Text>
      </TouchableOpacity>

      <Text style = {styles.label}>Your BMI</Text>
      

      </View>
    )
  }



}
export default Inputs;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  title: {
    paddingTop: 30,
    paddingBottom: 30,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  label: {
    marginLeft: 15,
  },
  input: {
    margin:15,
    height: 40,
    borderWidth: 1,
    padding:10,
  },
  submitButton:{
    padding: 10,
    margin: 15,
    height: 40,
    backgroundColor: "#FF6677"
  },
  submitButtonText:{
    textAlign: "center",
    color:'white',
    fontSize: 18,
  }



})
