
import { ActivityIndicator, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Header } from './components';
import colors from './constants/colors';
import { Game, Startgame, GameOver} from './screens';
import React,{useState} from 'react';
import { useFonts } from 'expo-font';
export default function App() {
  const [loaded] = useFonts({
   "lato-Bold" : require("../assets/fonts/Lato-Bold.ttf"),
    "lato-Italic" : require ("../assets/fonts/Lato-Italic.ttf"),
    "lato-Regular" : require ("../assets/fonts/Lato-Regular.ttf")
  })
  const [userNumber,setuserNumber] = useState(null);
  const [ guessRounds,setguessRounds] = useState(0)
  const onStartGame = (selectedNumber) =>{
       setuserNumber(selectedNumber)
  }
  
  const onGameOver=(rounds)=>{
       setguessRounds(rounds)
  }
  const onRestart = () =>{
    setuserNumber(null)
    setguessRounds(0)
  }
  let content = <Startgame onStartGame={onStartGame}/>

  const getTitle = () =>{
    let title;
    if(userNumber && guessRounds <= 0){
      title = "Guess a number"
    } else if(guessRounds > 0){
       title = "Game Over"
    }else{
       title = "Welcome"
    }
    return title
  }
  
  if(userNumber && guessRounds<= 0 ){
    content = <Game selectedNumber={userNumber} onGameOver={onGameOver}/>
  }else if( guessRounds > 0){
    content = <GameOver rounds={guessRounds} selectedNumber={userNumber} onRestart={onRestart}/>
  }
  if(!loaded) {
   return (  <View style={styles.containerLoaded}>
       <ActivityIndicator size = "large" color={colors.black}/>
    </View>
  )}
  return (
    <SafeAreaView style={styles.container}>
       <Header title={getTitle()}/>
       {content}
      
    </SafeAreaView>
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
