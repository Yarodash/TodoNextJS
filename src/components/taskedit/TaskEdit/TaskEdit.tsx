"use client"

import styles from "./TaskEdit.module.scss"
import {Task} from "@/declarations/data/Task";
import CustomText from "@/ui/common/Text/CustomText";
import {useContext, useState} from "react";
import Input from "@/ui/common/Input/Input";
import ListSelector from "@/ui/taskedit/ListSelector/ListSelector";
import TagsSelector from "@/ui/taskedit/TagsSelector/TagsSelector";
import SubtasksList from "@/ui/taskedit/SubtasksList/SubtasksList";
import SpecialButton from "@/ui/taskedit/SpecialButton/SpecialButton";
import {TasksContext} from "@/store/TasksContext";
import {useRouter} from "next/navigation";
import {PathContext} from "@/store/PathContext";
import Icon from "@/ui/common/Icon/Icon";
import Link from "next/link";

export interface TaskEditProps {
  initial: Task
}

function TaskEdit({ initial }: TaskEditProps) {
  const [task, setTask] = useState(initial);
  const { update, remove } = useContext(TasksContext);
  const router = useRouter()
  const { href } = useContext(PathContext);
  
  function saveHandler() {
    const {done, ...taskPut} = task;
    update(taskPut);
  }

  function deleteHandler() {
    remove(task);
    router.push(href);
  }

  return (
    <div className={styles.task_edit}>
      <CustomText scale="large" bold>Task:</CustomText>
      <Link className={styles.close} href={href}>
        <Icon src="/close.svg" scale="large"/>
      </Link>
      <Input
        className={styles.input}
        value={task.title}
        setValue={title => setTask({...task, title})}
      />
      <Input
        className={styles.input}
        value={task.description}
        setValue={description => setTask({...task, description})}
        multiline
      />
      <div className={styles.more_data}>
        <CustomText scale="small">List</CustomText>
        <ListSelector id={task.list_id} setId={id => setTask({...task, list_id: id})}/>
        <CustomText scale="small">Due date</CustomText>
        ...
        <CustomText scale="small">Tags</CustomText>
        <TagsSelector ids={task.tag_ids} setIds={tag_ids => setTask({...task, tag_ids})}/>
      </div>
      <CustomText scale="large" bold>Subtasks:</CustomText>
      <SubtasksList subtasks={task.subtasks} setSubtasks={subtasks => setTask({...task, subtasks})}/>
      <div className={styles.controls}>
        <SpecialButton onClick={deleteHandler}>Delete Task</SpecialButton>
        <SpecialButton onClick={saveHandler} accent>Save changes</SpecialButton>
      </div>
    </div>
  );
}

export default TaskEdit;
