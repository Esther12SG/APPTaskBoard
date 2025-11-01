import { Provider } from "react-redux";
import store from "./redux/store";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./index.css";

export default function App() {
  return (
    <Provider store={store}>
      <div className="app-card">
        <h1 className="app-title">	TaskBoard </h1>
        <p className="subtitle">(Moditareas)Lista de con con Redux</p>

        <TaskForm />
        <TaskList />

        <p className="footer-signature">Creado por Esther Sierra :)</p>
      </div>
    </Provider>
  );
}
