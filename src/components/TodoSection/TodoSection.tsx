import db from "../../firebase";
import useTodos from "../../hooks/useTodos";
import useTodoStore from "../../store/useTodoStore";
import AddTodo from "./AddTodo";
import Todo from "./Todo";

function TodoSection() {
  const todos = useTodoStore((state) => state.todos);
  const filter = useTodoStore((state) => state.filter);
  const { clearCompletedTodos } = useTodos(db);

  const todosFiltered = filter
    ? todos.filter((todo) =>
        filter === "active" ? !todo.completed : todo.completed,
      )
    : todos;

  return (
    <section className="mt-8">
      <AddTodo />
      <ul
        className="
          mt-4 rounded-md bg-userLightLightGray text-xs text-userLightDarkGrayBlue2 shadow-2xl shadow-gray-700/20
        dark:bg-userDarkDarkDesaturatedBlue dark:text-userDarkLightGrayBlue"
      >
        {todosFiltered.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
        <li className="flex justify-between p-5 text-xs text-userLightDarkGrayBlue1 dark:text-userDarkGrayBlue2">
          <p>{`${todosFiltered.length} items left`}</p>
          <button type="button" onClick={() => clearCompletedTodos()}>
            Clear Completed
          </button>
        </li>
      </ul>
    </section>
  );
}

export default TodoSection;
