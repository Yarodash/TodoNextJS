"use client"

import styles from "./TagSelector.module.scss"
import {useContext} from "react";
import {TagsContext} from "@/store/TagsContext";

export interface TagSelectorProps {
  id: string,
  setId: (id: string) => void,
  ignore: string[],
}

function TagSelector({ id, setId, ignore }: TagSelectorProps) {
  const { tags } = useContext(TagsContext);

  return (
    <select
      autoFocus
      className={styles.tag_selector}
      value={id}
      onChange={e => setId(e.target.value)}
    >
      <option key="empty" value="">...</option>
      {tags
        .filter(tag => !ignore.includes(tag.id))
        .map(tag =>
        <option key={tag.id} value={tag.id}>
          {tag.title}
        </option>
      )}
    </select>
  );
}

export default TagSelector;
