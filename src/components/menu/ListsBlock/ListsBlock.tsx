"use client"

import styles from "./ListsBlock.module.scss";
import Link from "next/link";
import MenuItem from "@/ui/menu/MenuItem/MenuItem";
import ColorIcon from "@/ui/common/ColorIcon/ColorIcon";
import NumberChip from "@/ui/common/NumberChip/NumberChip";
import {useCallback, useContext, useState} from "react";
import {ListsContext} from "@/store/ListsContext";
import ColorfulCreator from "@/ui/menu/ColorfulCreator/ColorfulCreator";
import {List} from "@/declarations/data/List";
import Icon from "@/ui/common/Icon/Icon";
import CustomText from "@/ui/common/Text/CustomText";

function ListsBlock() {
  const [opened, setOpened] = useState(false);
  const { lists, addNew } = useContext(ListsContext);

  const handleCreate = useCallback((title: string, color: string) => {
    if (title.trim().length > 0) {
      addNew({id: "", title: title.trim(), color} as List);
    }
    setOpened(false);
  }, [addNew]);

  return (
    <div className={styles.lists_block}>
      <div className={styles.content}>
        {lists.map(list =>
          <Link
            key={list.id}
            href={`/lists/${list.id}`}
            prefetch={false}>
            <MenuItem
              icon={<ColorIcon color={list.color}/>}
              title={list.title}
              detail={<NumberChip>{list.count}</NumberChip>}/>
          </Link>
        )}
      </div>
      {!opened &&
      <div className={styles.new_list} onClick={() => setOpened(true)}>
        <Icon src="/plus.svg"/>
        <CustomText gray>Add New List</CustomText>
      </div>}
      {opened && <ColorfulCreator onCreate={handleCreate} placeholder={"List Name"}/>}
    </div>
  );
}

export default ListsBlock;
