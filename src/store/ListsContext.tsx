"use client"

import {createContext, ReactNode, useCallback, useMemo, useState} from "react";
import {List} from "@/declarations/data/List";
import {requestGetLists, requestPostList, requestPutList} from "@/requests/ListRequests";

interface ListsContextType {
  lists: List[],
  find: (id: string) => List | undefined,
  addNew: (list: List) => Promise<void>,
  refresh: () => void,
  update: (list: List) => Promise<void>,
}

export const ListsContext = createContext({} as ListsContextType);

interface ProviderProps {
  initial: List[],
  children: ReactNode,
}

export default function ListsContextProvider({ initial, children }: ProviderProps) {
  const [lists, setLists] = useState(initial);

  const find = useCallback((id: string) => {
    return lists.find(list => list.id === id);
  }, [lists]);

  const refresh = useCallback(() => {
    requestGetLists().then(setLists);
  }, []);

  const addNew = useCallback(async (list: List) => {
    const listCreated = await requestPostList(list);

    if (listCreated !== null) {
      setLists(lists => [...lists, listCreated]);
    }
  }, []);

  const update = useCallback(async (list: List) => {
    const listUpdated = await requestPutList(list);

    if (listUpdated !== null) {
      setLists(lists => lists.map(l => l.id === listUpdated.id ? listUpdated : l));
    }
  }, []);

  const value: ListsContextType = useMemo(() => ({
    lists,
    find,
    addNew,
    refresh,
    update,
  }), [lists, find, addNew, refresh, update]);

  return (
    <ListsContext.Provider value={value}>
      {children}
    </ListsContext.Provider>
  )
}
