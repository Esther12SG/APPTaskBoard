import { ADD_TASK, TOGGLE_TASK, DELETE_TASK, CLEAR_COMPLETED } from "./actions";

const isDone = (t) =>
  !!(t?.completada ?? t?.completado ?? t?.completed ?? t?.estado ?? t?.hecha ?? t?.terminada);

const initialState = { tasks: [] };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [action.payload, ...state.tasks] };

    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((t) => {
          if (t.id !== action.payload) return t;
          const next = !isDone(t);
          // normalizamos todas las variantes por si acaso
          return { ...t, completada: next, completado: next, completed: next };
        }),
      };

    case DELETE_TASK:
      return { ...state, tasks: state.tasks.filter((t) => t.id !== action.payload) };

    case CLEAR_COMPLETED:
      return { ...state, tasks: state.tasks.filter((t) => !isDone(t)) };

    default:
      return state;
  }
}
