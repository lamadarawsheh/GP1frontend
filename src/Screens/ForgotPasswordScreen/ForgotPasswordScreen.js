import React ,{useState}from "react";
import { View,Text,StyleSheet,ScrollView } from "react-native";
import CustomInput from '../../Component/CustomInput';
import CustomButton from "../../Component/CustomButton/CustomButton";
import { useNavigation} from '@react-navigation/native';
const ForgotPasswordScreen=()=>{
    const[Username,setUsername]=useState('');
    const navigation = useNavigation();
       

        const onSignInPressed=()=>{
            navigation.navigate('SignIn');
        };
        const onSendPressed=()=>{
            navigation.navigate('NewPassword');
        };
     
      

    return(
        <ScrollView>
        <View style={styles.root}>
            
            <Text style={styles.title}> Reset your Password </Text>
            
             <CustomInput 
             placeholder="Username" 
             value={Username} 
             setValue={setUsername}/>

             

             <CustomButton text="Send" onPress={onSendPressed}/>

            
        <CustomButton text=" Back to  Sign in " onPress={onSignInPressed} type="TERTIARRY"/>
        </View>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    root: {
        flex:1,
        alignItems:'center',
        padding:10,
        backgroundColor:'#fff',
        height:900
      
    },
 text:{
    color:'gray',
    marginVertical:10,
 },
 link:{
    color:'#FDB075',
    
 },
    title:{
fontSize:24,
fontWeight:'bold',
color:'#051C60',
margin:10,
    },
});
    

export default ForgotPasswordScreen;