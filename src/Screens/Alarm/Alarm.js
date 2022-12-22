import React ,{useState}from "react";
import { SelectList } from 'react-native-dropdown-select-list';
import {View, TouchableOpacity, Button,StyleSheet,ScrollView,Text} from 'react-native';
import {Card,RadioButton, Avatar, Title, Colors} from 'react-native-paper';
const Alarm=()=>{

    const [selected, setSelected] = React.useState("");
    const [id, setid] = React.useState("");
    const [checked, setChecked] = React.useState('Fire');
    const data = [
        {key:'1', value:'Administration building'},
        {key:'2', value:'Student Activities Center'},
        {key:'3', value:'Library'},
        {key:'4', value:'Zafer Al-Masry Auditorium'},
        {key:'5', value:'Building of  Islamic Law and Educational Sciences'},
        {key:'6', value:'Humanities and Economics building'},
        {key:'7', value:'Scientific centers building'},
    ]
  


    const onAlertpressed=()=>{
      fetch("http://192.168.1.104:3000/alarm",{
          method: "post" ,
          crossDomain:true,
          headers:{
              "Content-Type":"application/json",
              Accept:"application/json",
              "Access-Control-Allow-origin":"*",

          },
          body:JSON.stringify({
            selected,
            checked, 
            
            
          }),
      })
      .then(res=>res.json())
      .then((data)=>{
          console.log(data,"alert taken ");

          if(data.status=="ok"){
            alert("your alert done")
             
          }
      });
      

         
      

      
  };
  
  
  
  
    return (
      <View style={styles.root}>
  
  
   <ScrollView>
             
          <Card style={{margin:10,backgroundColor:'#005c99',borderRadius: 10}}>
            <Card.Content>
              <View >
                <Text style={{fontSize:18,color:'#fff',marginBottom:10}}>Select the building</Text>
                <SelectList dropdownTextStyles={{color:'#fff'}}
          setSelected={(val) => setSelected(val)} 
          // setSelected={(val)=>setid(val)}
          
         
          data={data} 
          
          save="value"
          boxStyles={{backgroundColor:'#fff'}}
          placeholder="select"
      />
      
              </View>
            </Card.Content>
          </Card>
        
  
          <Card style={{margin:10,backgroundColor:'#005c99',borderRadius: 10,}}>
            <Card.Content>
            <View>
            <Text style={{fontSize:20,marginBottom:20 ,color:'#fff'}}>Type of Emergency</Text>
            </View>
              <View style={{flexDirection:'column'}}>
                
              <View style={{marginTop:20}} >
            <Text style={{color:'#fff',fontSize:18}}>Fire</Text>
             
              <RadioButton  color={'#fff'} uncheckedColor={"#F0F0F0"} 
            
          value="Fire"
          status={ checked === 'Fire' ? 'checked' : 'unchecked' }
          onPress={() => setChecked('Fire')}
        />
        </View>

               <View>
        <Text style={{color:'#fff',fontSize:18}}>Electrical fault</Text>
        <RadioButton color={'#fff'} uncheckedColor={"#F0F0F0"}
          value="Electrical fault"
          status={ checked === 'Electrical fault' ? 'checked' : 'unchecked' }
          onPress={() => setChecked('Electrical fault')}
        />
        </View>

         <View>
        <Text style={{color:'#fff',fontSize:18}}>
            gas leaekag</Text>
        <RadioButton color={'#fff'} uncheckedColor={"#F0F0F0"}
          value="gas leaekag"
          status={ checked === 'gas leaekag' ? 'checked' : 'unchecked' }
          onPress={() => setChecked('gas leaekag')}
        />
        </View>

<View>
          <Text style={{color:'#fff',fontSize:18}}>
          Elevator malfunction</Text>
        <RadioButton color={'#fff'} uncheckedColor={"#F0F0F0"}
          value="Elevator malfunction"
          status={ checked === 'Elevator malfunction' ? 'checked' : 'unchecked' }
          onPress={() => setChecked('Elevator malfunction')}
        />
             </View>

<View>
        <Text style={{color:'#fff',fontSize:18}}>Crowded gatherings</Text>
        <RadioButton color={'#fff'}  uncheckedColor={"#F0F0F0"}
          value="Crowded gatherings"
          status={ checked === 'Crowded gatherings' ? 'checked' : 'unchecked' }
          onPress={() => setChecked('Crowded gatherings')}
        />
           </View>

  <View>
       <Text style={{color:'#fff',fontSize:18}}>other</Text>
          <RadioButton color={'#fff'} uncheckedColor={"#F0F0F0"} 
            other="other"
            status={ checked === 'other' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('other')}
          />

</View>
              </View>
            </Card.Content>
          </Card>      
  
          
              
              
              <View>

              <TouchableOpacity style={styles.commandButton} onPress={onAlertpressed}>
          <Text style={styles.panelButtonTitle}>ALERT</Text>
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
  });


export default Alarm;