"use client"

import {createContext, ReactNode, useState} from "react";
import {Tag} from "@/declarations/data/Tag";

interface TagsContextType {
  tags: Tag[],
  find: (id: string) => Tag | undefined,
}

export const TagsContext = createContext<TagsContextType>({
  tags: [],
  find: () => undefined,
});

interface ProviderProps {
  initial: Tag[],
  children: ReactNode,
}

export default function TagsContextProvider({ initial, children }: ProviderProps) {
  const [tags, setTags] = useState(initial);

  console.log("ABOBA");

  const value: TagsContextType = {
    tags,
    find: (id: string) => tags.find(tag => tag.id === id),
  }

  return (
    <TagsContext.Provider value={value}>
      {children}
    </TagsContext.Provider>
  )
}
