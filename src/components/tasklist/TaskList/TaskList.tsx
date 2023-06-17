"use client"

import styles from "./TaskList.module.scss"
import {Task} from "@/declarations/data/Task";
import TaskItem from "@/ui/tasklist/TaskItem/TaskItem";
import {useContext} from "react";
import {TasksContext} from "@/store/TasksContext";
import TaskAdd from "@/ui/tasklist/TaskAdd/TaskAdd";

function TaskList() {
  const { tasks } = useContext(TasksContext);

  console.log(tasks);

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
