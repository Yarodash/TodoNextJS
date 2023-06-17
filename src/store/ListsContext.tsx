"use client"

import {createContext, ReactNode, useCallback, useEffect, useMemo, useState} from "react";
import {List} from "@/declarations/data/List";
import {requestGetLists} from "@/requests/ListRequests";

interface ListsContextType {
  lists: List[],
  find: (id: string) => List | undefined,
  refresh: () => void,
}

export const ListsContext = createContext<ListsContextType>({
  lists: [],
  find: () => undefined,
  refresh: () => {},
});

interface ProviderProps {
  initial: List[],
  children: ReactNode,
}

export default function ListsContextProvider({ initial, children }: ProviderProps) {
  const [lists, setLists] = useState(initial);

  console.log("LIST UPDATE", lists);

  const find = useCallback((id: string) => {
    return lists.find(list => list.id === id);
  }, [lists]);

  const refresh = useCallback(() => {
    requestGetLists().then(setLists);
  }, []);

  const value: ListsContextType = useMemo(() => ({
    lists,
    find,
    refresh,
  }), [lists, find, refresh]);

  return (
    <ListsContext.Provider value={value}>
      {children}
    </ListsContext.Provider>
  )
}
