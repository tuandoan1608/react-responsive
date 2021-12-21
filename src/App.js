import react from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Login from './components/logins/login';
import TaskList from './components/taskList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact  path="/" element={<TaskList />}> </Route>
          <Route path="/login" element={<Login />}> </Route>
         
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
