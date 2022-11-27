import React,{useState} from "react";
import { View,Text, Button } from "react-native";
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
const Game = ({selectedNumber}) =>{
const [currentGuess, setcurrentGuess] = useState(generateRandomNumber(1, 100, selectedNumber));
 return(
    <View style={styles.container}>
        <Card style={styles.content}>
               <Text style={styles.title}> Opponent's number</Text>
                    <NumberContainer number={currentGuess}/>
                <View style={styles.ContainerButton}>
                <Button 
                   title="lower"
                    onPress={() => null}
                   color={colors.primary} />
                <Button 
                title="greater"
                onPress={() => null}
                color={colors.primary}
                />
            </View>
        </Card>
    </View>
 )
}
export default Game