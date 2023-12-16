import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center"
    },

    img: {
      flex: 1,
      opacity: 0.80,
      backgroundColor: "#02bbff"
    },

    wrapperLogin: {
      position: "absolute",
      backgroundColor: "#fff",
      width: 288,
      height: 283,
      left: 50,
      right: 50,
      top: 80,
      borderRadius: 15,
      paddingHorizontal: 20,

      alignItems: "center",
      justifyContent: "center",

      borderTopWidth: 40,
      borderColor: "#02bbff" 

    },

    title: {
      position: "absolute",
      top: -30,
      left: 20,
      color: "#FFF",
      fontSize: 15,
      fontWeight: "700"
    },

    input : {
      width: "100%",
      borderColor: "#E6E6E6",
      height: 40,
      paddingHorizontal: 10,
      borderWidth: 1,
      backgroundColor: "#F2F2F2",
      borderRadius: 6,
      marginBottom: 20,
      color: "#808080",
    },

    button: {
      backgroundColor: "#192E88",
      width: "100%",
      borderRadius: 15,
      height: 40,
    
      alignItems: "center",
      justifyContent: "center"
      
    },

    textButton: {
      color: "#ffff",
      fontSize: 15
    }

    
})