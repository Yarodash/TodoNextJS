"use client"

import AddPath from "@/store/PathContext";
import {TasksContext} from "@/store/TasksContext";
import {useContext, useEffect, useMemo, useState} from "react";
import {Task} from "@/declarations/data/Task";
import TasksLayout from "@/ui/tasklist/TasksLayout/TasksLayout";
import CurrentTagContextProvider from "@/store/CurrentTagContext";
import {TagsContext} from "@/store/TagsContext";
import TagHeader from "@/ui/tasklist/TagHeader/TagHeader";

export default function Layout(
  {children, params}: { children: React.ReactNode, params: any }
) {
  const { find } = useContext(TagsContext);
  const { loadByTag } = useContext(TasksContext);
  const [tasks, setTasks] = useState([] as Task[]);

  useEffect(() => {
    loadByTag(params.tag_id).then(setTasks);
  }, [loadByTag, params.tag_id]);

  const tag = useMemo(() => {
    return find(params.tag_id);
  }, [find, params.tag_id]);

  if (tag === undefined) {
    return (
      <div>Not found</div>
    )
  }

  return (
    <AddPath append={`tags/${params.tag_id}`}>
      <CurrentTagContextProvider initial={params.tag_id}>
        <TasksLayout
          header={<TagHeader tag={tag} count={tasks.length}/>}
          tasks={tasks}
        >
          {children}
        </TasksLayout>
      </CurrentTagContextProvider>
    </AddPath>
  )
}
