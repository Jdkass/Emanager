import*  as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from './login';
import Fpassword from './fpassword';
import VisitorsCode from './visitorsCode';
import Entrycode from './entrycode';
import GrantEntry from './grantEntry';

const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator headerMode={null}>
      <Stack.Screen name="login" component={Login} />
       <Stack.Screen name="fpassword" component={Fpassword} />
       <Stack.Screen name="visitorsCode" component={VisitorsCode} />
       <Stack.Screen name="entrycode" component={Entrycode} />
       <Stack.Screen name="grantEntry" component={GrantEntry} />
       </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
