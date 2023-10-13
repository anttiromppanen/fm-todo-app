import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { AnimatePresence, motion } from "framer-motion";
import db from "../../firebase";
import useTaskOrder from "../../hooks/useTaskOrder";
import useTodos from "../../hooks/useTodos";
import useTodoStore from "../../store/useTodoStore";
import AddTodo from "./AddTodo";
import Todo from "./Todo";
import TodoDragContext from "./TodoDragContext";
import FilterButtons from "../FilterButtons/FilterButtons";

function TodoSection() {
  const todos = useTodoStore((state) => state.todos);
  const filter = useTodoStore((state) => state.filter);
  const { clearCompletedTodos } = useTodos(db);
  const { todosHelperState, handleDragEnd } = useTaskOrder(todos);

  const todosFiltered = filter
    ? todosHelperState.filter((todo) =>
        filter === "active" ? !todo.completed : todo.completed,
      )
    : todosHelperState;

  return (
    <section className="mt-8 md:mt-12">
      <AddTodo />
      <TodoDragContext handleDragEnd={handleDragEnd}>
        <SortableContext items={todos} strategy={verticalListSortingStrategy}>
          <motion.ul
            className="
            mt-4 rounded-md bg-userLightLightGray text-xs text-userLightDarkGrayBlue2 shadow-2xl
          shadow-gray-700/20 dark:bg-userDarkDarkDesaturatedBlue dark:text-userDarkLightGrayBlue
            md:mt-6 md:text-lg"
          >
            <AnimatePresence>
              {todosFiltered.map((todo) => (
                <Todo key={todo.id} todo={todo} />
              ))}
            </AnimatePresence>
            <li
              className="
              flex justify-between p-5 text-xs text-userLightDarkGrayBlue1 dark:text-userDarkGrayBlue2
              md:text-sm"
            >
              <p>{`${todosFiltered.length} items left`}</p>
              <FilterButtons variant="desktop" />
              <button type="button" onClick={() => clearCompletedTodos()}>
                Clear Completed
              </button>
            </li>
          </motion.ul>
        </SortableContext>
      </TodoDragContext>
    </section>
  );
}

export default TodoSection;
