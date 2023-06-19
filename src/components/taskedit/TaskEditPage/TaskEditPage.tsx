"use client"

import {useContext, useMemo} from "react";
import {TasksContext} from "@/store/TasksContext";
import TaskEdit from "@/ui/taskedit/TaskEdit/TaskEdit";

export interface TaskEditPageProps {
  task_id: string,
}

function TaskEditPage({ task_id }: TaskEditPageProps) {
  const { find } = useContext(TasksContext);

  const task = useMemo(() => find(task_id), [task_id]);

  if (task === undefined) {
    return (
      <div>Not Found</div>
    )
  }

  return (
    <TaskEdit initial={task}/>
  )
}

export default TaskEditPage;
