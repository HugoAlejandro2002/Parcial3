import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { HomeScreen } from '../screens/home/MateriasScreen';

import { InscribirseMateriaScreen } from '../screens/home/InscribirseMateriaScreen';
import { ViewMateria } from './MateriaStak';


const Tab = createBottomTabNavigator();

export const MateriasNavigation = () => {
    return (
        
        <Tab.Navigator
        screenOptions = {{
                headerShown: false,
            }}
            initialRouteName="Home">
            <Tab.Screen 
                name="Materias" 
                component={ViewMateria}
                options={{
                    tabBarIcon: ({focused, color, size}) => {
                      let iconName: string;
                      if (focused) {
                        iconName = 'compass-sharp';
                      } else {
                        iconName = 'compass-sharp';
                      }
                      return <Icon name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#97d3cd',
                    tabBarInactiveTintColor: 'grey',
                  }} />
            <Tab.Screen 
                name="My Course" 
                component={InscribirseMateriaScreen}
                options={{
                    tabBarIcon: ({focused, color, size}) => {
                      let iconName: string;
                      if (focused) {
                        iconName = 'play-circle-outline';
                      } else {
                        iconName = 'play-circle-outline';
                      }
                      return <Icon name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#97d3cd',
                    tabBarInactiveTintColor: 'grey',
                  }}
            
            />
        </Tab.Navigator>
    );
};