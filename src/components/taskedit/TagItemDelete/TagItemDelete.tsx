"use client"

import styles from "./TagItemDelete.module.scss"
import {Tag} from "@/declarations/data/Tag";
import clsx from "clsx";
import CustomText from "@/ui/common/Text/CustomText";
import Icon from "@/ui/common/Icon/Icon";

export interface TagItemDeleteProps {
  tag: Tag,
  onDelete?: () => void,
}

function TagItemDelete({ tag, onDelete = () => {} }: TagItemDeleteProps) {
  return (
    <div
      className={clsx(styles.tag_item)}
      onClick={onDelete}
      style={{backgroundColor: tag.color}}
    >
      <CustomText className={styles.text} scale="small">{tag.title}</CustomText>
      <Icon className={styles.delete} src="/trash.svg"/>
    </div>
  );
}

export default TagItemDelete;
