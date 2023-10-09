import './addTask.css';
import React from "react";
import { TaskInterface } from "../interfaces/task.interface";

type Props = {
  taskList: TaskInterface[];
  setTaskList: (taskList: TaskInterface[]) => void;
  task: TaskInterface;
  setTask: (task: TaskInterface) => void;
}

export default function AddTask(props: Props) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const taskName = e.currentTarget.task.value;
    if(!taskName) {
      return
    }
    if (!props.task.id) {
      let id = 1;
      if (props.taskList.length > 0) {
        id = props.taskList.sort((a, b) => b.id - a.id)[0].id + 1;
      }
      const date = new Date();
      props.setTaskList([...props.taskList, {
        id,
        name: taskName,
        time: date.toLocaleString(),
      }]);
    }
    else {
      const task = props.taskList.find((task) => task.id === props.task.id);
      if (task) {
        props.setTaskList(props.taskList.map(item => {
          if (item.id === task.id) {
            task.name = taskName;
            task.time = (new Date()).toLocaleString();
          }
          return item;
        }));
      }
    }
    props.setTask({
      id: 0,
      name: '',
      time: '',
    });
  }

  return (<section className="addTask">
      <form onSubmit={handleSubmit}>
        <input type="text" name="task" autoComplete="off" placeholder="add task" maxLength={25} onChange={e => props.setTask({...props.task, name: e.target.value})} value={props.task.name} />
        <button type="submit">{ props.task.id ? 'Update' : 'Add' }</button>
      </form>
    </section>
  );
}
