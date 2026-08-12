import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "./TaskItemStyle";

export default function TaskItem({ task, onEdit, onDelete }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{task.title}</Text>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.editButton} onPress={() => onEdit(task)}>
          <Feather name="edit-2" size={18} color="#094e74" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton} onPress={() => onDelete(task.id)}>
          <Feather name="trash-2" size={18} color="#ff0000" />
        </TouchableOpacity>
      </View>
    </View>
  );
}