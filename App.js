import react from 'react';
import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import Router from './src/router';

 const App = () => {
  return (
      <NavigationContainer>
        <Router />
      </NavigationContainer>
  );
}

export default App;