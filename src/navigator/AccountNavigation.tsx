import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {WelcomeScreen} from '../screens/account/WelcomeScreen';
import {LoginScreen} from '../screens/account/LoginScreen';
import {RegisterScreen} from '../screens/account/RegisterScreen';
import { MateriasNavigation } from './MateriasNavigation';
// import {AuthContext, AuthContextInterface} from '../contexts/authContext';

export const AccountStack = () => {
  const Stack = createNativeStackNavigator();
  const [isLogin, setIsLogin] = useState(false);
//   const authObject: AuthContextInterface = {
//     isLogin,
//     isLogout: false,
//     login: () => {
//       setIsLogin(true);
//     },
//   };
  return (
    // <AuthContext.Provider value={authObject}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="Home" component={MateriasNavigation} />

      </Stack.Navigator>
    // </AuthContext.Provider>
  );
};