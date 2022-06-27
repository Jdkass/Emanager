// login form built from this tutorial:
// https://medium.com/react-native-development/easily-build-forms-in-react-native-9006fcd2a73b
import React, { Component } from 'react';
import { Text, View, Button, StyleSheet,TouchableOpacity, TextInput } from 'react-native';

// Form

// Form model

const  InputText2 = (props) => {
  
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'White',
          justifyContent: 'center',
          alignItems: 'center',
         }}>
         <View
            style={{
              height: '10%',
              width: '100%',
             
              
              marginLeft: '10%',
            }}>
            
            
            <TextInput
              style={{
                height: 40,
                width: '80%',
                backgroundColor: 'white',
                borderWidth: 1,
                borderColor: '#A986A7',
                paddingLeft: 10,
                borderRadius: 5,
              }}
              placeholder={'Email'}
            />
            </View>
            <View
              style={{
                height: '30%',
                width: '100%',
                backgroundColor: '',
                marginTop: '%',
                marginLeft: '10%',
                borderRadius: 5,
              }}>
              
             
              <TextInput
                style={{
                  height: 40,
                  width: '80%',
                  backgroundColor: 'white',
                  borderWidth: 1,
                  borderColor: '#A986A7',
                  paddingLeft: 10,
                  borderRadius: 5,
                }}
                placeholder={'password'}
              />
          </View>
     </View>
    )
  };
  export default  InputText2;


   

    


