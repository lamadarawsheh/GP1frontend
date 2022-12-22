import React ,{useState}from "react";
import Checkbox from 'expo-checkbox';
import { SelectList } from 'react-native-dropdown-select-list';
import {View, TouchableOpacity, Button,StyleSheet,ScrollView,Text,Alert} from 'react-native';
import {Card,RadioButton, Avatar, Title, Colors} from 'react-native-paper';

const Absence=()=>{
 
  const [selected, setSelected] = React.useState("8-10 PM");
  const [id, setid] = React.useState("");

  const [isChecked0, setChecked0] = useState(false);
  const [isChecked1, setChecked1] = useState(false);
  const [isChecked2, setChecked2] = useState(false);
  const [isChecked3, setChecked3] = useState(false);
  const [isChecked4, setChecked4] = useState(false);
  const [isChecked00, setChecked00] = useState(false);
  const [isChecked11, setChecked11] = useState(false);
  const [isChecked22, setChecked22] = useState(false);
  const [isChecked33, setChecked33] = useState(false);
  const [isChecked44, setChecked44] = useState(false);
  const data = [
      {key:'1', value:'8-10 PM'},
      {key:'2', value:'10-12 PM'},
      {key:'3', value:'12-2 PM'},
      {key:'4', value:'2-4 PM'},
      
  ]

  const showConfirmDialog = (num,val) => {
    return Alert.alert(
      "Are your sure?",
      "Are you sure you want to send this form ?",
      [
        // The "Yes" button
        {
          text: "Yes",
          onPress: () => {
            onAlertpressed(num,val);
          },
        },
        // The "No" button
        // Does nothing but dismiss the dialog when tapped
        {
          text: "No",
        },
      ]
    );
  };

  const onAlertpressed=(num,val)=>{
   
    if (num==1)
    {let shiftnum;
        shiftnum=val;
      console.log(shiftnum);
      const  v =new Date().getDay();
      console.log(v);
      if (v==5||v==6)
      {
        alert("No schedual avilable for today")
      }
      else{
        let id='406382010';
        fetch("http://192.168.1.104:3000/shiftabsence",{
         method: "post" ,
         crossDomain:true,
         headers:{
             "Content-Type":"application/json",
             Accept:"application/json",
             "Access-Control-Allow-origin":"*",
  
         },
         body:JSON.stringify({
             id:id ,
          shiftnum:shiftnum,
          day:v,
         }),
     })
     .then(res=>res.json())
     .then((data)=>{
  
         console.log(data,"ok");
        
          //  //navigation.navigate("Schedule");
          //   navigation.navigate('Schedule',{
          //    sun:data.sharrsun,mon:data.sharrmon,tue:data.sharrtue,wed:data.sharrwed,thu:data.sharrthu
          //   })
         
     });
      }
     


    }
     else   if (num==2)
     {//thiswabsence
    //   console.log(isChecked0);
    //   console.log(isChecked1);
    let id='406382010';
    fetch("http://192.168.1.104:3000/thiswabsence",{
     method: "post" ,
     crossDomain:true,
     headers:{
         "Content-Type":"application/json",
         Accept:"application/json",
         "Access-Control-Allow-origin":"*",

     },
     body:JSON.stringify({
         id:id ,
     Sunday:isChecked0,
     Monday:isChecked1,
     Tuesday:isChecked2,
     Wednesday:isChecked3,
     Thursday:isChecked4,
     }),
 })
 .then(res=>res.json())
 .then((data)=>{

     console.log(data,"ok");
    
      //  //navigation.navigate("Schedule");
      //   navigation.navigate('Schedule',{
      //    sun:data.sharrsun,mon:data.sharrmon,tue:data.sharrtue,wed:data.sharrwed,thu:data.sharrthu
      //   })
     
 });



     }
     if (num==3)
     {
        let id='406382010';
        fetch("http://192.168.1.104:3000/nextwabsence",{
         method: "post" ,
         crossDomain:true,
         headers:{
             "Content-Type":"application/json",
             Accept:"application/json",
             "Access-Control-Allow-origin":"*",
    
         },
         body:JSON.stringify({
             id:id ,
         Sunday:isChecked00,
         Monday:isChecked11,
         Tuesday:isChecked22,
         Wednesday:isChecked33,
         Thursday:isChecked44,
         }),
     })
     .then(res=>res.json())
     .then((data)=>{
    
         console.log(data,"ok");
        
          //  //navigation.navigate("Schedule");
          //   navigation.navigate('Schedule',{
          //    sun:data.sharrsun,mon:data.sharrmon,tue:data.sharrtue,wed:data.sharrwed,thu:data.sharrthu
          //   })
         
     });
     }
    
 
    // fetch("http://192.168.1.104:3000/alarm",{
    //     method: "post" ,
    //     crossDomain:true,
    //     headers:{
    //         "Content-Type":"application/json",
    //         Accept:"application/json",
    //         "Access-Control-Allow-origin":"*",

    //     },
    //     body:JSON.stringify({
    //       selected,
    //       checked, 
          
          
    //     }),
    // })
    // .then(res=>res.json())
    // .then((data)=>{
    //     console.log(data,"alert taken ");

    //     if(data.status=="ok"){
    //       alert("your alert done")
           
    //     }
    // });
    

       
    

    
};




  return (
    <View style={styles.root}>


 <ScrollView>
           
        <Card style={{margin:10,backgroundColor:'#005c99',borderRadius: 10}}>
          <Card.Content>
            <View >
              <Text style={{fontSize:25,fontWeight:'bold',color:'white'}}>Today ..?</Text>
              <Text style={{fontSize:20,color:'#fff',marginBottom:10,marginTop:10}}>Please select the shift :</Text>
              <SelectList dropdownTextStyles={{color:'#fff'}}
        setSelected={(val) => setSelected(val)} 
        // setSelected={(val)=>setid(val)}
        
       
        data={data} 
        
        save="value"
        boxStyles={{backgroundColor:'#fff'}}
        placeholder="8-10 PM"
    />
    <Button title="Apply" color={'white'} onPress={()=>{showConfirmDialog(1,selected)}}></Button>
            </View>
          </Card.Content>
        </Card>
      

        <Card style={{margin:10,backgroundColor:'#005c99',borderRadius: 10,}}>
          <Card.Content>
          <View>
          <Text style={{fontSize:25,fontWeight:'bold',color:'white',marginBottom:10}}>A day this week ..?</Text>
          <Text style={{fontSize:20 ,color:'#fff'}}>Please select the day:</Text>
          </View>
            <View style={{flexDirection:'column'}}>
              
            <View style={styles.section}>
        <Checkbox style={styles.checkbox} value={isChecked0} onValueChange={setChecked0} />
        <Text style={styles.paragraph}>Sunday</Text>
      </View>
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked1}
          onValueChange={setChecked1}
          // color={isChecked1 ? '#4630EB' : undefined}
        />
        <Text style={styles.paragraph}>Monday</Text>
      </View>
      <View style={styles.section}>
        <Checkbox style={styles.checkbox}  value={isChecked2} onValueChange={setChecked2} />
        <Text style={styles.paragraph}>Tuesday</Text>
      </View>
      <View style={styles.section}>
        <Checkbox style={styles.checkbox}  value={isChecked3} onValueChange={setChecked3} />
        <Text style={styles.paragraph}>Wednesday</Text>
      </View>
      <View style={styles.section}>
        <Checkbox style={styles.checkbox}  value={isChecked4} onValueChange={setChecked4} />
        <Text style={styles.paragraph}>Thursday</Text>
      </View>

            </View>
            <Button title="Apply" color={'white'} onPress={()=>{showConfirmDialog(2,2)}} ></Button>
          </Card.Content>
        </Card>      

        
        <Card style={{margin:10,backgroundColor:'#005c99',borderRadius: 10,}}>
          <Card.Content>
          <View>
          <Text style={{fontSize:25,fontWeight:'bold',color:'white',marginBottom:10}}>A day Next week ..?</Text>
          <Text style={{fontSize:20 ,color:'#fff'}}>Please select the day:</Text>
          </View>
            <View style={{flexDirection:'column'}}>
              
            <View style={styles.section}>
        <Checkbox style={styles.checkbox} value={isChecked00} onValueChange={setChecked00} />
        <Text style={styles.paragraph}>Sunday</Text>
      </View>
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked11}
          onValueChange={setChecked11}
          // color={isChecked1 ? '#4630EB' : undefined}
        />
        <Text style={styles.paragraph}>Monday</Text>
      </View>
      <View style={styles.section}>
        <Checkbox style={styles.checkbox}  value={isChecked22} onValueChange={setChecked22} />
        <Text style={styles.paragraph}>Tuesday</Text>
      </View>
      <View style={styles.section}>
        <Checkbox style={styles.checkbox}  value={isChecked33} onValueChange={setChecked33} />
        <Text style={styles.paragraph}>Wednesday</Text>
      </View>
      <View style={styles.section}>
        <Checkbox style={styles.checkbox}  value={isChecked44} onValueChange={setChecked44} />
        <Text style={styles.paragraph}>Thursday</Text>
      </View>

            </View>
            <Button title="Apply" color={'white'} onPress={()=>{showConfirmDialog(3,3)}}></Button>
          </Card.Content>
        </Card>      

            
            
            
        


        

        
        </ScrollView>
    </View>
   
  );
   


  


   
}

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
section: {
  marginTop:10,
  flexDirection: 'row',
  alignItems: 'center',
},
paragraph: {
  fontSize: 15,
  color:'white',
  fontWeight:'500',
},
checkbox: {
  margin: 8,
},
});

export default Absence;