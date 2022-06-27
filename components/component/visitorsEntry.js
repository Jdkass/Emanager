// login form built from this tutorial:
// https://medium.com/react-native-development/easily-build-forms-in-react-native-9006fcd2a73b
import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Keyboard,
  Image,
} from 'react-native';




// Form

// Form model
const VisitorsEntry = (props) => {
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
          height: '12%',
          width: '100%',

          alignItems: 'center',
          marginTop: '10%',

          flexDirection: 'row',
        }}>
        <View
          style={{
            height: '100%',
            width: '25%',

            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../../Images/Ellipse5.png')}
            style={{ height: '90%', width: '100%' }}
            resizeMode="contain"
          />
        </View>

        <View
          style={{
            height: '50%',
            width: '70%',

            justifyContent: 'center',

            marginLeft: '3%',
          }}>
          <Text style={{ color: 'black', fontSize: 15, fontWeight: '600' }}>
            Hi Kareem
          </Text>
        </View>
      </View>
      <View
        style={{
          height: '5%',
          width: '100%',

          justifyContent: 'center',

          marginTop: '2%',
          marginLeft: '5%',
        }}>
        <Text style={{ color: 'black', fontSize: 15, fontWeight: '600' }}>
          Welcome Back!
        </Text>
      </View>
      <View
        style={{
          height: '10%',
          width: '70%',

          alignItems: 'center',
          justifyContent: 'center',

          marginLeft: '3%',
        }}>
        <Text style={{ color: '#5E38AF', fontSize: 20, fontWeight: '600' }}>
          Visitor's Entry
        </Text>
      </View>
      <View
        style={{
          height: '6%',
          width: '70%',

          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '15%',

          marginLeft: '3%',
        }}>
        <Text style={{ color: 'black', fontSize: 15, fontWeight: '600' }}>
          Insert visitor"s entry code
        </Text>
      </View>

   

      <TouchableOpacity
        style={{
          height: 40,
          width: '80%',
          backgroundColor: '#5E38AF',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '10%',
          borderRadius: 5,
        }}>
        <Text style={{ color: 'white', fontSize: 16 }}>Next </Text>
      </TouchableOpacity>
    </View>
  );
};
export default VisitorsEntry;
