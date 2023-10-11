import { AnimatePresence, motion } from "framer-motion";
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
    <section className="mt-8 md:mt-12">
      <AddTodo />
      <motion.ul
        className="
          mt-4 rounded-md bg-userLightLightGray text-xs text-userLightDarkGrayBlue2 shadow-2xl
        shadow-gray-700/20 dark:bg-userDarkDarkDesaturatedBlue dark:text-userDarkLightGrayBlue
          md:mt-6 md:text-lg"
      >
        <AnimatePresence>
          {todosFiltered.map((todo) => (
            <motion.li
              key={todo.id}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{
                opacity: { duration: 0.2 },
                height: { duration: 0.3 },
              }}
              className="overflow-hidden"
            >
              <Todo key={todo.id} todo={todo} />
            </motion.li>
          ))}
        </AnimatePresence>
        <li
          className="
            flex justify-between p-5 text-xs text-userLightDarkGrayBlue1 dark:text-userDarkGrayBlue2
            md:text-sm"
        >
          <p>{`${todosFiltered.length} items left`}</p>
          <button type="button" onClick={() => clearCompletedTodos()}>
            Clear Completed
          </button>
        </li>
      </motion.ul>
    </section>
  );
}

export default TodoSection;
