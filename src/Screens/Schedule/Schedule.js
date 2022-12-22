
import React, {useState} from 'react';
import {View, TouchableOpacity,Text} from 'react-native';
import {Agenda} from 'react-native-calendars';
import {Card, Avatar} from 'react-native-paper';
import { useRoute } from '@react-navigation/native';


const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  };
  
//const format = (date = new Date()) => dateFns.format(date, 'YYYY-MM-DD');
let f="lkk";
const Schedule=()=>{
 
  const route = useRoute();
 const sun= route .params.sun;
 const mon= route .params.mon;
 const tue= route .params.tue;
 const wed= route .params.wed;
 const thu= route .params.thu;


//  console.log(sun);
//  console.log(mon);
//  console.log(tue);
//  console.log(wed);
//  console.log(thu);

    const [items, setItems] = useState({});
    // {route.params.sun}
    const loadItems = (day) => {
     
      
     
      // day.dateString.getDay
      // .getDay()
     //console.log(day.dateString);
    
//     if(v==0)
//     {
//  arr =sun;

//     }
    // 
     
      setTimeout(() => {
        
       // 
       // for (let i = 0; i < 1; i++) {
          const time = day.timestamp + 23 * 60 * 60 * 1000;
          const strTime = timeToString(time);
          const  v =new Date(day.dateString).getDay();
          
        // console.log(strTime);

          if (!items[strTime]) {
            items[strTime] = [];
            const numItems = 4;
            let n='';
            let p='';
            
         
                // const v= dt.getDay();
              //  
              console.log(v);
              var a="none";
              if (v==0)
              {
                for (let j = 0; j < numItems; j++) {
                
                  if (j==0)
                  {
                    p=' at '
                    n='8-10 PM'
                  }
                  if (j==1)
                  {
                    p=' at '
                    n='10-12 PM'
                  }
                  if (j==2)
                  {
                    p=' at '
                    n='12-2 PM'
                  }
                  if (j==3)
                  {
                    p=' at '
                    n='2-4 PM'
                  }
                  // if (v==0)
                  // {
                  //   arr =sun[j]
                  // }
                  // else if (v==1)
                  // {
                  //   arr=mon[j]
                  // }

                  
                    items[strTime].push({
                      name: n ,
                     
                      f:sun[j],
                      height: Math.max(50, Math.floor(Math.random() * 150)),
    
                      
                    });
    
                }
              }
             else if (v==1)
              {
                for (let j = 0; j < numItems; j++) {
                
                  if (j==0)
                  {
                    p=' at '
                    n='8-10 PM'
                  }
                  if (j==1)
                  {
                    p=' at '
                    n='10-12 PM'
                  }
                  if (j==2)
                  {
                    p=' at '
                    n='12-2 PM'
                  }
                  if (j==3)
                  {
                    p=' at '
                    n='2-4 PM'
                  }
                  // if (v==0)
                  // {
                  //   arr =sun[j]
                  // }
                  // else if (v==1)
                  // {
                  //   arr=mon[j]
                  // }

                  
                    items[strTime].push({
                      name: n ,
                     
                      f:mon[j],
                      height: Math.max(50, Math.floor(Math.random() * 150)),
    
                      
                    });
    
                }
              }
              else if (v==2)
              {
                for (let j = 0; j < numItems; j++) {
                
                  if (j==0)
                  {
                    p=' at '
                    n='8-10 PM'
                  }
                  if (j==1)
                  {
                    p=' at '
                    n='10-12 PM'
                  }
                  if (j==2)
                  {
                    p=' at '
                    n='12-2 PM'
                  }
                  if (j==3)
                  {
                    p=' at '
                    n='2-4 PM'
                  }
                  // if (v==0)
                  // {
                  //   arr =sun[j]
                  // }
                  // else if (v==1)
                  // {
                  //   arr=mon[j]
                  // }

                  
                    items[strTime].push({
                      name: n ,
                     
                      f:tue[j],
                      height: Math.max(50, Math.floor(Math.random() * 150)),
    
                      
                    });
    
                }
              }
              else if (v==3)
              {
                for (let j = 0; j < numItems; j++) {
                
                  if (j==0)
                  {
                    p=' at '
                    n='8-10 PM'
                  }
                  if (j==1)
                  {
                    p=' at '
                    n='10-12 PM'
                  }
                  if (j==2)
                  {
                    p=' at '
                    n='12-2 PM'
                  }
                  if (j==3)
                  {
                    p=' at '
                    n='2-4 PM'
                  }
                  // if (v==0)
                  // {
                  //   arr =sun[j]
                  // }
                  // else if (v==1)
                  // {
                  //   arr=mon[j]
                  // }

                  
                    items[strTime].push({
                      name: n ,
                     
                      f:wed[j],
                      height: Math.max(50, Math.floor(Math.random() * 150)),
    
                      
                    });
    
                }
              }
              else if (v==4)
              {
                for (let j = 0; j < numItems; j++) {
                
                  if (j==0)
                  {
                    p=' at '
                    n='8-10 PM'
                  }
                  if (j==1)
                  {
                    p=' at '
                    n='10-12 PM'
                  }
                  if (j==2)
                  {
                    p=' at '
                    n='12-2 PM'
                  }
                  if (j==3)
                  {
                    p=' at '
                    n='2-4 PM'
                  }
                  // if (v==0)
                  // {
                  //   arr =sun[j]
                  // }
                  // else if (v==1)
                  // {
                  //   arr=mon[j]
                  // }

                  
                    items[strTime].push({
                      name: n ,
                     
                      f:thu[j],
                      height: Math.max(50, Math.floor(Math.random() * 150)),
    
                      
                    });
    
                }
              }
              else {
                for (let j = 0; j < numItems; j++) {
                
                  if (j==0)
                  {
                    p=' at '
                    n='8-10 PM'
                  }
                  if (j==1)
                  {
                    p=' at '
                    n='10-12 PM'
                  }
                  if (j==2)
                  {
                    p=' at '
                    n='12-2 PM'
                  }
                  if (j==3)
                  {
                    p=' at '
                    n='2-4 PM'
                  }
                  // if (v==0)
                  // {
                  //   arr =sun[j]
                  // }
                  // else if (v==1)
                  // {
                  //   arr=mon[j]
                  // }

                  
                    items[strTime].push({
                      name: n ,
                     
                      f:a,
                      height: Math.max(50, Math.floor(Math.random() * 150)),
    
                      
                    });
    
                }

              }
                

              //}

          //   //  else if  (v==1){
          //       for (let j = 0; j < numItems; j++) {
                
          //         if (j==0)
          //         {
          //           p=' at '
          //           n='8-10 PM'
          //         }
          //         if (j==1)
          //         {
          //           p=' at '
          //           n='10-12 PM'
          //         }
          //         if (j==2)
          //         {
          //           p=' at '
          //           n='12-2 PM'
          //         }
          //         if (j==3)
          //         {
          //           p=' at '
          //           n='2-4 PM'
          //         }
          //         // if (v==0)
          //         // {
          //         //   arr =sun[j]
          //         // }
          //         // else if (v==1)
          //         // {
          //         //   arr=mon[j]
          //         // }
          //           items[strTime].push({
          //             name: n ,
                     
          //             f:mon[j],
          //             height: Math.max(50, Math.floor(Math.random() * 150)),
    
                      
          //           });
    
          //   //    }

          //     }
          // //    else 
          // //  {
              
          //       for (let j = 0; j < numItems; j++) {
                
          //         if (j==0)
          //         {
          //           p=' at '
          //           n='8-10 PM'
          //         }
          //         if (j==1)
          //         {
          //           p=' at '
          //           n='10-12 PM'
          //         }
          //         if (j==2)
          //         {
          //           p=' at '
          //           n='12-2 PM'
          //         }
          //         if (j==3)
          //         {
          //           p=' at '
          //           n='2-4 PM'
          //         }
          //         // if (v==0)
          //         // {
          //         //   arr =sun[j]
          //         // }
          //         // else if (v==1)
          //         // {
          //         //   arr=mon[j]
          //         // }
          //           items[strTime].push({
          //             name: n ,
                     
          //             f:tue[j],
          //             height: Math.max(50, Math.floor(Math.random() * 150)),
    
                      
          //           });
    
          // //      }

              
          //   }
              
             
             
           
          }
       // }
        const newItems = {};
        Object.keys(items).forEach((key) => {
          newItems[key] = items[key];
        });
        setItems(newItems);
        
      }, 1000);
     const i={};
      setItems(i);
    };
  //  const chan=()=>{  
    
  //   var v  = new Date().getDay();
  //   console.log(v);};


    const renderItem = (item) => {
      return (
        <TouchableOpacity style={{marginRight: 10, marginTop: 17}}>
          <Card>
            <Card.Content>
              <View
                style={{
                  flex:1,
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                //  justifyContent:'space-evenly'
                }}>
                
                <Avatar.Text label='Shift' labelStyle={{fontSize:17}} style={{backgroundColor:'#4586d6' }} />
               <View 
               style={{
                  flex:1,
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                //  justifyContent:'space-evenly'
                }}>
               <Text style={{fontSize:15,marginTop:0,marginLeft:13}}>{item.name}</Text>
               <Text style={{fontSize:22,marginTop:10,marginLeft:10}}> {item.f}</Text>
               </View>
              </View>
            </Card.Content>
          </Card>
        </TouchableOpacity>
      );
    };
   // const baseDate = new Date(2019, 6, 15);
    return (
     
      <View  style={{flex: 1}}>
        <Agenda
          items={items}
          //onDayPress={loadItems}
         onDayPress={loadItems}
         // selected={'2022-12-04'}
        // date={getDate}
        // numberOfDays={5}
        // onDayPress={chan}
        // selected={false}
          renderItem={renderItem}
        />
      </View>
    );
     
   
  
    



};

export default Schedule;