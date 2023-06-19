import {useContext} from "react";
import {TagsContext} from "@/store/TagsContext";
import TagItemDelete from "@/ui/taskedit/TagItemDelete/TagItemDelete";
import {Tag} from "@/declarations/data/Tag";
import TagsContainer from "@/ui/common/TagsContainer/TagsContainer";
import AddTag from "@/ui/taskedit/AddTag/AddTag";

export interface TagsSelectorProps {
  ids: string[],
  setIds: (ids: string[]) => void,
}

function TagsSelector({ ids, setIds }: TagsSelectorProps) {
  const { tags, find } = useContext(TagsContext);

  const selectedTags = ids.map(find).filter(tag => tag !== undefined) as Tag[];

  return (
    <TagsContainer>
      {selectedTags.map(tag =>
        <TagItemDelete
          key={tag.id}
          tag={tag}
          onDelete={() => setIds(ids.filter(id => id != tag.id))}/>
      )}
      {tags.length > selectedTags.length &&
        <AddTag ids={ids} setIds={setIds}/>
      }
    </TagsContainer>
  );
}

export default TagsSelector;
