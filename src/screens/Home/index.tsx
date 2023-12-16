
import {View,Text, ImageBackground, TextInput, TouchableOpacity} from "react-native"
import backgroundImg from "../../assets/background.png"
import { styles } from "./styles"


export function Home () {

  return (
    
    <View style={styles.container}>
      <ImageBackground style={styles.img} source={backgroundImg} resizeMode="cover" />


      <View style={styles.wrapperLogin}>
          <Text style={styles.title}>Logado com Sucesso !</Text>


          <Text>Logado com sucesso !</Text>
      </View>
    </View>
  )
}