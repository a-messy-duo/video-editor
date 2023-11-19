import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/features/stackNavigation/mainStack';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </SafeAreaView>
  );
}
