import React, { useState } from "react";
import {View,Text,StyleSheet,FlatList} from "react-native";
import ADDTask from "@/components/AddTask"
//import { FlatList } from "react-native-reanimated/lib/typescript/Animated";
import TaskItem from "@/components/TaskItem";

interface Task{
     id:string,
     title:string,
     completed:boolean
  }
export default function App(){
   const [tasks,setTasks]=useState<Task[]>([]);
  // Adding Task
   const Add= (task: string):void=>{
     const newtask = {id:Date.now().toString(),title:task,completed:false}
     setTasks(prevTasks=>[...prevTasks,newtask]);
   }
  //DeleteTask
   const DeleteTask = (id:string)=>{
      setTasks(prevTasks=>prevTasks.filter(task=>task.id!==id))
   }

  return(
    <View style={styles.container}>
       <Text style={styles.title}>Todo App</Text>
       <ADDTask onAdd={Add}/>
       <FlatList 
           data={tasks}
           keyExtractor={(item)=>item.id}
           renderItem={({item})=>(
           <TaskItem task={item} onDelete={DeleteTask}/>
          )}
          />
    </View>
  )
}
const styles= StyleSheet.create({
      container:{
        flex:1,
        padding:20
      },
      title:{
        fontSize:28,
        textAlign:"center",
        fontWeight:"bold",
        marginBottom:20
      }

})