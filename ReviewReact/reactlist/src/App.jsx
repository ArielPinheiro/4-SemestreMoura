import "./App.css";
import penIcon from "./assets/pencil.svg";
import trashIcon from "./assets/trash.svg";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  // states
  const [taskList, setTaskList] = useState([]);
  const [taskValue, setTaskValue] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editingId, setEditingId] = useState(null);

  // função

  //CRUD - Post, Get, Put, Delete

  // get Lista os cadastros
  const getTask = async () => {
    try {
      const APIReturn = await axios.get("http://localhost:3000/taskpoints");
      const APIData = await APIReturn.data;
      //atualiza os states
      setTaskList(APIData);
    } catch (error) {
      console.log(error);
    }
  };

  // get Por Id
  const getTaskById = async (id) => {
    try {
      const APIReturn = await axios.get(
        `http://localhost:3000/taskpoints/${id}`,
      );
      const APIData = await APIReturn.data;
      return APIData;
    } catch (error) {
      console.log(error);
    }
  };

  // post Cria ou Cadastra
  const postTask = async (e) => {
    e.preventDefault();
    if (taskValue.trim().length == 0) {
      alert("Digite uma tarefa para cadastrar");
      return false;
    }
    try {
      await axios.post("http://localhost:3000/taskpoints", {
        description: taskValue,
      });
      setTaskValue("");
      getTask();
    } catch (error) {
      console.log(error);
    }
  };

  // put Atualiza ou Edita
  // ativa o modo de edição e preenche o input com o valor atual
  const putTask = (item) => {
    setEditMode(true);
    setEditingId(item.id);
    setTaskValue(item.description);
  };

  // confirma a edição e envia pro servidor
  const confirmPutTask = async (e) => {
    e.preventDefault();
    if (taskValue.trim().length == 0) {
      alert("Digite uma tarefa para editar");
      return false;
    }
    try {
      await axios.put(`http://localhost:3000/taskpoints/${editingId}`, {
        description: taskValue,
      });
      // reseta o modo de edição
      setEditMode(false);
      setEditingId(null);
      setTaskValue("");
      getTask();
    } catch (error) {
      console.log(error);
    }
  };

  // delete Exclui ou Deleta
  const deleteTask = async (id) => {
    const confirmDelete = confirm(
      "Tem certeza que deseja excluir essa tarefa?",
    );
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:3000/taskpoints/${id}`);
      getTask();
    } catch (error) {
      console.log(error);
    }
  };

  //effects
  useEffect(() => {
    getTask();
  }, []);

  //JSX
  return (
    <>
      <header className="header-section">
        <h1 className="header-section__title">React List</h1>
      </header>

      <main className="body-section">
        <form
          className="cad-task"
          onSubmit={editMode ? confirmPutTask : postTask}
        >
          <input
            className="card-task__entry"
            type="text"
            placeholder="Adicione uma tarefa"
            value={taskValue}
            onChange={(e) => {
              setTaskValue(e.target.value);
            }}
          />
          <button className="card-task__btn-confirm">
            {" "}
            {editMode ? "Salvar" : "Adicionar"}
          </button>

          {editMode && (
            <button
              className="card-task__btn-cancel"
              type="button"
              onClick={() => {
                setEditMode(false);
                setEditingId(null);
                setTaskValue("");
              }}
            >
              Cancelar
            </button>
          )}
        </form>

        <section className="cardlist">
          {taskList.map((t) => {
            return (
              <article className="cardtask" key={t.id}>
                <p>{t.description}</p>
                <div className="cardtask__icon-box">
                  <div className="cardlist__icon">
                    <img
                      className="cardlist__edit-icon"
                      src={penIcon}
                      alt="Imagem de um lapis, Função de editar"
                      onClick={() => {
                        putTask(t);
                      }}
                    />
                  </div>
                  <div className="cardlist__icon">
                    <img
                      className="cardlist__trash-icon"
                      src={trashIcon}
                      alt="Imagem de um lixo, Função de excluir"
                      onClick={() => {
                        deleteTask(t.id);
                      }}
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </section>
      </main>
      <footer className="footer-list">
        <p className="footer-list__right-text">
          2026, React List - Todos os direitos reservados
        </p>
      </footer>
    </>
  );
}

export default App;
