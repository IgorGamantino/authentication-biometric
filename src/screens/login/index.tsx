
import {View,Text, ImageBackground, TextInput, TouchableOpacity} from "react-native"
import backgroundImg from "../../assets/background.png"
import { styles } from "./styles"
import {useNavigation} from '@react-navigation/native';

import * as LocalAuthentication from "expo-local-authentication"
import { StackNavigationProp } from "@react-navigation/stack";



export function Login () {
  
  const { navigate } = useNavigation();
async function verifyAvailableAuthentication() {
    const isCompatible = await LocalAuthentication.hasHardwareAsync();

    return isCompatible
}


 async function handleAuthentication() {
    const auth = await LocalAuthentication.authenticateAsync({
      promptMessage: "Login",
      fallbackLabel: "Authenticação falhou, tente com sua senha!"
    })

    if(auth){

      console.log('ola')
     navigate('Home');
    }
  
 }

  return (
    
    <View style={styles.container}>
      <ImageBackground style={styles.img} source={backgroundImg} resizeMode="cover" />


      <View style={styles.wrapperLogin}>
          <Text style={styles.title}>Login</Text>
         <TextInput placeholder="E-mail" placeholderTextColor="#808080" style={styles.input}/>
         <TextInput  placeholder="Password"  placeholderTextColor="#808080" style={styles.input}/>

         <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton} onPress={handleAuthentication}>Entrar</Text>
         </TouchableOpacity>
      </View>
    </View>
  )
}