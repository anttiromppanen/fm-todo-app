import { FormEvent, useState } from "react";
import useTodos from "../../hooks/useTodos";
import db from "../../firebase";

function AddTodo() {
  const [inputValue, setInputValue] = useState("");
  const { createTodo } = useTodos(db);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTodo(inputValue);
    setInputValue("");
  };

  return (
    <form
      className="relative h-full w-full rounded-md bg-white text-sm"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="todo"
        id="todo"
        placeholder="Create a new todo..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="
          w-full rounded-md bg-white py-4 pl-5 pr-11 text-sm
        placeholder-userLightDarkGrayBlue1 focus:outline-userBgGradient2 dark:bg-userDarkDarkDesaturatedBlue
        dark:text-userDarkLightGrayBlue dark:placeholder:text-userDarkGrayBlue1"
      />
      {inputValue && (
        <button
          type="submit"
          className="absolute bottom-2 right-5 text-3xl text-green-500"
        >
          +
        </button>
      )}
    </form>
  );
}

export default AddTodo;
