
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './components';
import { Startgame } from './screens';
export default function App() {
  return (

    <View style={styles.container}>
       <Header title="welcome"/>
       <Startgame/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
    backgroundColor: '#fff',
   
  },
});
