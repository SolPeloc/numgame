import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const styles = StyleSheet.create({

    container:{
        flex: 1,
        alignItems: "center",
        marginVertical:15,

    },
    title:{
        fontSize:18,
        textAlign:"center",
        paddingVertical:20,
    },
    inputContainer:{
        justifyContent:"center",
        alignItems:"center",
        marginHorizontal: 20,
    },
    input:{
        width:"100%",
        borderBottomColor:"#495057",
        borderBottomWidth:1,
        minWidth:70,
        fontSize:22,
        paddingVertical:10,
        textAlign:"center"



    },
    buttonContainer:{
        flexDirection:"row",
        width:"70%",
        justifyContent:"space-around",
        marginTop:20
    },
    label:{
        fontSize:15,
        paddingVertical:5,
        textAlign:"center",
        color:"#495057"
    }
})