import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({

  container:{
    backgroundColor:colors.background,
    height:100,
    justifyContent:"center",
    alignItems:"center",
    paddingTop:20,

  },
title:{
  fontSize: 24,
  color:colors.black,
  fontFamily:"lato-Bold"

}

})