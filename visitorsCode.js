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
import SubmitButton from './components/component/submitButton';

// Form

// Form model
const VisitorsCode = (props) => {
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
          width: '100%',
          justifyContent: 'center',

          alignItems: 'center',
        }}>
        <Text style={{ color: '#5E38AF', fontSize: 17, fontWeight: '600' }}>
          Visitor's code
        </Text>
      </View>
      <View
        style={{
          height: '5%',
          width: '100%',

          justifyContent: 'center',

          marginTop: '20%',
          marginLeft: '15%',
        }}>
        <Text style={{ color: 'black', fontSize: 15, fontWeight: '' }}>
          Home address
        </Text>
      </View>
      <View
        style={{
          height: '5%',
          width: '100%',

          flexDirection: 'row',

          marginTop: '8%',
          marginLeft: '15%',
        }}>
        <View
          style={{
            width: '40%',
          }}>
          <Text style={{ color: 'black', fontSize: 15, fontWeight: '' }}>
            Recidence's Name
          </Text>
        </View>
        <View
          style={{
            width: '40%',

            marginTop: '%',
            marginLeft: '8%',
          }}>
          <Text style={{ color: '#5E38AF', fontSize: 15, fontWeight: '' }}>
            Avis Charles
          </Text>
        </View>
      </View>
      <View
        style={{
          height: '5%',
          width: '100%',

          flexDirection: 'row',

          marginTop: '20%',
          marginLeft: '15%',
        }}>
        <View
          style={{
            width: '40%',
          }}>
          <Text style={{ color: 'black', fontSize: 15, fontWeight: '' }}>
            Visitor's Name
          </Text>
        </View>
        <View
          style={{
            width: '40%',

            marginLeft: '8%',
          }}>
          <Text style={{ color: '#5E38AF', fontSize: 15, fontWeight: '' }}>
            Ibrahim Mohammed
          </Text>
        </View>
      </View>
      <View
        style={{
          height: '5%',
          width: '100%',

          flexDirection: 'row',

          marginLeft: '15%',
        }}>
        <View style={{}}>
          <Text style={{ color: 'black', fontSize: 15, fontWeight: '' }}>
            Visitor's Phone Number
          </Text>
        </View>
        <View
          style={{
            marginLeft: '3%',
          }}>
          <Text
            style={{ color: '#5E38AF', fontSize: 15, fontWeight: '' }}></Text>
        </View>
      </View>
      <View
        style={{
          height: '5%',
          width: '100%',

          flexDirection: 'row',

          marginLeft: '15%',
        }}>
        <View
          style={{
            width: '40%',
          }}>
          <Text style={{ color: 'black', fontSize: 15, fontWeight: '' }}>
            Number of Visitors
          </Text>
        </View>
        <View
          style={{
            width: '40%',

            marginLeft: '3%',
          }}>
          <Text
            style={{ color: '#5E38AF', fontSize: 15, fontWeight: '' }}></Text>
        </View>
      </View>
      <View
        style={{
          height: '5%',
          width: '100%',

          flexDirection: 'row',

          marginLeft: '15%',
        }}>
        <View style={{}}>
          <Text style={{ color: 'black', fontSize: 15, fontWeight: '' }}>
            Vehicle Plate Number
          </Text>
        </View>
        <View
          style={{
            width: '40%',

            marginLeft: '8%',
          }}>
          <Text style={{ color: '#5E38AF', fontSize: 15, fontWeight: '' }}>
            IKJ 435 BD
          </Text>
        </View>
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
          onPress={()=>props.navigation.navigate('grantEntry')}
        />
      </View>
    </View>
  );
}
export default VisitorsCode;
