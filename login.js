// login form built from this tutorial:
// https://medium.com/react-native-development/easily-build-forms-in-react-native-9006fcd2a73b
import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Platform,
  TextInput,
  ScrollView,
} from 'react-native';
import { useFonts, Galada_400Regular } from '@expo-google-fonts/galada';

import InputText from './components/component/inputText';
import SubmitButton from './components/component/submitButton';

// Form

// Form model

const Login = (props) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#E5E5E5;',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          height: '20%',
          width: '100%',

          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '%',
          borderRadius: 5,
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            fontWeight: 'bold',
            marginTop: '20%',
          }}>
          Login
        </Text>
      </View>

      <View
        style={{
          height: '40%',
          width: '100%',
        }}>
        <InputText />
      </View>

      <View
        style={{
          height: '20%',
          width: '100%',
          marginTop: '5%',
        }}>
        <SubmitButton
          Bg={'#5E38AF'}
          Color={'white'}
          text={'Login'}
          onPress={() => props.navigation.navigate('fpassword')}
        />
      </View>
    </View>
  );
};

export default Login;
