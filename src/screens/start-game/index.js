import React,{useState} from "react";
import { View,Text, TextInput, Button, TouchableWithoutFeedback,Keyboard } from "react-native";
import { Card,Input} from "../../components";
import { styles } from "./styles";
import colors from "../../constants/colors";

const Startgame = () =>{
 const [number, setnumber] = useState("")
 const onHandleChange = (value) =>{
    setnumber(value.replace(/[^0-9]/g), "")
 }

    return(
        <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}> 
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
                            title="Reset"
                            onPress={() => null}
                            color= {colors.primary}
                            />
                            <Button
                            title="Confirm"
                            onPress={() => null}
                            color= {colors.primary}
                            />
                        </View>
                    </Card>
            </View>
    </TouchableWithoutFeedback>    

    )
}

export default Startgame