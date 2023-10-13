/* eslint-disable react/jsx-props-no-spreading */
import { motion } from "framer-motion";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import db from "../../firebase";
import deleteIcon from "../../assets/images/icon-cross.svg";
import checkIcon from "../../assets/images/icon-check.svg";
import ITodo from "../../types/Todo";
import useTodos from "../../hooks/useTodos";

function Todo({ todo }: { todo: ITodo }) {
  const { toggleComplete, deleteTodo } = useTodos(db);
  const { id, text, completed } = todo;
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: todo.id });

  const handleToggleComplete = () => toggleComplete(todo);
  const handleDelete = () => {
    const idsOrder = JSON.parse(localStorage.getItem("idsOrder") || "[]");

    if (idsOrder?.length) {
      const newIdsOrder = idsOrder.filter((todoId: string) => todoId !== id);
      localStorage.setItem("idsOrder", JSON.stringify(newIdsOrder));
    }

    deleteTodo(id);
  };

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <motion.li
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{
        opacity: { duration: 0.2 },
        height: { duration: 0.3 },
      }}
      className="overflow-hidden"
      style={style}
    >
      <div
        className="
        relative flex items-center justify-between border-b border-b-userLightLightGrayBlue2
        p-5 dark:border-b-userDarkListItemBottomBorder"
      >
        <button
          type="button"
          aria-label="Toggle completed"
          onClick={handleToggleComplete}
          className="
          peer absolute left-0 top-0 z-10 h-full w-full focus:outline-userBgGradient2
          focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1"
        />
        <div
          className="
          flex items-center from-userBgGradient1 to-userBgGradient2 
          peer-hover:[&>*:first-child]:bg-gradient-to-br"
        >
          <div
            className={`
            z-50 h-[22px] w-[22px] rounded-full border
            border-userLightLightGrayBlue1 p-[0.0625rem] dark:border-userDarkGrayBlue3
            md:h-[26px] md:w-[26px] ${
              completed &&
              "bg-gradient-to-br from-userBgGradient1 to-userBgGradient2"
            }`}
          >
            <div
              className={`
              flex h-full w-full items-center justify-center rounded-full 
            bg-userLightLightGray dark:bg-userDarkDarkDesaturatedBlue ${
              completed && "!bg-transparent"
            }`}
            >
              {completed && <img src={checkIcon} alt="Todo completed" />}
            </div>
          </div>
          <p
            className={`ml-3 md:ml-6 ${completed && "line-through opacity-40"}`}
          >
            {text}
          </p>
        </div>
        <button
          type="button"
          onClick={handleDelete}
          className="
          z-20 border-spacing-2 scale-75 hover:bg-red-400 md:hidden
          md:scale-90 md:hover:block md:peer-hover:block md:peer-focus-visible:block"
        >
          <img src={deleteIcon} alt="Delete" />
        </button>
      </div>
    </motion.li>
  );
}

export default Todo;
