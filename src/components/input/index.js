import React from "react";
import { TextInput } from "react-native";
import { styles } from "./styles";

const Input = ({ style, ...props}) =>{
    return(
         <TextInput {...props} style={{...styles.container, ...styles}}


         />
    )

}
export default Input
