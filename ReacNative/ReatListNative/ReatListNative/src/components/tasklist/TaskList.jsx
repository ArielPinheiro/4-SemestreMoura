import { FlatList } from "react-native";
import TaskItem from "../taskitem/TaskItem";
import { styles } from "./TaskListStyle";

export default function TaskList({ tasks, onEdit, onDelete }) {
  return (
    
    <FlatList
      data={Array.isArray(tasks) ? tasks : []}
      keyExtractor={(item, index) =>
        item?.id != null ? String(item.id) : String(index)
      }
      contentContainerStyle={styles.list}
      renderItem={({ item }) => (
        <TaskItem
          task={item}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      )}
    />
  );
}