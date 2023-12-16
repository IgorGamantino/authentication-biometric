
import {View,Text, ImageBackground} from "react-native"
import backgroundImg from "../../assets/background.png"
import { styles } from "./styles"
export function Login () {
  return (
    
    <View style={styles.container}>
      <ImageBackground style={styles.img} source={backgroundImg} resizeMode="cover" />
    </View>
  )
}