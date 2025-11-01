import { createStore } from "redux";
import reducer from "./reducer";

const devtools = window.__REDUX_DEVTOOLS_EXTENSION__?.();
const store = createStore(reducer, devtools);

// útil para depurar desde consola
window.__STORE = store;

export default store;
