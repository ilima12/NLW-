import { StatusBar } from 'react-native';
import {
  userFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from '@expo-google-fonts/inter'

import { Home } from './src/screens/Home';
import { Background } from './src/components/Background';
import { useFonts } from '@expo-google-fonts/inter/useFonts';

export default function App() {
  const [fontsLoade] = useFonts({
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black

  });

  return (
    <Background>
      
      <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent

      
      />
      { fontsLoaded ? <Home /> : }
    </Background>

  );
}

