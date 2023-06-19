"use client"

import styles from "./TagItemLink.module.scss"
import {Tag} from "@/declarations/data/Tag";
import clsx from "clsx";
import CustomText from "@/ui/common/Text/CustomText";
import Link from "next/link";

export interface TagItemLinkProps {
  tag: Tag,
}

function TagItemLink({ tag }: TagItemLinkProps) {
  return (
    <Link href={`/tags/${tag.id}`}
      className={clsx(styles.tag_item)}
      style={{"--color": tag.color} as any}>
      <CustomText className={styles.text} scale="small">{tag.title}</CustomText>
    </Link>
  );
}

export default TagItemLink;
