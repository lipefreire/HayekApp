import React from 'react';
import { useFonts, JosefinSans_400Regular, JosefinSans_700Bold} from '@expo-google-fonts/josefin-sans'
import AppLoading from 'expo-app-loading'

import Rotas from "./src/Routes/Rotas";

export default function App() {

  let [fontsLoaded] = useFonts({
    JosefinSans_400Regular,
    JosefinSans_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading/>
  }

  return (
    <Rotas />
  );
}
