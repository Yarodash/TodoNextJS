"use client"

import AddPath from "@/store/PathContext";
import {TasksContext} from "@/store/TasksContext";
import CurrentListContextProvider from "@/store/CurrentListContext";
import {useContext, useEffect, useMemo, useState} from "react";
import {Task} from "@/declarations/data/Task";
import TasksLayout from "@/ui/tasklist/TasksLayout/TasksLayout";
import {ListsContext} from "@/store/ListsContext";
import ListHeader from "@/ui/tasklist/ListHeader/ListHeader";

export default function Layout(
  {children, params}: { children: React.ReactNode, params: any }
) {
  const { find } = useContext(ListsContext);
  const { load } = useContext(TasksContext);
  const [tasks, setTasks] = useState([] as Task[]);

  useEffect(() => {
    load(params.list_id).then(setTasks);
  }, [load, params.list_id]);

  const list = useMemo(() => {
    return find(params.list_id);
  }, [find, params.list_id]);

  if (list === undefined) {
    return (
      <div>Not found</div>
    );
  }

  return (
    <AddPath append={`lists/${params.list_id}`}>
      <CurrentListContextProvider initial={list?.id || "all"}>
        <TasksLayout
          header={<ListHeader list={list}/>}
          tasks={tasks}
        >
          {children}
        </TasksLayout>
      </CurrentListContextProvider>
    </AddPath>
  )
}
