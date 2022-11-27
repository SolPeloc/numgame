import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import colors from "../../constants/colors";

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
        width:"80%",
        justifyContent:"center",
        alignItems:"center",
        marginHorizontal: 20,
        paddingVertical:20,
        
    },
    input:{
        minWidth:70,
        fontSize:22,
        paddingVertical:10,
        textAlign:"center",
    },
    buttonContainer:{
        flexDirection:"row",
        width:"70%",
        justifyContent:"space-around",
        marginTop:20,
    },
    label:{
        fontSize:15,
        paddingVertical:5,
        textAlign:"center",
        color:colors.primary,
    },
    confirmedContainer:{
        width: '80%',
        height: 180,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 20,
    },
    confirmedTitle:{
        fontSize: 16,

    },
    

})