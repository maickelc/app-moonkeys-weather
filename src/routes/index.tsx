import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStackRoutes from './stack.routes';

const Routes: React.FC = () => {
  return (
  <NavigationContainer>
    <MainStackRoutes />
  </NavigationContainer>
)};

export default Routes;

