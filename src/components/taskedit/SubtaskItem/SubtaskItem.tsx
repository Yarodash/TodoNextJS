import styles from "./SubtaskItem.module.scss"
import {Subtask} from "@/declarations/data/Subtask";
import Input from "@/ui/common/Input/Input";
import Icon from "@/ui/common/Icon/Icon";
import Checkbox from "@/ui/common/Checkbox/Checkbox";

export interface SubtaskItemProps {
  subtask: Subtask,
  setSubtask: (subtask: Subtask) => void,
  onDelete: () => void,
}

function SubtaskItem({ subtask, setSubtask, onDelete }: SubtaskItemProps) {
  return (
    <div className={styles.subtask_item}>
      <Checkbox
        className={styles.checkbox}
        value={subtask.done}
        setValue={done => setSubtask({...subtask, done})}
      />
      <Input
        className={styles.input}
        value={subtask.title}
        setValue={title => setSubtask({...subtask, title})}
      />
      <Icon
        className={styles.remove}
        src="/remove.svg"
        onClick={onDelete}
      />
    </div>
  );
}

export default SubtaskItem;
