import React ,{useState}from "react";
import { View,Text,StyleSheet,ScrollView } from "react-native";
import CustomInput from '../../Component/CustomInput';
import CustomButton from "../../Component/CustomButton/CustomButton";
import { useNavigation} from '@react-navigation/native';
const NewPasswordScreen=()=>{
    const[Code,setCode]=useState('');
    const[newPasswod,setnewPassword]=useState('');
    const navigation = useNavigation();   

        const onSignInPressed=()=>{
            navigation.navigate('SignIn');
        };
        const onSubmitPressed=()=>{
            navigation.navigate('Home');
        };
     
      

    return(
        <ScrollView>
        <View style={styles.root}>
            
            <Text style={styles.title}> Reset your Password </Text>
            
             <CustomInput 
             placeholder="Code" 
             value={Code} 
             setValue={setCode}/>
              <CustomInput 
             placeholder="Enter your new Password " 
             value={newPasswod} 
             setValue={setnewPassword}/>

             

             <CustomButton text="Submit" onPress={onSubmitPressed}/>

            
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
        height:900,
        backgroundColor:'#fff'

      
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
    

export default NewPasswordScreen;