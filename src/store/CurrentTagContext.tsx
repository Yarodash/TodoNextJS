"use client"

import {createContext, ReactNode, useState} from "react";

interface CurrentTagContextType {
  tag_id: string,
}

export const CurrentTagContext = createContext<CurrentTagContextType>({
  tag_id: "",
});

interface ProviderProps {
  initial: string,
  children: ReactNode,
}

export default function CurrentTagContextProvider({ initial, children }: ProviderProps) {
  const [tag_id, setTagId] = useState(initial);

  const value: CurrentTagContextType = {
    tag_id,
  }

  return (
    <CurrentTagContext.Provider value={value}>
      {children}
    </CurrentTagContext.Provider>
  )
}
