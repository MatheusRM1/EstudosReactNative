import React from 'react';
import { useFonts } from 'expo-font';
import { View } from 'react-native';
import Home from './index';


export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <View>
      <Home />
    </View>
  );
}
