import { useState, useEffect } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { styles } from "./FormTaskStyle";

export default function FormTask({ onAdd, editingTask, onSaveEdit, onCancelEdit }) {
  const [value, setValue] = useState("");

  const isEditing = !!editingTask;

  useEffect(() => {
    setValue(editingTask ? editingTask.title : "");
  }, [editingTask]);

  function handlePress() {
    if (!value.trim()) return;

    if (isEditing) {
      onSaveEdit(value.trim());
    } else {
      onAdd(value.trim());
    }
    setValue("");
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Adicione uma tarefa"
        placeholderTextColor="#888"
        value={value}
        onChangeText={setValue}
      />

      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>
          {isEditing ? "Editar" : "Adicionar"}
        </Text>
      </TouchableOpacity>

      {isEditing && (
        <TouchableOpacity style={styles.cancelButton} onPress={onCancelEdit}>
          <Text style={styles.cancelText}>Cancelar edição</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}