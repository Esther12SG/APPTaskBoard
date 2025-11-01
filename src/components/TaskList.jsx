import { useDispatch, useSelector } from "react-redux";
import { clearCompleted } from "../redux/actions";
import TaskItem from "./TaskItem";
import { useMemo, useState } from "react";

// Normaliza diferentes nombres de la propiedad "completada"
const isDone = (t) =>
  !!(t?.completada ?? t?.completado ?? t?.completed ?? t?.estado ?? t?.hecha ?? t?.terminada);

const selectTasks = (state) => state?.tasks ?? [];

export default function TaskList() {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);
  const [filter, setFilter] = useState("all");

  // Orden: primero activas, luego completadas
  const sorted = useMemo(
    () => tasks.slice().sort((a, b) => Number(isDone(a)) - Number(isDone(b))),
    [tasks]
  );

  // Filtro: all | active | done
  const filtered = useMemo(() => {
    if (filter === "active") return sorted.filter((t) => !isDone(t));
    if (filter === "done")   return sorted.filter((t) =>  isDone(t));
    return sorted;
  }, [sorted, filter]);

  const doneCount = tasks.filter(isDone).length;

  return (
    <div>
      <div className="toolbar">
        <div className="filters">
          <button
            className={`filter-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            Todos
          </button>
          <button
            className={`filter-btn ${filter === "active" ? "active" : ""}`}
            onClick={() => setFilter("active")}
          >
            Activas
          </button>
          <button
            className={`filter-btn ${filter === "done" ? "active" : ""}`}
            onClick={() => setFilter("done")}
          >
            Completadas
          </button>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: ".6rem" }}>
          <span>
            <strong>Completadas:</strong> {doneCount} | <strong>Total:</strong> {tasks.length}
          </span>
          <button className="filter-btn" onClick={() => dispatch(clearCompleted())}>
            Limpiar completadas
          </button>
        </div>
      </div>

      <ul className="tasks">
        {filtered.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}
