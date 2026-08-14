import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const TaskContext = createContext();

const API_URL = "http://172.16.2.77:3001";

export const TaskProvider = ({ children }) => {
  const [listaTask, setListaTask] = useState([]);

  // GET - Buscar tarefas
  const getTask = async () => {
    try {
      console.log("Buscando tarefas...");

      const response = await axios.get(`${API_URL}/tasks`);

      console.log("Tarefas recebidas:", response.data);

      if (Array.isArray(response.data)) {
        setListaTask(response.data);
      } else {
        setListaTask([]);
      }
    } catch (error) {
      console.error("ERRO AO BUSCAR TAREFAS:", error);
    }
  };

  // POST - Criar tarefa
  const postTask = async (title) => {
    try {
      console.log("Criando tarefa:", title);

      const response = await axios.post(`${API_URL}/tasks`, {
        title: title,
      });

      console.log("Tarefa criada:", response.data);

      setListaTask((prev) => [...prev, response.data]);

      return response.data;
    } catch (error) {
      console.error("ERRO AO CRIAR TAREFA:", error);
      throw error;
    }
  };

  // PUT - Atualizar tarefa
  const putTask = async (id, title) => {
    try {
      console.log("Atualizando tarefa:", id);

      const response = await axios.put(`${API_URL}/tasks/${id}`, {
        id: id,
        title: title,
      });

      console.log("Tarefa atualizada:", response.data);

      setListaTask((prev) =>
        prev.map((task) =>
          task.id === response.data.id ? response.data : task,
        ),
      );

      return response.data;
    } catch (error) {
      console.error("ERRO AO ATUALIZAR TAREFA:", error);
      throw error;
    }
  };

  // DELETE - Excluir tarefa
  const deleteTask = async (id) => {
    try {
      console.log("Deletando tarefa:", id);

      await axios.delete(`${API_URL}/tasks/${id}`);

      setListaTask((prev) => prev.filter((task) => task.id !== id));

      console.log("Tarefa deletada!");
    } catch (error) {
      console.error("ERRO AO DELETAR TAREFA:", error);
      throw error;
    }
  };

 
  // Buscar tarefas quando o Provider inicia
useEffect(() => {
  getTask(); // busca inicial
  return () => clearInterval(interval); // limpa o intervalo quando o Provider desmontar
}, []);

  return (
    <TaskContext.Provider
      value={{
        listaTask,
        getTask,
        postTask,
        putTask,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
