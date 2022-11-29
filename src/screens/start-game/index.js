import React,{useState} from "react";
import { View,Text, TextInput, Button, TouchableWithoutFeedback,Keyboard, Alert, ScrollView,KeyboardAvoidingView, Platform} from "react-native";
import { Card,Input, NumberContainer} from "../../components";
import { styles } from "./styles";
import colors from "../../constants/colors";

const Startgame = ({onStartGame}) =>{
 const [number, setnumber] = useState("")
 const [selectedNumber, setselectedNumber] = useState(null)
 const [confirmed,setConfirmed] = useState(false)
 const onHandleChange = (value) =>{
    setnumber(value.replace(/[^0-9]/g), "")
 }
 const onHandleReset = () =>{
    setnumber("")
    setConfirmed(false)
    
 }
 const ondHandleConfirm = () =>{
        const chosenNumber = parseInt(number,10)
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
        Alert.alert("Invalid number","Number has to be between 1 al 99",[{text:"okay", style:"destructive", onPress:onHandleReset}]);
    }else{
        setConfirmed(true);
        setselectedNumber(chosenNumber);
        setnumber("");
    }
 }

 const confirmedOutput = () => confirmed ? (  
   <Card style={styles.confirmedContainer} > 
        <Text style={styles.confirmedTitle}> Your selected number</Text>
        <NumberContainer number={selectedNumber}/>
        <Button 
       title="Start Game"
        onPress={() =>onStartGame(selectedNumber)}
        color= {colors.primary}
         />
       
    </Card>
 ) : null ; 
 

    return(
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "position" : "padding" }style={styles.containerScroll}> 
        <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}> 
            <ScrollView style={styles.containerScroll}> 
                <View style={styles.container}>
                        <Text style={styles.title}>INICIO JUEGO</Text>
                        <Card style={styles.inputContainer}>
                                    <Text style={styles.label}>Elegí un número</Text>
                                    <Input 
                                    style={styles.input} 
                                    placeholder="0"
                                    maxLength = {2}
                                    keyboardType="number-pad"
                                    blurOnsubmit
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    onChangeText = {onHandleChange}
                                    value={number}
                                    
                                    />    
                                
                            <View style={styles.buttonContainer}>
                                <Button
                                title="Restart"
                                onPress={onHandleReset}
                                color= {colors.primary}
                                />
                                <Button
                                title="Confirm"
                                onPress={ondHandleConfirm}
                                color= {colors.primary}
                                />
                            </View>
                        </Card>
                        {confirmedOutput()}
                </View>
            </ScrollView>
    </TouchableWithoutFeedback>    
    </KeyboardAvoidingView>
    )
}

export default Startgame