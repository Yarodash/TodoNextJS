"use client"

import styles from "./TaskList.module.scss"
import TaskItem from "@/ui/tasklist/TaskItem/TaskItem";
import TaskAdd from "@/ui/tasklist/TaskAdd/TaskAdd";
import {Task} from "@/declarations/data/Task";

export interface TaskListProps {
  tasks: Task[],
}

function TaskList({ tasks }: TaskListProps) {
  return (
    <div className={styles.tasklist}>
      <TaskAdd/>
      {tasks.map(task =>
        <TaskItem key={task.id} task={task}/>
      )}
    </div>
  );
}

export default TaskList;
