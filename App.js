import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import RootReducer from './src/reducers'
import HomeContainer from './src/screens/Home/HomeContainer';
import Other from './src/screens/Other/Other';

const Stack = createNativeStackNavigator()

const Drawer = createDrawerNavigator()

const store = createStore(RootReducer)

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4541f',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        initialRouteName={"Home"} >
          <Drawer.Screen name="Home" component={HomeContainer} options={{ title: 'My Home' }} />
          <Drawer.Screen name="Other" component={Other} options={{ title: 'Other Screen' }} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App
