import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './src/screens/Home/Home'
import Other from './src/screens/Other/Other'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={"Home"}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Other" component={Other} />
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default App
