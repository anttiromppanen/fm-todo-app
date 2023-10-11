/* eslint-disable react/jsx-props-no-spreading */
import db from "../../firebase";
import deleteIcon from "../../assets/images/icon-cross.svg";
import checkIcon from "../../assets/images/icon-check.svg";
import ITodo from "../../types/Todo";
import useTodos from "../../hooks/useTodos";

function Todo({ todo }: { todo: ITodo }) {
  const { toggleComplete, deleteTodo } = useTodos(db);
  const { id, text, completed } = todo;

  const handleToggleComplete = () => toggleComplete(todo);
  const handleDelete = () => deleteTodo(id);

  return (
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
      <div className="flex items-center">
        <div
          className={`
            flex h-[22px] w-[22px] items-center justify-center rounded-full border 
          border-userLightLightGrayBlue2 bg-center bg-no-repeat md:h-[26px] md:w-[26px] ${
            completed &&
            "bg-gradient-to-br from-userBgGradient1 to-userBgGradient2"
          }`}
        >
          {completed && <img src={checkIcon} alt="Todo completed" />}
        </div>
        <p className={`ml-3 md:ml-6 ${completed && "line-through opacity-40"}`}>
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
  );
}

export default Todo;
