import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const {height,width} = Dimensions.get("window")
export const styles = StyleSheet.create({
    container:{
    flex:1,
    padding:20,
    alignItems:"center",

      
    },
    content:{
      width: '80%',
      height: height * 0.23,
      minHeight:200,
      alignItems:"center",
      justifyContent:"space-around"
    },
    title:{
      fontSize:20,

    },
ContainerButton:{
     width:"100%",
     flexDirection:"row",
     justifyContent:"space-around"
},

})