import './addTask.css';

type Props = {
}

export default function AddTask(props: Props) {
  return (<section className="addTask">
      <form>
        <input type="text" name="task" autoComplete="off" placeholder="add task" maxLength={25} />
        <button type="submit">Add</button>
      </form>
    </section>
  );
}
