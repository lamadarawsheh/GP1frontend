import React from "react";
import { View,Text,StyleSheet} from "react-native";
import Card from "../Card";
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation} from '@react-navigation/native';
const Header=()=>{
    const navigation= useNavigation();
return(
    <View style={styles.Header}>
       
       <View style={styles.icon}>

        <View> 
        <Text style={styles.headertext}> Welcome to Home  </Text>
        </View>
        
      <View style={styles.notif}>
   
      <Ionicons name="notifications-outline" size={30} color="#0066ff" />
      </View>
        
     
       <View style={styles.logout}>
       <SimpleLineIcons name="logout" size={30} color="#0066ff"  onPress={() => navigation.navigate('SignIn')} />

       </View>
      
      
  
       
       </View>

    
    
    </View>
)
};

const styles = StyleSheet.create({
Header:{
    flex:1,
    height:20,
    backgroundColor:'#fff',
    paddingBottom:10,
    shadowColor:'#fff',
    elevation:0
  

    

},
headertext:{
    textAlign:'left',
    fontSize:26,
    fontWeight:'normal',
    color:'#000'

},
icon:{
    flex:1,
    flexDirection:'row',
   alignItems:'flex-end',
    marginTop:-100,
    marginRight:20,
   //justifyContent: 'space-between',
  
},
notif:{
 marginLeft:100
},
logout:{
    marginLeft:30
}



});

export default Header;
