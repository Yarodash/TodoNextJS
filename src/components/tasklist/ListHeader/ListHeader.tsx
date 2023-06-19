"use client"

import {List} from "@/declarations/data/List";
import {useCallback, useContext} from "react";
import {ListsContext} from "@/store/ListsContext";
import Header from "@/ui/tasklist/Header/Header";

export interface ListHeaderProps {
  list: List,
}

function ListHeader({ list }: ListHeaderProps) {
  const { update } = useContext(ListsContext);

  const updateHandler = useCallback((title: string) => {
    if (title.trim().length > 0) {
      update({...list, title: title.trim()});
    }
  }, [list, update]);

  return (
    <Header title={list.title} number={list.count} update={updateHandler}/>
  )
}

export default ListHeader;
