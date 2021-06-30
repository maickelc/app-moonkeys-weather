import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import AppProvider from './src/provider';

export default function App() {
  return (
    <AppProvider>
      <Text>Moonkeys Weather</Text>
      <StatusBar style="auto" />
    </AppProvider>
  );
}
