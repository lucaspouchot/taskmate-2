import React, { useState } from 'react';
import './App.css';
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import ShowTask from "./components/ShowTask";
import { TaskInterface } from "./interfaces/task.interface";

function App() {
  const [taskList, setTaskList] = useState<TaskInterface[]>([]);

  return (
    <>
      <Header/>
      <main className="App">
        <AddTask/>
        <ShowTask/>
      </main>
    </>
  );
}

export default App;
