import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
import { Dimensions } from "react-native";

const {height,width} = Dimensions.get("window")
export const styles = StyleSheet.create({

  container:{
    backgroundColor:colors.background,
    height: height * 0.12,
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