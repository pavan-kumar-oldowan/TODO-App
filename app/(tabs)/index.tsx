import React, { useState ,useEffect} from "react";
import {View,Text,StyleSheet,FlatList} from "react-native";
import ADDTask from "@/components/AddTask"
//import { FlatList } from "react-native-reanimated/lib/typescript/Animated";
import TaskItem from "@/components/TaskItem";
import AsyncStorage from "@react-native-async-storage/async-storage";
interface Task{
     id:string,
     title:string,
     completed:boolean
  }
export default function App(){
   const [tasks,setTasks]=useState<Task[]>([]);
   // Save the task in AsyncStorage whenever task change
   useEffect(()=>{
    const saveTask = async()=>{
       try{
        await AsyncStorage.setItem("tasks",JSON.stringify(tasks))
       }catch(e){
        console.log("Error Svaing Tasks",e)
       }
      }
      saveTask();
   },[tasks])
   
   // Load Task when app is run
   useEffect(()=>{
     const loadTask= async()=>{
      try{
       const load = await AsyncStorage.getItem("tasks");
       if(load)setTasks(JSON.parse(load))
      }catch(e){
        console.log("Error loading tasks",e)
      }
      loadTask();
     }
   },[])
  // Adding Task
   const Add= (task: string):void=>{
     const newtask = {id:Date.now().toString(),title:task,completed:false}
     setTasks(prevTasks=>[...prevTasks,newtask]);
   }
  //DeleteTask
   const DeleteTask = (id:string)=>{
      setTasks(prevTasks=>prevTasks.filter(task=>task.id!==id))
   }
 // Toggle
  const toggleComplete =(id:string)=>
  {
     setTasks(prevTasks=>
        prevTasks.map(task=>
       task.id===id ? {...task,completed:!task.completed} : task))
  }
  return(
    <View style={styles.container}>
       <Text style={styles.title}>Todo App</Text>
       <ADDTask onAdd={Add}/>
       <FlatList 
           data={tasks}
           keyExtractor={(item)=>item.id}
           renderItem={({item})=>(
           <TaskItem task={item} onDelete={DeleteTask} onToggleComplete={toggleComplete}/>
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