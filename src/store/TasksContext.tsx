"use client"

import {createContext, ReactNode, useCallback, useContext, useState} from "react";
import {Task, TaskPut} from "@/declarations/data/Task";
import {
  requestDeleteTask,
  requestGetTasksByList,
  requestGetTasksByTag,
  requestPostTask,
  requestPutTask
} from "@/requests/TaskRequests";
import {ListsContext} from "@/store/ListsContext";

interface TasksContextType {
  tasks: Task[],
  addNew: (task: Task) => Promise<void>,
  update: (task: TaskPut) => void,
  remove: (task: Task) => Promise<void>,
  find: (task_id: string) => Task | undefined,
  load: (list_id: string) => Promise<Task[]>,
  loadByTag: (tag_id: string) => Promise<Task[]>,
}

export const TasksContext = createContext({} as TasksContextType);

interface ProviderProps {
  children: ReactNode,
}

export default function TasksContextProvider({ children }: ProviderProps) {
  const [tasks, setTasks] = useState([] as Task[]);
  const { refresh: refreshLists } = useContext(ListsContext);
  const [loadedLists, setLoadedLists] = useState([] as string[]);
  const [loadedTags, setLoadedTags] = useState([] as string[]);

  const addNew = useCallback(async (task: Task) => {
    const taskCreated = await requestPostTask(task);
    refreshLists();

    if (taskCreated !== null) {
      setTasks(tasks => [...tasks, taskCreated]);
    }
  }, [refreshLists]);

  const update = useCallback(async (task: TaskPut) => {
    const taskUpdated = await requestPutTask(task);
    if (task.list_id !== undefined) {
      refreshLists();
    }

    if (taskUpdated !== null) {
      setTasks(tasks => tasks.map(t => t.id === taskUpdated.id ? taskUpdated : t));
    }
  }, [refreshLists, setTasks]);

  const remove = useCallback(async (task: Task) => {
    await requestDeleteTask(task.id);
    refreshLists();
    setTasks(tasks => tasks.filter(t => t.id !== task.id));
  }, [refreshLists, setTasks]);

  const load = useCallback(async (list_id: string) => {
    // Already loaded
    if (loadedLists.includes(list_id)) {
      if (list_id === "all") {
        return tasks;
      }
      
      return tasks.filter(t => t.list_id === list_id);
    }

    // Not loaded
    const newTasks = await requestGetTasksByList(list_id);

    setTasks(tasks => {
      const uniqueIds = new Set(tasks.map(task => task.id));
      return [...tasks, ...newTasks.filter(task => !uniqueIds.has(task.id))];
    });

    setLoadedLists(loadedLists => [...loadedLists, list_id]);

    return newTasks;
  }, [loadedLists, tasks]);

  const loadByTag = useCallback(async (tag_id: string) => {
    // Already loaded
    if (loadedTags.includes(tag_id)) {
      return tasks.filter(t => t.tag_ids.includes(tag_id));
    }

    // Not loaded
    const newTasks = await requestGetTasksByTag(tag_id);

    setTasks(tasks => {
      const uniqueIds = new Set(tasks.map(task => task.id));
      return [...tasks, ...newTasks.filter(task => !uniqueIds.has(task.id))];
    });

    setLoadedTags(loadedTags => [...loadedTags, tag_id]);

    return newTasks;
  }, [loadedTags, tasks]);

  const find = useCallback((task_id: string) => {
    return tasks.find(t => t.id === task_id);
  }, [tasks]);

  const value: TasksContextType = {
    tasks,
    addNew,
    update,
    remove,
    load,
    loadByTag,
    find,
  }

  return (
    <TasksContext.Provider value={value}>
      {children}
    </TasksContext.Provider>
  )
}
