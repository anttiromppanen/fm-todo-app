import { create } from "zustand";
import ITodo from "../types/Todo";

interface State {
  todos: ITodo[];
  filter: string;
}

interface Actions {
  setTodos: (newTodos: ITodo[]) => void;
  setFilter: (value: "active" | "completed" | "") => void;
}

const useTodoStore = create<State & Actions>((set) => ({
  todos: [],
  filter: "",
  setTodos: (newTodos) => set(() => ({ todos: newTodos })),
  setFilter: (value) => set(() => ({ filter: value })),
}));

export default useTodoStore;
