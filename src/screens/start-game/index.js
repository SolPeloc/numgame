import React from "react";
import { View,Text, TextInput, Button } from "react-native";
import { styles } from "./styles";

const Startgame = () =>{

    return(
        <View style={styles.container}>
                <Text style={styles.title}>INICIO JUEGO</Text>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Elegí un número</Text>
                    <TextInput style={styles.input} placeholder="0"/>    
                </View>
            <View style={styles.buttonContainer}>
                <Button
                title="Reset"
                onPress={() => null}
                color= "#495057" 
                />
                <Button
                title="Confirm"
                onPress={() => null}
                color= "#495057" 
                />
            </View>
        </View>

    )
}

export default Startgame