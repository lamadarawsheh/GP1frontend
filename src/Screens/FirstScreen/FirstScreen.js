import { View,Text,Image,StyleSheet,useWindowDimensions,ScrollView } from "react-native";
import Logo from '../../../assets/images/Logoo.png';
import * as React from 'react';
import CustomButton from "../../Component/CustomButton/CustomButton";
import { useNavigation} from '@react-navigation/native';
const FirstScreen=()=>{
    //const {height}=useWindowDimensions();
    const navigation= useNavigation();
    const ongetStartedPressed=()=>{
       navigation.navigate('SignIn');
         };

    return(
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>

        <Text style={styles.title}> Security Guard Tracker </Text>
            
         <Image source={Logo} style={[styles.logo]}  resizeMode="contain" />
             
        

             <CustomButton text="Get Started" onPress={ongetStartedPressed}  />

    
        </View>
        </ScrollView>
    );



};

const styles = StyleSheet.create({
    root: {
        alignItems:'center',
       
        backgroundColor: '#ffffff',
         height:'100%',
         padding:10,
        

      
    },
    logo:{
     // width: 400,
      maxWidth:500,
      maxHeight:500,
     marginBottom:300,
    
     
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        color:'#051C60',
        margin:50,
        padding:10,
    

    },

});
export default FirstScreen;

