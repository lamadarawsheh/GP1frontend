import React from "react";
import { View,Text,Image,StyleSheet,TextInput,Pressable} from "react-native";

const CustomButton =({onPress,text,type="PRIMARY",bgColor,fgColor})=>{
return(
<Pressable 
onPress={onPress} 
style={[styles.container,styles[`container_${type}`],
bgColor ? {backgroundColor:bgColor}:{},
]}>
    <Text 
    style={[styles.text,
        styles[`text_${type}`],
        fgColor ? {color:fgColor}:{},
        ]}>
        {text}
    </Text>
</Pressable>
);
};

const styles=StyleSheet.create({
    container:{
width:'70%',
padding:15,
marginVertical:5,
alignItems:'center',
borderRadius:10,


},
    container_PRIMARY:{
        backgroundColor:'#0066ff',
    },
    container_TERTIARRY:{},

    container_SECONDARY:{
  borderColor:'#FFF',
  backgroundColor:'#FFF',
   borderWidth:2,
   
    },

    text:{
        fontWeight:'bold',
        color:'white',
        fontSize:20,
    },
    text_TERTIARRY:{
        color:'gray'
    },
    text_SECONDARY:{
    color:'#3B71F3',
    },
});

export default CustomButton;