import React ,{useState}from "react";
import { View,Text,StyleSheet,ScrollView } from "react-native";
import CustomInput from '../../Component/CustomInput';
import CustomButton from "../../Component/CustomButton/CustomButton";
import { useNavigation} from '@react-navigation/native';
const SignUpScreen=()=>{
    const[username,setUsername]=useState('');
    const [email,setEmail]=useState('');
    const[passworad,setPassword]=useState('');
    const[phoneNumber,setphoneNumber]=useState('');
    const[passworadRepeat,setpassworadRepeat]=useState('');
      
    const navigation = useNavigation();

        const onSignInPressed=()=>{
           navigation.navigate('SignIn');
        };
        const onRegisterPressed=()=>{
            fetch("http://172.19.58.168:3000/signup",{
                method: "post" ,
                crossDomain:true,
                headers:{
                    "Content-Type":"application/json",
                    Accept:"application/json",
                    "Access-Control-Allow-origin":"*",

                },
                body:JSON.stringify({
                    username,
                    email, 
                    phoneNumber,
                    passworad,
                    passworadRepeat, 
                }),
            })
            .then(res=>res.json())
            .then((data)=>{
                console.log(data,"employee register");

                if(data.status=="ok"){
                    navigation.navigate('ConfirmEmail');
                }
            });
            

               
            

            
        };

        
        const onTermsOfUsePressed=()=>{
            console.warn("onTermsOfUsePressed" );
        };
        const onPrivacyPolicyPressed=()=>{
            console.warn("onPrivacyPolicyPressed" );
        };

    return(
        <ScrollView>
        <View style={styles.root}>
            
            <Text style={styles.title}> Create an account </Text>
            
             <CustomInput 
             placeholder="Username" 
             value={username} 
             setValue={setUsername}/>

               <CustomInput 
             placeholder="Email" 
             value={email} 
             setValue={setEmail}/>

              <CustomInput 
             placeholder="Phone Number" 
             value={phoneNumber} 
             setValue={setphoneNumber}/>

             <CustomInput 
             placeholder="Password" 
             value={passworad} 
             setValue={setPassword}
             secureTextEntry={true} />

             <CustomInput 
             placeholder="Repeat Password" 
             value={passworadRepeat} 
             setValue={setpassworadRepeat}
             secureTextEntry={true} />

             <CustomButton text="Register" onPress={onRegisterPressed}/>

            <Text style={styles.text}>By registering ,you confirm that you accept our  <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text> {' '}
            and{' '} <Text style={styles.link} onPress={onPrivacyPolicyPressed}>privacy policy</Text> </Text>

     


<CustomButton text=" have an account? Sign in " onPress={onSignInPressed} type="TERTIARRY"/>
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
    color:'#0066ff',
    
 },
    title:{
fontSize:24,
fontWeight:'bold',
color:'#3B71F3',
margin:10,
    },
});
    

export default SignUpScreen;