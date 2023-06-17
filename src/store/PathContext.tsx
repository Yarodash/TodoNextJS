"use client"

import {createContext, ReactNode, useContext} from "react";

export interface PathContextType {
  href: string,
}

export const PathContext = createContext<PathContextType>({
  href: "/",
});

interface ProviderProps {
  append: string,
  children: ReactNode,
}

export default function AddPath({ append, children }: ProviderProps) {
  const { href } = useContext(PathContext);

  return (
    <PathContext.Provider value={{href: href + append}}>
      {children}
    </PathContext.Provider>
  )
}
