import { useDispatch } from "react-redux";
import { deleteTask, toggleTask } from "../redux/actions";

const isDone = (t) =>
  !!(t?.completada ?? t?.completado ?? t?.completed ?? t?.estado ?? t?.hecha ?? t?.terminada);

export default function TaskItem({ task }) {
  const dispatch = useDispatch();
  const done = isDone(task);

  return (
    <li className="task-row">
      <input
        type="checkbox"
        checked={done}
        onChange={() => dispatch(toggleTask(task.id))}
      />
      <span
        className={`task-title ${done ? "done" : ""}`}
        onClick={() => dispatch(toggleTask(task.id))}
      >
        {task.titulo}
      </span>
      <button className="icon-btn" title="Eliminar" onClick={() => dispatch(deleteTask(task.id))}>
        🗑️
      </button>
    </li>
  );
}
