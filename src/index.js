import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './components';
export default function App() {
  return (

    <View style={styles.container}>
       <Header title="welcome"/>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
    backgroundColor: '#fff',
   
  },
});
