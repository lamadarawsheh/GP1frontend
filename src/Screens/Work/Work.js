import React, { Component } from "react";
import { View,Text,StyleSheet  } from "react-native";
import Floors from "../../Component/Floors/Floors";
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
export default function Work (){

    return(
<View style={styles.container}>
    <Text style={{fontSize:24,color:'#3B71F3',paddingLeft:10}}>
       Monitoring the work for this shift 
    </Text>
    <Text style={{fontSize:20,color:'#3B71F3',marginTop:10}}> building name </Text>
    <View style={{margin:20}}>
                <View style={styles.floor} >
                    <Floors>
                        <View>
                        <Text style={{fontSize:24,alignItems:'baseline'}}> First Floor </Text>
                      <Ionicons name="time" size={24} color="#4765A9"  />
                       <Text style={{fontSize:18,color:"#4765A9"}}> 8-8:20 PM</Text>
                        </View>
                       <View style={{marginLeft:120}}><Ionicons name="finger-print-sharp" size={30} color="black" /></View>
                       <View style={{marginLeft:50}} ><MaterialCommunityIcons name="qrcode-scan" size={30} color="black" /></View>
                       
                  </Floors>
                 
                  <Floors>
                        <View>
                        <Text style={{fontSize:24,alignItems:'baseline'}}> Second Floor </Text>
                      <Ionicons name="time" size={24} color="#4765A9"  />
                       <Text style={{fontSize:18,color:"#4765A9"}}> 8:20-8:40 PM</Text>
                        </View>
                       <View style={{marginLeft:90}}><Ionicons name="finger-print-sharp" size={30} color="black" /></View>
                       <View style={{marginLeft:40}} ><MaterialCommunityIcons name="qrcode-scan" size={30} color="black" /></View>
                       
                  </Floors>

                  <Floors>
                        <View>
                        <Text style={{fontSize:24,alignItems:'baseline'}}> Third Floor </Text>
                      <Ionicons name="time" size={24} color="#4765A9"  />
                       <Text style={{fontSize:18,color:"#4765A9"}}> 8:40-9 PM</Text>
                        </View>
                       <View style={{marginLeft:120}}><Ionicons name="finger-print-sharp" size={30} color="black" /></View>
                       <View style={{marginLeft:40}} ><MaterialCommunityIcons name="qrcode-scan" size={30} color="black" /></View>
                       
                  </Floors>
                

                
                </View>


               </View>
</View>

    );
};


const styles = StyleSheet.create({
    container:{
        paddingTop:40,
        flex:1,
        backgroundColor:'#fff',
    },
    floor:{
        flex:1,
        flexDirection:'column',
        justifyContent:'space-between'
    }
});
