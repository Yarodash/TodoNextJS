"use client"

import styles from "./TagItemLink.module.scss"
import {Tag} from "@/declarations/data/Tag";
import clsx from "clsx";
import CustomText from "@/ui/common/Text/CustomText";

export interface TagItemLinkProps {
  tag: Tag,
}

function TagItemLink({ tag }: TagItemLinkProps) {
  return (
    <div
      className={clsx(styles.tag_item)}
      style={{backgroundColor: tag.color}}>
      <CustomText className={styles.text} scale="small">{tag.title}</CustomText>
    </div>
  );
}

export default TagItemLink;
