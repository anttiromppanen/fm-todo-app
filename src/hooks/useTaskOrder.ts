import { useEffect, useState } from "react";
import { DragEndEvent } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import ITodo from "../types/Todo";
import useTodoStore from "../store/useTodoStore";

const useTaskOrder = (todos: ITodo[]) => {
  const setTodos = useTodoStore((state) => state.setTodos);
  const [todosHelperState, setTodosHelperState] = useState(todos);

  useEffect(() => {
    const idsOrder = JSON.parse(localStorage.getItem("taskOrder") || "[]");

    if (!idsOrder.length && todos.length) {
      const order = todos.map((todo) => todo.id);
      localStorage.setItem("taskOrder", JSON.stringify(order));
    }

    let updatedTodoOrder = [];
    if (idsOrder.length && todos.length) {
      updatedTodoOrder = idsOrder.map((id: string) =>
        todos.find((todo) => todo.id === id),
      );

      const newItems = todos.filter((todo) => !idsOrder.includes(todo.id));

      if (newItems.length) {
        updatedTodoOrder = [...updatedTodoOrder, ...newItems];
      }
    }

    if (updatedTodoOrder.length) {
      updatedTodoOrder = updatedTodoOrder.filter(
        (todo: ITodo) => todo !== undefined,
      );
    }

    setTodosHelperState(updatedTodoOrder || todos);
  }, [todos]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || !active) return;

    if (active.id !== over.id) {
      const helperTodos = [...todosHelperState];
      const oldIndex = helperTodos.findIndex((todo) => todo.id === active.id);
      const newIndex = helperTodos.findIndex((todo) => todo.id === over.id);
      const newOrder = arrayMove(helperTodos, oldIndex, newIndex);

      const idsOrder = newOrder.map((todo) => todo.id);
      localStorage.setItem("taskOrder", JSON.stringify(idsOrder));

      setTodos(newOrder);
    }
  };

  return { todosHelperState, handleDragEnd };
};

export default useTaskOrder;
