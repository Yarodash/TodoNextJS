"use client"

import styles from "./TaskItem.module.scss"
import {Task} from "@/declarations/data/Task";
import CustomText from "@/ui/common/Text/CustomText";
import Icon from "@/ui/common/Icon/Icon";
import NumberChip from "@/ui/common/NumberChip/NumberChip";
import {useContext} from "react";
import {ListsContext} from "@/store/ListsContext";
import ColorIcon from "@/ui/common/ColorIcon/ColorIcon";
import {PathContext} from "@/store/PathContext";
import Link from "next/link";
import Checkbox from "@/ui/common/Checkbox/Checkbox";
import {TasksContext} from "@/store/TasksContext";
import {TagsContext} from "@/store/TagsContext";
import {Tag} from "@/declarations/data/Tag";
import DisplayTagSmall from "@/ui/tasklist/DisplayTagSmall/DisplayTagSmall";

export interface TaskItemProps {
  task: Task,
}

function TaskItem({ task }: TaskItemProps) {
  const { href } = useContext(PathContext);
  const list = useContext(ListsContext).find(task.list_id);
  const { update } = useContext(TasksContext);
  const { find } = useContext(TagsContext);

  const tags = task.tag_ids.map(find) as Tag[];

  return (
    <Link href={`${href}/task/${task.id}`}>
      <div className={styles.task_item}>
        <Checkbox value={task.done} setValue={done => update({id: task.id, done: done})}/>
        <div className={styles.top_part}>
          <CustomText>{task.title}</CustomText>
        </div>
        <div className={styles.bottom_part}>
          {list &&
            <div className={styles.bottom_item}>
              <ColorIcon color={list.color}/>
              <CustomText scale="small">{list.title}</CustomText>
            </div>
          }
          <div className={styles.bottom_item}>
            <NumberChip scale="small">{task.subtasks.length}</NumberChip>
            <CustomText scale="small">Subtasks</CustomText>
          </div>
          {tags.map(tag => <DisplayTagSmall key={tag.id} tag={tag}/>)}
        </div>
        <Icon className={styles.icon} src="/right.svg"/>
      </div>
    </Link>
  );
}

export default TaskItem;
