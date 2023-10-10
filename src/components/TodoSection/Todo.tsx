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
    <li
      className="
            dark:border-b-userDarkListItemBottomBorder relative flex items-center 
              justify-between border-b border-b-userLightLightGrayBlue2 p-5"
    >
      <button
        type="button"
        aria-label="Toggle completed"
        onClick={handleToggleComplete}
        className="absolute left-0 top-0 z-10 h-full w-full"
      />
      <div className="flex items-center">
        <div
          className={`flex h-[22px] w-[22px] items-center justify-center rounded-full border border-userLightLightGrayBlue2 bg-center bg-no-repeat ${
            completed &&
            "bg-gradient-to-br from-userBgGradient1 to-userBgGradient2"
          }`}
        >
          {completed && <img src={checkIcon} alt="Todo completed" />}
        </div>
        <p className={`ml-3 ${completed && "line-through opacity-40"}`}>
          {text}
        </p>
      </div>
      <button type="button" onClick={handleDelete} className="z-20 scale-75">
        <img src={deleteIcon} alt="Delete" />
      </button>
    </li>
  );
}

export default Todo;
