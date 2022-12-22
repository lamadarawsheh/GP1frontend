import React ,{useState}from "react";
import { View,Text,StyleSheet,ScrollView } from "react-native";

export default function Card(props){
    return(
         
        <View style={styles.card}>
            <View style={styles.cardconntent} >
              {props.children}
            </View>
        
        </View>

    );
};

const styles = StyleSheet.create({
  card:{
    borderRadius:6,
    elevation:10,
    backgroundColor:'#fff',
   shadowOffset:{width:1,height:1},
    shadowColor:'#99ccff',
    shadowOpacity:0.7,
    shadowRadius:3,
    marginHorizontal:2,
    marginVertical:6,
    height:160
  },
  cardconntent:{
    marginHorizontal:16,
    marginVertical:40,
    alignItems:'center'
  }
});
