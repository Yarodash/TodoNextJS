import styles from "./layout.module.scss"
import {requestGetTasksByList} from "@/requests/TaskRequests";
import TaskList from "@/ui/tasklist/TaskList/TaskList";
import AddPath from "@/store/PathContext";
import ListsTagsContextLoad from "@/store/ListsTagsContextLoad";
import TasksContextProvider from "@/store/TasksContext";
import {Task} from "@/declarations/data/Task";
import CurrentListContextProvider from "@/store/CurrentListContext";

export default async function Layout(
  {children, params}: { children: React.ReactNode, params: any }
) {
  const tasks = await requestGetTasksByList(params.list_id);

  return (
    <AddPath append={`lists/${params.list_id}`}>
      <main className={styles.main}>
        <TasksContextProvider initial={tasks}>
          <CurrentListContextProvider initial={params.list_id}>
            <TaskList/>
            {children}
          </CurrentListContextProvider>
        </TasksContextProvider>
      </main>
    </AddPath>
  )
}
