import AddPath from "@/store/PathContext";
import {requestGetTask} from "@/requests/TaskRequests";
import TaskEdit from "@/ui/taskedit/TaskEdit/TaskEdit";
import {notFound} from "next/navigation";

export default async function Page({ params }: { params: any }) {
  const task = await requestGetTask(params.task_id);

  if (task == undefined) {
    notFound();
    return null;
  }

  return (
    <AddPath append={`/task/${params.task_id}`}>
      <TaskEdit initial={task}/>
    </AddPath>
  )
}
