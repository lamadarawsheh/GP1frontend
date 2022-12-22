import React ,{useState}from "react";
import { View,Text,StyleSheet,ScrollView } from "react-native";
import Card from "../../Component/Card";
import Header from "../../Component/Header/Header";
import { Ionicons } from '@expo/vector-icons';
import CustomButton from "../../Component/CustomButton/CustomButton";
import { useNavigation} from '@react-navigation/native';
export default function StartShift(){
    const navigation= useNavigation();

    const onshiftPressed=()=>{
        navigation.navigate("Work");
    };
    return(
            <View style={styles.container}>
              
               <View>
               
                <Text style={{fontSize:24,alignItems:'baseline',marginTop:18 , marginLeft:7,color:'#3B71F3'}}> Start your shifts for today </Text> 
              <View style={{margin:20}}>
                <View >
                <Card>
                <CustomButton text=" First shift" type="SECONDARY"  bgColor="#FFF" onPress={onshiftPressed}
                  fgColor="#000"/> 
                      <Ionicons name="time" size={24} color="#4765A9"  />
                       <Text style={{fontSize:18,color:"#4765A9"}}> 8-10 PM</Text>
         
                </Card>
                </View>


              <View>
              <Card>
              <CustomButton text=" Second shift" type="SECONDARY"  bgColor="#FFF" onPress={onshiftPressed}
                  fgColor="#000"/> 
                      <Ionicons name="time" size={24} color="#4765A9"  />
                       <Text style={{fontSize:18,color:"#4765A9"}}> 10-12 PM</Text>
                </Card>
              </View>
             <View>
             <Card>
             <CustomButton text=" Third shift" type="SECONDARY"  bgColor="#FFF" onPress={onshiftPressed}
                  fgColor="#000"/> 
                      <Ionicons name="time" size={24} color="#4765A9"  />
                       <Text style={{fontSize:18,color:"#4765A9"}}> 12-2 PM</Text>
                </Card>

             </View>
               <View>
               <Card>
               <CustomButton text=" Fourth shift" type="SECONDARY"  bgColor="#FFF" onPress={onshiftPressed}
                  fgColor="#000"/> 
                      <Ionicons name="time" size={24} color="#4765A9"  />
                       <Text style={{fontSize:18,color:"#4765A9"}}> 2-4 PM</Text> 
                </Card>
           
               </View>
               </View>
               </View>
                

             </View>
            
        
    

    );
};


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff',
       flexDirection:'column',
       
   
        
      
      

}



});



