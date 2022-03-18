import { StyleSheet } from 'react-native';

import RegisterScreen from './app/screens/RegisterScreen';
import ReviewEditScreen from './app/screens/ReviewEditScreen';

export default function App() {
  return (
    <ReviewEditScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
