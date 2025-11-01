export const ADD_TASK = "ADD_TASK";
export const TOGGLE_TASK = "TOGGLE_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED";

export const addTask = (titulo) => ({
  type: ADD_TASK,
  payload: { id: crypto.randomUUID(), titulo, completada: false },
});

export const toggleTask = (id) => ({ type: TOGGLE_TASK, payload: id });
export const deleteTask = (id) => ({ type: DELETE_TASK, payload: id });
export const clearCompleted = () => ({ type: CLEAR_COMPLETED });
