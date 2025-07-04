import React, { FC } from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import splashscreen from '@features/auth/SplashScreen'

const Stack = createNativeStackNavigator()

const Navigation:FC = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='SplashScreen' screenOptions={{headerShown: false}}>
            <Stack.Screen name='SplashScreen' component={splashscreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation