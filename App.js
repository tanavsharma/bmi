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
  state = {
    height: '',
    weight: '',
    bmi: '',
    bmiResult: '',
  }

  handleHeight = (text) => {
    this.setState({height: text})
  }

  handleWeight = (text) => {
    this.setState({weight: text})
  }

  calculate = (height, weight) => {
    var result = (parseFloat(weight)*10000)/(parseFloat(height)*parseFloat(height));
    result = result.toFixed(2);
    this.setState({bmi: result})
  }

  render() {
    return (
      <View style = {styles.container}>

      <Text style = {styles.title}>BMI Calculator</Text>

      <Text style = {styles.label}>Height</Text>
      <TextInput style = {styles.input}
          onChangeText = {this.handleHeight}/>

      <Text style = {styles.label}>Weight</Text>
      <TextInput style = {styles.input}
          onChangeText = {this.handleWeight}/>

      <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.calculate(this.state.height, this.state.weight)
               }>
               <Text style = {styles.submitButtonText}> Calculate </Text>
      </TouchableOpacity>

      <Text style = {styles.output}>{this.state.bmi}</Text>
      <Text style = {styles.resultText}>{this.state.BmiResult}</Text>
      

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
  },
  output:{
    textAlign: "center",
    fontSize: 30,

  }



})