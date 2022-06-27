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
import SubmitButton from './components/component/submitButton'

// Form

// Form model
 const GrantEntry = (props) => {
  return (
    <View
      style={{
        flex: 1,
        
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
          Grant Entry
        </Text>
      </View>
            <View
        style={{
          height: '13%',
          width: '35%',

          justifyContent: 'center',

          marginTop: '35%',
        }}>
     
        <Image
          source={require('./Images/Check.png')}
          style={{ height: '90%', width: '100%' }}
          resizeMode="contain"
        />
      </View>
        <View
        style={{
          height: '5%',
          width: '100%',

          marginTop: '5%',
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{ color: 'black', fontSize: 16}}>
            Visitor's Confirmation
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'centre',
            alignItems: 'center',
          }}>
          <Text style={{ color: 'black', fontSize: 16}}>
            Successful
          </Text>
        </View>
        </View>

         <View
        style={{
          height: '7%',
          width: '100%',

          justifyContent: 'center',

          alignItems: 'center',

          marginTop: '20%',
        }}>
        <Text style={{ color: '#3A25A0', fontSize: 30}}>
          Granted Entry
        </Text>


      </View>
      
     
     <View
            style={{
              height: '15%',
              width: '100%',
              
              marginTop: '18%',
              
            }}>
            
            
           

            <SubmitButton
            
        color={'#5E38AF;'}
        text={'Finish'}
        onPress={() => props.navigation.navigate('login')}
      />

              
            </View>
       
    </View>
    
  );
}

export default GrantEntry;
