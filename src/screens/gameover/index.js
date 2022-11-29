import React, { useState, useEffect } from "react";
import { styles } from "./styles";
import { View,Text, Image, Button, Dimensions } from "react-native";
import {Card} from "../../components"
import colors from "../../constants/colors";
const GameOver = ({rounds, selectedNumber, onRestart}) =>{
       const [isportait, setisportait] = useState(true)
       const onPortait = () =>{
              const dim = Dimensions.get("screen")
              return dim.height >= dim.width
       }
       const statePortait = () =>{
              setisportait(onPortait)
       }
      useEffect(() => {
       const suscription = Dimensions.addEventListener("change", statePortait)
       return () => {
              suscription.remove()
       }
      });
return (
        <View style={styles.container}>
        <Card style={isportait ? styles.content : styles.contentLandscape}>
            <Image source={{uri :"https://play-lh.googleusercontent.com/shAAX3m_CJQyahe1eIochbdEqH7FDiLEQ9i5WdI8DwNj2N9auke35k8CRmyL0mh7ULs "}}
            style={styles.image}/>
           <Text style={styles.textContent}>N° de rounds: {rounds}</Text>
            <Text style={styles.textContent}> N° seleccionado : {selectedNumber}</Text>
            <Button
               title="Restart" 
               onPress={onRestart}   
               color={colors.background} />
        </Card>

        </View>
        
 )
    
}

export default GameOver