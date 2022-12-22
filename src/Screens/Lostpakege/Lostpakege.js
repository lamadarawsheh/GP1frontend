import React, {useState} from 'react';
import {Card,RadioButton, Avatar, Title, Colors} from 'react-native-paper';
import { SelectList } from 'react-native-dropdown-select-list'
import {View, TouchableOpacity, Button, TextInput} from 'react-native';
import { Text,Image,StyleSheet,ScrollView,Dimensions } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const Lostpakege=()=>{
  const [selectedImage, setSelectedImage] = useState(null);
  const [selected, setSelected] = React.useState("");
  const [disc, setdisc] = useState(""); 


 
  const data = [
    {key:'1', value:'Administration building'},
    {key:'2', value:'Student Activities Center'},
    {key:'3', value:'Library'},
    {key:'4', value:'Zafer Al-Masry Auditorium'},
    {key:'5', value:'Building of  Islamic Law and Educational Sciences'},
    {key:'6', value:'Humanities and Economics building'},
    {key:'7', value:'Scientific centers building'},
]

  const onAddpressed=()=>{
    fetch("http://localhost:3000/addpackage",{
        method: "post" ,
        crossDomain:true,
        headers:{
            "Content-Type":"application/json",
            Accept:"application/json",
            "Access-Control-Allow-origin":"*",

        },
        body:JSON.stringify({
          selected,
          disc, 
          selectedImage,
          
        }),
    })
    .then(res=>res.json())
    .then((data)=>{
        console.log(data,"alert taken ");

        if(data.status=="ok"){
          alert("your Request done")
           
        }
    });
    

       
    

    
};


 const  opencamera = async () => {
  let r= await ImagePicker.launchCameraAsync({});
  if (!r.canceled) {
          
    setSelectedImage(r.uri);
  } else {
    alert("You did not select any image.");
  }
 };




  return (
    <View style={styles.root}>


 <ScrollView>

         <Text style={{fontSize:24,color:'#005c99',margin:10,fontWeight:'600'}} > Add package here </Text>

        <Card style={{margin:10,backgroundColor:'#005c99',borderRadius: 10,marginTop:20}}>
          <Card.Content>
            <View>
              <Text style={{fontSize:18,color:'#fff',marginBottom:10}}>package location:</Text>
              <SelectList  dropdownTextStyles={{color:'#fff'}}
        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="value"
        boxStyles={{backgroundColor:'#fff'}}
        placeholder="select option"
    />
    
            </View>
          </Card.Content>
        </Card>
      

        <Card style={{margin:10,backgroundColor:'#005c99',borderRadius: 10}}>
          <Card.Content>
          <View>
          <Text style={{fontSize:18,color:'#fff',marginBottom:10}}>package discription: </Text>
          <TextInput style={{borderColor:'#fff',borderWidth:2,height:50,backgroundColor:'#fff', borderRadius: 10,}} value={disc} onChangeText={(disc) => setdisc(disc)}
           placeholder="your discrption "
           placeholderTextColor="steelblue"></TextInput>
         
          </View>
            
        
          </Card.Content>
        </Card>      


        <Card style={{margin:10,backgroundColor:'#005c99',borderRadius: 10}}>
          <Card.Content>
            <View>
              <Text style={{fontSize:18,color:'#fff',marginBottom:10}}>insert photo :</Text>
              <TouchableOpacity style={styles.commandButton} onPress={opencamera}>
          <Text style={styles.panelButtonTitle}>Open Camera</Text>
        </TouchableOpacity>

        <View>
      {/* <Image  style={styles.avatarImage}
           source={selectedImage}/> */}

</View>

            
            </View>
          </Card.Content>
        </Card>


        
            <View >
              
            <TouchableOpacity style={styles.commandButton} onPress={onAddpressed}>
          <Text style={styles.panelButtonTitle}>Add</Text>
        </TouchableOpacity>
           
    
            </View>
       
        </ScrollView>
    </View>
   
  );
   


  

};

const styles = StyleSheet.create({
  root: {
    flex:1,
    backgroundColor:'#fff',
    
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#005c99',
    marginTop: 15,
    width:'95%',
    alignItems: 'center',
    marginLeft:10
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
avatarImage:{
    height:200,
    width:200,
}

});
  
export default Lostpakege;