import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ProgressProvider } from './src/context/ProgressContext';
import { LocaleProvider } from './src/context/LocaleContext';
import RootNavigator from './src/navigation/RootNavigator';

export default function App() {
  return (
    <SafeAreaProvider>
      <LocaleProvider>
        <ProgressProvider>
          <RootNavigator />
          <StatusBar style="auto" />
        </ProgressProvider>
      </LocaleProvider>
    </SafeAreaProvider>
  );
}
