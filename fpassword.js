import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import InputText from './components/component/inputText';
import ForgetPassword from './components/component/forgetPassword'
import CodeInput from 'react-native-confirmation-code-input';
import SubmitButton from './components/component/submitButton';

// Form





const Fpassword = (props) => {

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
          
          backgroundColor: '',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '10%',
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            fontWeight: 'bold',
            
          }}>
          
          E-Manager{' '}
        </Text>
        </View>
        <View
          style={{
            height: '20%',
            width: '100%',
            
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '10%',
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 15
              
              
             
            }}>
            Enter your password
          </Text>
          </View>
          <CodeInput
        secureTextEntry
        compareWithCode="AsDW2"
        activeColor="blue"
        inactiveColor="black"
        autoFocus={false}
        codeLength={4}
        keyboardType="numeric"
        ignoreCase={true}
        inputPosition="center"
        size={50}
        onFulfill={(isValid) => console.log(isValid)}
        containerStyle={{ marginTop: 15 }}
        codeInputStyle={{ borderWidth: 1.5 }}
      />
          <View  style={{
            height: '20%',
            width: '100%',
            marginTop: '%',

            

          }}>
      <ForgetPassword
            
        color={'white'}
        fontSize={'15'}
        text={'forget password?'}
        onPress={() => props.navigation.navigate('entrycode')}
        marginTop={'-120%'}
      />
        </View>
          
         
       
          
      </View>
    );
  }

export default Fpassword