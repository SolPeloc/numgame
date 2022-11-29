import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const {hight, width }= Dimensions.get("window")
export const styles = StyleSheet.create({
        container:{
            flex:1,
            justifyContent:"center",
            alignItems:"center",
            fontFamily: "lato-Bold"

        },
        content:{
            width:"80%",
            paddingVertical:20,
            justifyContent:"center",
            alignItems:"center"
        },
        contentLandscape:{
          flex: 1,
          width:"80%",
          paddingVertical:20,
          flexDirection:"row",
          justifyContent:"space-around",
          alignItems:"center"
        },

        image:{
            width:200,
            height: 200
        },
        textContent:{
            fontSize: 16,
            textAlign:"center",
            paddingVertical:10,
            fontFamily:"lato-Italic"
        },
})