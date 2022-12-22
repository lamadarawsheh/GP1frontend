import React from "react";
import { View,Text,Image,StyleSheet,TextInput} from "react-native";

const CustomInput =({value,setValue,placeholder,secureTextEntry})=>{
    return(
        <View style={styles.container}>
<TextInput value={value} onChangeText={setValue}
placeholder={placeholder} style={styles.input}
secureTextEntry={secureTextEntry}
/>
        </View>
    );

}
const styles=StyleSheet.create({
    container:{
  backgroundColor: 'white',
  width:'80%',
  borderColor:'#99ccff',
  borderWidth:3,
  borderRadius:10
,paddingHorizontal:10,
paddingVertical:20,
marginVertical:10,
    },
    input:{},
}

);
export default CustomInput