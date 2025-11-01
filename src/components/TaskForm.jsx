import { useDispatch } from "react-redux";
import { useState } from "react";
import { addTask } from "../redux/actions";

export default function TaskForm() {
  const dispatch = useDispatch();
  const [titulo, setTitulo] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const txt = titulo.trim();
    if (!txt) return;
    dispatch(addTask(txt));   // agrega la tarea a Redux
    setTitulo("");
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <input
        className="input"
        placeholder="Escribe una tarea..."
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <button className="btn" type="submit">Agregar</button>
    </form>
  );
}
