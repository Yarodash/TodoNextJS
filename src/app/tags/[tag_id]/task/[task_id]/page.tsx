import TaskEditPage from "@/ui/taskedit/TaskEditPage/TaskEditPage";

export default function Page({ params }: { params: any }) {
  return (
    <TaskEditPage task_id={params.task_id}/>
  )
}
