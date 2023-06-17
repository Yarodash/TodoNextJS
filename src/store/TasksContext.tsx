"use client"

import {createContext, ReactNode, useContext, useState} from "react";
import {Task} from "@/declarations/data/Task";
import {requestPostTask} from "@/requests/TaskRequests";
import {ListsContext} from "@/store/ListsContext";

interface TasksContextType {
  tasks: Task[],
  addNew: (task: Task) => Promise<void>,
  update: (task: Task) => void,
}

export const TasksContext = createContext<TasksContextType>({
  tasks: [],
  addNew: async () => {},
  update: () => {},
});

interface ProviderProps {
  initial: Task[],
  children: ReactNode,
}

export default function TasksContextProvider({ initial, children }: ProviderProps) {
  const [tasks, setTasks] = useState(initial);
  const { refresh: refreshLists } = useContext(ListsContext);

  async function addNew(task: Task) {
    console.log("ABC");
    const taskCreated = await requestPostTask(task);
    refreshLists();

    if (taskCreated !== undefined) {
      //setTasks(tasks => [...tasks, taskCreated]);
    }
  }

  async function update(task: Task) {

  }

  const value: TasksContextType = {
    tasks,
    addNew,
    update,
  }

  return (
    <TasksContext.Provider value={value}>
      {children}
    </TasksContext.Provider>
  )
}
