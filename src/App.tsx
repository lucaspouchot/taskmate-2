import React, { useEffect, useState } from 'react';
import './App.css';
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import ShowTask from "./components/ShowTask";
import { TaskInterface } from "./interfaces/task.interface";

function App() {
  const [taskList, setTaskList] = useState<TaskInterface[]>(localStorage.getItem('taskList') ? JSON.parse(localStorage.getItem('taskList') as string) : []);
  const [task, setTask] = useState<TaskInterface>({
    id: 0,
    name: '',
    time: '',
  });

  useEffect(() => {
    localStorage.setItem('taskList', JSON.stringify(taskList));
  }, [taskList]);

  return (
    <>
      <Header/>
      <main className="App">
        <AddTask taskList={taskList} setTaskList={setTaskList} task={task} setTask={setTask} />
        <ShowTask taskList={taskList} setTaskList={setTaskList} task={task} setTask={setTask} />
      </main>
    </>
  );
}

export default App;
