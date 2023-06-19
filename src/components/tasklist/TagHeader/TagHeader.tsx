"use client"

import {List} from "@/declarations/data/List";
import {useCallback, useContext} from "react";
import {ListsContext} from "@/store/ListsContext";
import Header from "@/ui/tasklist/Header/Header";
import {Tag} from "@/declarations/data/Tag";
import {TagsContext} from "@/store/TagsContext";

export interface ListHeaderProps {
  tag: Tag,
  count: number,
}

function TagHeader({ tag, count }: ListHeaderProps) {
  const { update } = useContext(TagsContext);

  const updateHandler = useCallback((title: string) => {
    if (title.trim().length > 0) {
      update({...tag, title: title.trim()});
    }
  }, [tag, update]);

  return (
    <Header title={tag.title} number={count} update={updateHandler}/>
  )
}

export default TagHeader;
