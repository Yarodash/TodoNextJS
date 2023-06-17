import styles from "./SubtaskAdd.module.scss"
import {createEmptySubtask, Subtask} from "@/declarations/data/Subtask";
import Input from "@/ui/common/Input/Input";
import Icon from "@/ui/common/Icon/Icon";
import {useState} from "react";

export interface SubtaskAddProps {
  onAdd: (subtask: Subtask) => void,
}

function SubtaskAdd({ onAdd }: SubtaskAddProps) {
  const [subtask, setSubtask] = useState(createEmptySubtask());

  function addHandler() {
    if (subtask.title.length > 0) {
      onAdd(subtask);
      setSubtask(createEmptySubtask());
    }
  }

  return (
    <div className={styles.subtask_add}>
      <Icon
        className={styles.plus}
        src="/plus.svg"
        onClick={addHandler}
      />
      <Input
        className={styles.input}
        value={subtask.title}
        setValue={title => setSubtask({...subtask, title})}
        placeholder="Add New Subtask"
      />
    </div>
  );
}

export default SubtaskAdd;
