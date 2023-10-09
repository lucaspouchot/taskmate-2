import { TaskInterface } from '../interfaces/task.interface';
import './taskCard.css';

type Props = {
  item: TaskInterface;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function TaskCard(props: Props) {
  return (
    <li className="taskCard">
      <p>
        <span className="name">{props.item.name}</span>
        <span className="time">{props.item.time}</span>
      </p>
      <i onClick={() => props.onEdit(props.item.id)} className="bi bi-pencil-square"></i>
      <i onClick={() => props.onDelete(props.item.id)} className="bi bi-trash"></i>
    </li>
  )
}
