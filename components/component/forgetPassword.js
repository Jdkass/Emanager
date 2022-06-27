// login form built from this tutorial:
// https://medium.com/react-native-development/easily-build-forms-in-react-native-9006fcd2a73b
import React, { Component } from 'react';
import { Text, View, Button, StyleSheet,TouchableOpacity, TextInput } from 'react-native';

// Form

// Form model

const ForgetPassword = (props) => {
  
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'White',
          justifyContent: 'center',
          alignItems: 'center',
         }}>
        <TouchableOpacity
                style={{
                  height: 40,
                  width: '80%',
                  backgroundColor:'White',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: props.marginTop,
                  borderRadius: 5,
                  
                }}
                onPress={props.onPress}
                >
      <Text style={{color:props.Color, fontFamily:props.fontFamily, fontSize:props.fontSize}}>
        {props.text}
      </Text> 
                  
               
              </TouchableOpacity>
         
                  
               
          
     </View>
    )
  };
  
  export default ForgetPassword;
  

    


