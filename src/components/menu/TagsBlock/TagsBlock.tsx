"use client"

import styles from "./TagsBlock.module.scss"
import TagsContainer from "@/ui/common/TagsContainer/TagsContainer";
import TagItemLink from "@/ui/menu/TagItemLink/TagItemLink";
import ColorfulCreator from "@/ui/menu/ColorfulCreator/ColorfulCreator";
import {TagsContext} from "@/store/TagsContext";
import {useCallback, useContext, useState} from "react";
import NewTagButton from "@/ui/menu/NewTagButton/NewTagButton";

function TagsBlock() {
  const [opened, setOpened] = useState(false);
  const { tags, addNew } = useContext(TagsContext);

  const handleCreate = useCallback((title: string, color: string) => {
    if (title.trim().length > 0) {
      addNew({id: "", title: title.trim(), color});
    }
    setOpened(false);
  }, [addNew]);

  return (
    <div className={styles.tags_block}>
      <TagsContainer>
        {tags.map(tag =>
          <TagItemLink key={tag.id} tag={tag}/>
        )}
        {!opened && <NewTagButton onClick={() => setOpened(true)}/>}
      </TagsContainer>
      {opened && <ColorfulCreator onCreate={handleCreate} placeholder="Tag Name"/>}
    </div>
  );
}

export default TagsBlock;
