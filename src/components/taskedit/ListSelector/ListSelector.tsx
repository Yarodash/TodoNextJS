"use client"

import styles from "./ListSelector.module.scss"
import {useContext} from "react";
import {ListsContext} from "@/store/ListsContext";

export interface ListSelectorProps {
  id: string,
  setId: (id: string) => void,
}

function ListSelector({ id, setId }: ListSelectorProps) {
  const { lists } = useContext(ListsContext);

  return (
    <select
      className={styles.list_selector}
      value={id}
      onChange={e => setId(e.target.value)}
    >
      {lists.map(list =>
        <option key={list.id} value={list.id}>
          {list.title}
        </option>
      )}
    </select>
  );
}

export default ListSelector;
