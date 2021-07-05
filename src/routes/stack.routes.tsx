import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
const StackRouter = createStackNavigator();

const MainStackRoutes: React.FC = () => (
  <StackRouter.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: "#FFF",
      }
    }}
    >
      <StackRouter.Screen
        name="home"
        component={Home}
      />
    </StackRouter.Navigator>
)

export default MainStackRoutes;
