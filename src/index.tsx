import React, { useEffect } from 'react'
import {Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator()
import NavigationRouter from './navigation'
import {Provider} from 'react-redux'
import { Store} from 'redux'
import { store } from './Store/store'
export default function App(){
    return(
        <Provider store={store}>
        <NavigationContainer>
            <NavigationRouter/>
        </NavigationContainer>
        </Provider>
      )
}