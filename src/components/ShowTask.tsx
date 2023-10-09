import './showTask.css';
import { TaskInterface } from "../interfaces/task.interface";
import TaskCard from "./TaskCard";

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
          <TaskCard key={task.id} item={task} onEdit={(id) => handleEdit(id)} onDelete={(id) => handleDelete(id)}/>
        )) }
      </ul>
    </section>
  )
}
