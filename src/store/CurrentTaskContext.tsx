"use client"

import {createContext, ReactNode, useState} from "react";

interface CurrentTaskContextType {
  task_id: string,
}

export const CurrentTaskContext = createContext<CurrentTaskContextType>({
  task_id: "",
});

interface ProviderProps {
  initial: string,
  children: ReactNode,
}

export default function CurrentTaskContextProvider({ initial, children }: ProviderProps) {
  const [task_id, setTaskId] = useState(initial);

  const value: CurrentTaskContextType = {
    task_id,
  }

  return (
    <CurrentTaskContext.Provider value={value}>
      {children}
    </CurrentTaskContext.Provider>
  )
}
