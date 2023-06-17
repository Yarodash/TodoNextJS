"use client"

import styles from "./MenuContent.module.scss"
import CustomText from "@/components/common/Text/CustomText";
import SearchBar from "@/components/menu/SearchBar/SearchBar";
import MenuBlock from "@/components/menu/MenuBlock/MenuBlock";
import MenuItem from "@/components/menu/MenuItem/MenuItem";
import Icon from "@/components/common/Icon/Icon";
import NumberChip from "@/components/common/NumberChip/NumberChip";
import ColorIcon from "@/components/common/ColorIcon/ColorIcon";
import Link from "next/link";
import TagsContainer from "@/ui/common/TagsContainer/TagsContainer";
import TagItemLink from "@/ui/common/TagItemLink/TagItemLink";
import {useContext, useEffect} from "react";
import {ListsContext} from "@/store/ListsContext";
import {TagsContext} from "@/store/TagsContext";

async function MenuContent() {
  const { lists } = useContext(ListsContext);
  const { tags } = useContext(TagsContext);

  return (
    <div className={styles.menu_content}>
      <Link className={styles.title} href="/">
        <CustomText scale="large" bold>Menu</CustomText>
      </Link>
      <SearchBar/>
      <MenuBlock title="TASKS">
        <MenuItem icon={<Icon src="/time.svg"/>} title="Upcoming" detail={<NumberChip>{12}</NumberChip>}/>
        <MenuItem icon={<Icon src="/list.svg"/>} title="Today" detail={<NumberChip>{5}</NumberChip>}/>
        <MenuItem icon={<Icon src="/calendar.svg"/>} title="Calendar"/>
        <MenuItem icon={<Icon src="/sticker.svg"/>} title="Sticky Wall"/>
      </MenuBlock>
      <MenuBlock title="LISTS">
        {lists.map(list =>
          <Link key={list.id} href={`/lists/${list.id}`} prefetch={false}>
            <MenuItem
              icon={<ColorIcon color={list.color}/>}
              title={list.title}
              detail={<NumberChip>{list.count}</NumberChip>}/>
          </Link>
        )}
      </MenuBlock>
      <MenuBlock title="TAGS">
        <TagsContainer>
          {tags.map(tag =>
            <TagItemLink key={tag.id} tag={tag}/>
          )}
        </TagsContainer>
      </MenuBlock>
    </div>
  );
}

export default MenuContent;
