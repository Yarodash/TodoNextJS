"use client"

import styles from "./TaskAdd.module.scss"
import {useContext, useState} from "react";
import {TasksContext} from "@/store/TasksContext";
import Icon from "@/ui/common/Icon/Icon";
import {createEmptyTask} from "@/declarations/data/Task";
import Input from "@/ui/common/Input/Input";
import {CurrentListContext} from "@/store/CurrentListContext";

function TaskAdd() {
  const { addNew } = useContext(TasksContext);
  const { list_id } = useContext(CurrentListContext);

  const [title, setTitle] = useState("");

  function addHandler() {
    if (title.trim().length > 0) {
      addNew({...createEmptyTask(), title, list_id});
      setTitle("");
    }
  }

  return (
    <div className={styles.task_add}>
      <Icon
        className={styles.plus}
        src="/plus.svg"
        onClick={addHandler}
      />
      <Input
        value={title}
        setValue={setTitle}
        placeholder="Add New Task"
      />
    </div>
  );
}

export default TaskAdd;
