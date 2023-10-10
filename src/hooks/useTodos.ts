/* eslint-disable no-console */
import { useEffect, useState } from "react";
import {
  Firestore,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
  where,
  writeBatch,
} from "firebase/firestore";
import ITodo from "../types/Todo";
import useTodoStore from "../store/useTodoStore";

const useTodos = (db: Firestore) => {
  const setTodos = useTodoStore((state) => state.setTodos);
  const [loading, setLoading] = useState(false);

  const createTodo = async (text: string) => {
    if (text === "") return;

    setLoading(true);
    try {
      await addDoc(collection(db, "todos"), {
        text,
        completed: false,
        timestamp: new Date(),
      });
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const toggleComplete = async (todo: ITodo) => {
    setLoading(true);
    try {
      await updateDoc(doc(db, "todos", todo.id), {
        completed: !todo.completed,
      });
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const deleteTodo = async (id: string) => {
    setLoading(true);
    try {
      await deleteDoc(doc(db, "todos", id));
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const clearCompletedTodos = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, "todos"), where("completed", "==", true));
      const querySnapshot = await getDocs(q);

      const batch = writeBatch(db);
      querySnapshot.forEach((document) => {
        batch.delete(document.ref);
      });

      await batch.commit();
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    const q = query(collection(db, "todos"), orderBy("timestamp", "asc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const todosArr: ITodo[] = [];
      querySnapshot.forEach((document) => {
        todosArr.push({ ...document.data(), id: document.id } as ITodo);
      });
      setTodos(todosArr);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [db, setTodos]);

  return {
    loading,
    toggleComplete,
    deleteTodo,
    createTodo,
    clearCompletedTodos,
  };
};

export default useTodos;
