import './showTask.css';
import { TaskInterface } from "../interfaces/task.interface";

type Props = {
  taskList: TaskInterface[];
  setTaskList: (taskList: TaskInterface[]) => void;
  task: TaskInterface;
  setTask: (task: TaskInterface) => void;
}

export default function ShowTask(props: Props) {
  const handleEdit = (id: number) => {
    const task = props.taskList.find((task) => task.id === id);
    if (task) {
      props.setTask(task);
    }
  }
  const handleDelete = (id: number) => {
    props.setTaskList(props.taskList.filter((task) => task.id !== id));
  }

  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{props.taskList.length}</span>
        </div>
        <button onClick={() => props.setTaskList([])} className="clearAll">Clear All</button>
      </div>
      <ul>
        { props.taskList.map((task) => (
          <li key={task.id}>
            <p>
              <span className="name">{task.name}</span>
              <span className="time">{task.time}</span>
            </p>
            <i onClick={() => handleEdit(task.id)} className="bi bi-pencil-square"></i>
            <i onClick={() => handleDelete(task.id)} className="bi bi-trash"></i>
          </li>
        )) }
      </ul>
    </section>
  )
}
