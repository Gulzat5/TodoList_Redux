import { Provider } from "react-redux";
import { store } from "./store";
import { Route, Routes } from "react-router-dom";
import { TodoForm } from "./Components/TodoForm";
import Auth from "./Components/Auth";
import { Header } from "./Components/Header";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/header" element={<Header />}>
            <Route path="todolist" element={<TodoForm />} />
          </Route>
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
