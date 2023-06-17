import styles from "./AddTag.module.scss"
import CustomText from "@/ui/common/Text/CustomText";
import Icon from "@/ui/common/Icon/Icon";
import {useContext, useState} from "react";
import TagSelector from "@/ui/taskedit/TagSelector/TagSelector";
import {TagsContext} from "@/store/TagsContext";
import clsx from "clsx";

export interface AddTagProps {
  ids: string[],
  setIds: (ids: string[]) => void,
}

function AddTag({ ids, setIds }: AddTagProps) {
  const { tags, find } = useContext(TagsContext);
  const [select, setSelect] = useState(false);
  const [id, setId] = useState("");

  function apply() {
    setSelect(false);

    if (find(id) !== undefined && !ids.includes(id)) {
      setIds([...ids, id]);
      setId("");
    }
  }

  return (
    <div
      className={styles.add_tag}
      tabIndex={0}
      onClick={() => setSelect(true)}
    >
      <div className={clsx(styles.content, !select && styles.visible)}>
        <Icon src="/plus.svg" scale="small"/>
        <CustomText scale="small">Add Tag</CustomText>
      </div>
      <div className={clsx(styles.content, select && styles.visible)}>
        <Icon
          className={styles.checkmark}
          src="/checkmark.svg"
          onClick={e => { e.stopPropagation(); apply(); }}
        />
        <TagSelector id={id} setId={setId} ignore={ids}/>
      </div>
    </div>
  );
}

export default AddTag;
