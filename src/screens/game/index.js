import React,{useEffect, useRef, useState} from "react";
import { View,Text, Button, Alert } from "react-native";
import { styles } from "./styles";
import {Card,NumberContainer} from "../../components/index"
import colors from "../../constants/colors";

const generateRandomNumber = (min, max, exclude) => {
 min = Math.ceil(min)
 max = Math.floor(max)

 const randomNumber = Math.floor(Math.random() * (max - min) + min)
  if(randomNumber == exclude){
    return generateRandomNumber(min,max,exclude)
  }else{
    return randomNumber
  }

}
const Game = ({selectedNumber,onGameOver}) =>{
const [currentGuess, setcurrentGuess] = useState(generateRandomNumber(1, 100, selectedNumber));
const [rounds, setrounds] = useState(0)
const currentLow = useRef(1)
const currentHigh = useRef(100)

const onHandleNextGuess = (direccion) =>{
 if(
    direccion === "lower" && currentGuess < selectedNumber || 
    direccion === "greater" && currentGuess > selectedNumber
 ){
   Alert.alert("no mientas", "sabes que es un error", [{text:"perdon" , style:"cancel"}])

   return
 }
    if(direccion === "lower"){
      currentHigh.current = currentGuess
    } else{
      currentLow.current = currentGuess
    }

    const nextNumber = generateRandomNumber(currentLow.current,currentHigh.current,currentGuess)
    setcurrentGuess(nextNumber)
    setrounds(currentRounds => currentRounds + 1)
}
useEffect(()=>{
          if(currentGuess === selectedNumber){
            onGameOver(rounds)
          }
},[currentGuess,selectedNumber, onGameOver])

 return(
    <View style={styles.container}>
        <Card style={styles.content}>
               <Text style={styles.title}> Opponent's number</Text>
                    <NumberContainer number={currentGuess}/>
                <View style={styles.ContainerButton}>
                <Button 
                   title="lower"
                    onPress={()=>onHandleNextGuess("lower")}
                   color={colors.primary} />
                <Button 
                title="greater"
                onPress={() =>onHandleNextGuess("greater")}
                color={colors.primary}
                />
            </View>
        </Card>
    </View>
 )
}
export default Game