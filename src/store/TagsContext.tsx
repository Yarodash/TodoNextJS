"use client"

import {createContext, ReactNode, useCallback, useState} from "react";
import {Tag} from "@/declarations/data/Tag";
import {requestPostTag, requestPutTag} from "@/requests/TagRequests";

interface TagsContextType {
  tags: Tag[],
  find: (id: string) => Tag | undefined,
  addNew: (tag: Tag) => Promise<void>,
  update: (tag: Tag) => Promise<void>,
}

export const TagsContext = createContext<TagsContextType>({} as TagsContextType);

interface ProviderProps {
  initial: Tag[],
  children: ReactNode,
}

export default function TagsContextProvider({ initial, children }: ProviderProps) {
  const [tags, setTags] = useState(initial);

  const find = useCallback((id: string) => {
    return tags.find(tag => tag.id === id);
  }, [tags]);

  const addNew = useCallback(async (tag: Tag) => {
    const tagCreated = await requestPostTag(tag);

    if (tagCreated !== null) {
      setTags(tags => [...tags, tagCreated]);
    }
  }, []);

  const update = useCallback(async (tag: Tag) => {
    const tagUpdated = await requestPutTag(tag);

    if (tagUpdated !== null) {
      setTags(tags => tags.map(t => t.id === tagUpdated.id ? tagUpdated : t));
    }
  }, []);

  const value: TagsContextType = {
    tags,
    find,
    addNew,
    update,
  }

  return (
    <TagsContext.Provider value={value}>
      {children}
    </TagsContext.Provider>
  )
}
