import 'react-native-gesture-handler';
import React, { useEffect } from 'react'
import { useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import RootReducer from './src/reducers'
import { setIsDarkMode } from './src/actions/actions_ui';
import DashboardContainer from './src/screens/Dashboard/DashboardContainer';
import ProjectsListContainer from './src/screens/ProjectsList/ProjectsListContainer';

const Drawer = createDrawerNavigator()

const store = createStore(RootReducer)

export default function App() {
  const isDarkMode = useColorScheme() === 'dark'

  useEffect(() => {
    store.dispatch(setIsDarkMode(isDarkMode))
  }, [])

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
          <Drawer.Screen name="Dashboard" component={DashboardContainer} options={{ title: 'Dashboard' }} />
          <Drawer.Screen name="ProjectsList" component={ProjectsListContainer} options={{ title: 'Projects' }} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
