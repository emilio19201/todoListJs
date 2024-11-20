import { useState } from "react";
import "./App.css";
import { AiFillCheckCircle, AiOutlineDelete } from "react-icons/ai";

function App() {
  const [isCompletedScreen, setIsCompletedScreen] = useState(false);
  const [allTodos, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  //la accion del evento onclick

  const handlingAddTodo = () => {
    let newTodoItem = {
      title: newTitle,
      description: newDescription,
    };

    let updateTodoArr = [...allTodos]; //crea una copia del arreglo para no modificar el estado directamente
    updateTodoArr.push(newTodoItem);
    setTodos(updateTodoArr);
    localStorage.setItem("todolist", JSON.stringify(updateTodoArr)); // hace que persista en el almacenamiento local y no se borre
  };
  return (
    <div className="App">
      <h1>MyTodolist</h1>

      <div className="todo-wrapper">
        <div className=" todo-input">
          <div className="todo-input-item">
            <label> Titulo </label>
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder=" Titulo de tu tarea?"
            />
          </div>
          <div className="todo-input-item">
            <label> Descripcion</label>
            <input
              type="text"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              placeholder=" Que quieres hacer?"
            />
          </div>

          <div className="todo-input-item">
            <button
              type="button"
              onClick={handlingAddTodo}
              className="primaryBtn"
            >
              Añadir
            </button>
          </div>
        </div>

        <div className="btn-area">
          <div>
            <button
              className={`secondarybtn ${!isCompletedScreen ? "active" : ""}`}
              onClick={() => setIsCompletedScreen(false)}
            >
              Por Hacer
            </button>
            <button
              className={`secondarybtn ${isCompletedScreen ? "active" : ""}`}
              onClick={() => setIsCompletedScreen(true)}
            >
              Completado
            </button>
          </div>
        </div>

        <div className="todo-list">
          {allTodos.map((item, index) => {
            return (
              <div className="todo-list-item" key={index}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

                <div>
                  <AiOutlineDelete className="icons" title="Delete?" />
                  <AiFillCheckCircle className="icons-check" title="Complete" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
