import {ReactNode} from "react";
import {requestGetLists} from "@/requests/ListRequests";
import {requestGetTags} from "@/requests/TagRequests";
import ListsContextProvider from "@/store/ListsContext";
import TagsContextProvider from "@/store/TagsContext";

interface ProviderProps {
  children: ReactNode,
}

export default async function ListsTagsContextLoad({ children }: ProviderProps) {
  const lists = await requestGetLists();
  const tags = await requestGetTags();

  return (
    <ListsContextProvider initial={lists}>
      <TagsContextProvider initial={tags}>
        {children}
      </TagsContextProvider>
    </ListsContextProvider>
  )
}
