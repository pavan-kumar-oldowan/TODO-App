import React, { useState } from "react";
import {View,Text,StyleSheet,FlatList} from "react-native";
import ADDTask from "@/components/AddTask"
//import { FlatList } from "react-native-reanimated/lib/typescript/Animated";

interface task{
     id:string,
     title:string,
  }
export default function App(){
   const [tasks,settasks]=useState<task[]>([]);
 
   const AddTask= (task: string)=>{
     console.log(tasks);
     const newtask = {id:Date.now().toString(),title:task}
     settasks([...tasks,newtask]);
     console.log(tasks)
   }
  return(
    <View style={styles.container}>
      <ADDTask onAdd={AddTask}/>
      <Text style={styles.title}>Todo App</Text>
      <FlatList 
           data={tasks}
           keyExtractor={(item)=>item.id}
           renderItem={({item})=><Text>{item.title}</Text>}
           />
    </View>
  )
}
const styles= StyleSheet.create({
      container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
      },
      title:{
        fontSize:28,
        textAlign:"center"
      }

})