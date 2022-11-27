
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { Header } from './components';
import colors from './constants/colors';
import { Game, Startgame } from './screens';
import React,{useState} from 'react';
import { useFonts } from 'expo-font';
export default function App() {
  const [loaded] = useFonts({
   "lato-Bold" : require("../assets/fonts/Lato-Bold.ttf"),
    "lato-Italic" : require ("../assets/fonts/Lato-Italic.ttf"),
    "lato-Regular" : require ("../assets/fonts/Lato-Regular.ttf")
  })
  const [userNumber,setuserNumber] = useState(null);

  const onStartGame = (selectedNumber) =>{
       setuserNumber(selectedNumber)
  }
  
  let content = <Startgame onStartGame={onStartGame}/>

  if(userNumber){
    content = <Game selectedNumber={userNumber}/>
  }
  if(!loaded) {
   return (  <View style={styles.containerLoaded}>
       <ActivityIndicator size = "large" color={colors.black}/>
    </View>
  )}
  return (
    <View style={styles.container}>
       <Header title={userNumber ? "Let´s start" : "Welcome"}/>
       {content}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
    backgroundColor: colors.white,
 
  },
  containerLoaded:{
    flex: 1,
    backgroundColor: colors.white,
    justifyContent:"center",
    alignItems:"center"
  }
});
