import styles from "./TasksLayout.module.scss"
import TaskList from "@/ui/tasklist/TaskList/TaskList";
import {Task} from "@/declarations/data/Task";
import {ReactNode} from "react";

export interface DisplayTasksProps {
  tasks: Task[],
  header: ReactNode,
  children: ReactNode,
}

function TasksLayout({ tasks, header, children }: DisplayTasksProps) {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        {header}
        <TaskList tasks={tasks}/>
      </div>
      {children}
    </main>
  );
}

export default TasksLayout;
