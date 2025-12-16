import { useState } from "react"
import { TextInput,View,TouchableOpacity,Text,StyleSheet } from "react-native"

const AddTask = ({onAdd}: {onAdd: (task: string) => void})=>{
     const [ task ,setTask]= useState("");
     const handleTask =()=>{
          if(task.trim() ==="") return;
          onAdd(task);
          setTask(""); 
     }
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Enter Task" value={task} onChangeText={setTask}/>
            <TouchableOpacity style={styles.button} onPress={()=>{handleTask()}}>
                <Text>Add Task</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flexDirection:"row",
        margin:10
    },
    input:{
        flex:1,
        borderWidth:1,
        borderColor:"#6200ee",
        borderRadius:8,
        paddingHorizontal:10,
        marginRight:10
    },
    button:{
        backgroundColor:"green",
        padding:6,
        borderRadius:6,
    }


})
export default AddTask;