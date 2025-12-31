import TodoList from './todolist.jsx'

export default function Todo() {
  return (
    <div>
        <h1>Todo List</h1>
        <ul>
            <TodoList text="Belajar React" completed={false} />
            <TodoList text="Belajar Node" completed={false} />
            <TodoList text="Belajar MongoDB" completed={true} />
        </ul>
    </div>
  );
}