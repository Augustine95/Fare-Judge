import { StyleSheet, View } from 'react-native';
import AppButton from './app/components/AppButton';
import AppTextInput from './app/components/forms/AppTextInput';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <AppTextInput placeholder='Username' icon='email' />
    </View>
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
