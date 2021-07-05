import React from 'react';
import AppProvider from './src/provider';
import Routes from './src/routes/index';

export default function App() {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
}
