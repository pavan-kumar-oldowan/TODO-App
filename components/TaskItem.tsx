import {View,StyleSheet,Text,TouchableOpacity} from "react-native"; 
type Task = {
  id: string;
  title: string;
  completed: boolean;
};

type TaskItemProps = {
  task: Task;
  onDelete: (id: string) => void;
};

const TaskItem:React.FC<TaskItemProps> =({task,onDelete})=>{
      return (
         <View style={styles.container}>
             <Text style={[styles.text, task.completed && styles.completed]}>
                {task.title}
             </Text>
             <TouchableOpacity style={styles.delete} onPress={()=>onDelete(task.id)}>
                <Text style={styles.deleteText}>Delete</Text>
             </TouchableOpacity>
         </View>
      )
}
const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        padding:12,
        borderWidth:1,
        borderRadius:8,
        borderColor:"#6200ee",
        marginBottom:10,
        backgroundColor:"#f0f0f0"
    },
    text:{
         fontSize:26
    },
    completed:{textDecorationLine: 'line-through', color: 'gray'},
    delete:{backgroundColor:"red",paddingVertical:5, paddingHorizontal:10,borderRadius:5},
    deleteText:{color:"#fff", fontWeight:"bold"}
}) 
export default TaskItem;