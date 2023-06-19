import styles from "./SubtasksList.module.scss"
import {Subtask} from "@/declarations/data/Subtask";
import SubtaskItem from "@/ui/taskedit/SubtaskItem/SubtaskItem";
import SubtaskAdd from "@/ui/taskedit/SubtaskAdd/SubtaskAdd";

export interface SubtasksListProps {
  subtasks: Subtask[],
  setSubtasks: (subtasks: Subtask[]) => void,
}

function SubtasksList({ subtasks, setSubtasks }: SubtasksListProps) {
  return (
    <div className={styles.subtasks_list}>
      <SubtaskAdd onAdd={subtask => setSubtasks([...subtasks, subtask])}/>
      {subtasks.map((subtask, index) =>
        <SubtaskItem
          key={index}
          subtask={subtask}
          setSubtask={subtask => setSubtasks(subtasks.map((s, i) => i === index ? subtask : s))}
          onDelete={() => setSubtasks(subtasks.filter((s, i) => i !== index))}
        />
      )}
    </div>
  );
}

export default SubtasksList;
