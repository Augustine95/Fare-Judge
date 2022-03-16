import { StyleSheet, View } from 'react-native';
import AppButton from './app/components/AppButton';

export default function App() {
  return (
    <View style={styles.container}>
      <AppButton title="Login" />
      <AppButton title="Register" color='secondary' />
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
