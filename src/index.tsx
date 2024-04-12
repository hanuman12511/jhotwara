import React from 'react'
import {Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator()
import NavigationRouter from './navigation'

export default function App(){
    return(
        <NavigationContainer>
            <NavigationRouter/>
    
        </NavigationContainer>
      )
}