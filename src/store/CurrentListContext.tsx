"use client"

import {createContext, ReactNode, useState} from "react";

interface CurrentListContextType {
  list_id: string,
}

export const CurrentListContext = createContext<CurrentListContextType>({
  list_id: "",
});

interface ProviderProps {
  initial: string,
  children: ReactNode,
}

export default function CurrentListContextProvider({ initial, children }: ProviderProps) {
  const [list_id, setListId] = useState(initial);

  const value: CurrentListContextType = {
    list_id,
  }

  return (
    <CurrentListContext.Provider value={value}>
      {children}
    </CurrentListContext.Provider>
  )
}
