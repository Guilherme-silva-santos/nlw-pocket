import { Welcome } from '@/components/welcome';
import { Button } from '@/components/button';
import { Steps } from '@/components/steps';
import { router } from 'expo-router';
import { View } from 'react-native';


export default function App() {
  return (
    <View style={{ flex: 1, padding: 20, gap: 10, }}>
      <Welcome />
      <Steps />
      <Button onPress={() => router.navigate('/home')}>
        <Button.Title>Começar</Button.Title>
      </Button>
    </View>
  )
}