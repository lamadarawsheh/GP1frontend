import React ,{useState}from "react";
import { View,Text,Image,StyleSheet,useWindowDimensions,ScrollView } from "react-native";
import Logo from '../../../assets/images/Logoo.png';
import CustomInput from '../../Component/CustomInput';
import CustomButton from "../../Component/CustomButton/CustomButton";
import { useNavigation} from '@react-navigation/native';

const SignInscreen=()=>{
    const [email,setEmail]=useState('');
    const[passworad,setPassword]=useState("");
    const {height}=useWindowDimensions();
    const navigation= useNavigation();

    const onSignInPressed=()=>{
    //     fetch("http://172.19.58.168:3000/signin",{
    //         method: "post" ,
    //         crossDomain:true,
    //         headers:{
    //             "Content-Type":"application/json",
    //             Accept:"application/json",
    //             "Access-Control-Allow-origin":"*",

    //         },
    //         body:JSON.stringify({
    //             email,
    //             passworad, 
             
    //         }),
    //     })
    //     .then(res=>res.json())
    //     .then((data)=>{
    //         console.log(data,"employee signin");
    //         if(data.status=="ok"){
          
    //            navigation.navigate('Home',{
    //             paramKey:data.data
    //            })
    //         }  
    //     });
       navigation.navigate("Home");
    
        };

        
        const onForgotPasswordPressed=()=>{
        
            navigation.navigate("ForgotPassword");
          //  navigation.navigate("Home");
        };
        

        const onSignUpPressed=()=>{
            navigation.navigate("SignUp");
        };

    return(
        <ScrollView>
        <View style={styles.root}>
            
            
        <Text style={styles.title}> Sign In  </Text>
             <CustomInput 
             placeholder="email" 
             value={email} 
             setValue={setEmail}/>

             <CustomInput 
             placeholder="Password" 
             value={passworad} 
             setValue={setPassword}
             secureTextEntry={true} />

             <CustomButton text="Sign In" onPress={onSignInPressed}/>

             <CustomButton text="Forgot Password?" onPress={onForgotPasswordPressed} type="TERTIARRY"/>

        

<CustomButton text="Don't have an account? Create one" onPress={onSignUpPressed} type="TERTIARRY"/>
        </View>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    root: {
        flex:1,
        alignItems:'center',
       // padding:10,
        backgroundColor:'#fff',
        height:900,
      
    },
    
    title:{
        fontSize:26,
        fontWeight:'bold',
        color:'#0066ff',
        margin:50,
        padding:10,
    

    },
});
    

export default SignInscreen;