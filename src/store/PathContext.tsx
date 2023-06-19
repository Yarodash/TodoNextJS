"use client"

import {createContext, ReactNode, useContext} from "react";

export interface PathContextType {
  href: string,
  hrefs: string[],
}

export const PathContext = createContext<PathContextType>({
  href: "/",
  hrefs: [],
});

interface ProviderProps {
  append: string,
  children: ReactNode,
}

export default function AddPath({ append, children }: ProviderProps) {
  const { href, hrefs } = useContext(PathContext);

  return (
    <PathContext.Provider value={{href: href + append, hrefs: [...hrefs, href]}}>
      {children}
    </PathContext.Provider>
  )
}
