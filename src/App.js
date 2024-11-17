import { useState } from "react";
import "./App.css";
import { AiFillCheckCircle, AiTwotoneDelete } from "react-icons/ai";

function App() {
  const [isCompletedScreen, setIsCompletedScreen] = useState(false);
  return (
    <div className="App">
      <h1>MyTodolist</h1>

      <div className="todo-wrapper">
        <div className=" todo-input">
          <div className="todo-input-item">
            <label> Titulo </label>
            <input type="text" placeholder=" Titulo de tu tarea?" />
          </div>
          <div className="todo-input-item">
            <label> Descripcion</label>
            <input type="text" placeholder=" Que quieres hacer?" />
          </div>
          <div className="todo-input-item">
            <button type="button" className="primaryBtn">
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
          <div className="todo-list-item">
            <h3>Tarea 1</h3>
            <p>Descripcion</p>

            <div>
              <AiTwotoneDelete className="icons" />
              <AiFillCheckCircle className="icons-check" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
