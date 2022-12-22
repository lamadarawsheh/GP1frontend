import React ,{useState}from "react";
import { View,Text,StyleSheet,ScrollView } from "react-native";
import CustomInput from '../../Component/CustomInput';
import CustomButton from "../../Component/CustomButton/CustomButton";
import { useNavigation} from '@react-navigation/native';
const ConfirmEmailScreen=()=>{
    const[Code,setCode]=useState('');
    const navigation = useNavigation();

        const onSignInPressed=()=>{
            navigation.navigate('SignIn');
        };
        const onConfirmPressed=()=>{
            navigation.navigate('Home');
        };
     
        const onResendPressed=()=>{
            console.warn("onResendPressed" );
        };

    return(
        <ScrollView>
        <View style={styles.root}>
            
            <Text style={styles.title}> Confirm your email </Text>
            
             <CustomInput 
             placeholder="Enter your Confirmation code" 
             value={Code} 
             setValue={setCode}/>

             

             <CustomButton text="Confirm" onPress={onConfirmPressed}/>

            
           
 <CustomButton text="Resend Code " onPress={onResendPressed} />

<CustomButton text=" Back to  Sign in " onPress={onSignInPressed} type="TERTIARRY"/>
        </View>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    root: {
        alignItems:'center',
        padding:10,
      
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
    

export default ConfirmEmailScreen;