import React, { useState, createContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import FormScreen from './src/screens/FormScreen';
import { RootStackParamList } from './types';

export const AppContext = createContext({
  isHelpRequested: false,
  setHelpRequested: (value: boolean) => {},
});

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  const [isHelpRequested, setHelpRequested] = useState(false);

  return (
    <AppContext.Provider value={{ isHelpRequested, setHelpRequested }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Form" component={FormScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}
