import { useContext, useState } from "react";
import { SafeAreaView } from "react-native";

import Header from "./components/header/Header";
import FormTask from "./components/formtask/FormTask";
import TaskList from "./components/tasklist/TaskList";
import Footer from "./components/footer/Footer";

import { styles } from "./Styles";

import { TaskContext } from "./context/TaskContext";

export default function App() {
  const { listaTask, postTask, putTask, deleteTask } = useContext(TaskContext);

  const [editingTask, setEditingTask] = useState(null);

  // Adicionar tarefa
  async function handleAdd(title) {
    try {
      console.log("Criando tarefa:", title);

      await postTask(title);

      console.log("Tarefa cadastrada!");
    } catch (error) {
      console.error("ERRO AO CRIAR TAREFA:", error);
    }
  }

  // Deletar tarefa
  async function handleDelete(id) {
    try {
      console.log("Deletando tarefa:", id);

      await deleteTask(id);

      if (editingTask?.id === id) {
        setEditingTask(null);
      }

      console.log("Tarefa deletada!");
    } catch (error) {
      console.error("ERRO AO DELETAR TAREFA:", error);
    }
  }

  // Começar a editar
  function handleEdit(task) {
    console.log("Editando tarefa:", task);

    setEditingTask(task);
  }

  // Salvar edição
  async function handleSaveEdit(newTitle) {
    try {
      if (!editingTask) {
        console.error("Nenhuma tarefa selecionada.");
        return;
      }

      console.log("Salvando edição:", newTitle);

      await putTask(editingTask.id, newTitle);

      setEditingTask(null);

      console.log("Tarefa editada!");
    } catch (error) {
      console.error("ERRO AO EDITAR TAREFA:", error);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <FormTask
        onAdd={handleAdd}
        editingTask={editingTask}
        onSaveEdit={handleSaveEdit}
        onCancelEdit={() => setEditingTask(null)}
      />

      <TaskList tasks={listaTask} onEdit={handleEdit} onDelete={handleDelete} />

      <Footer />
    </SafeAreaView>
  );
}
