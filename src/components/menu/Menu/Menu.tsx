"use client"

import styles from "./Menu.module.scss"
import Icon from "@/components/common/Icon/Icon";
import Link from "next/link";
import CustomText from "@/ui/common/Text/CustomText";
import SearchBar from "@/ui/menu/SearchBar/SearchBar";
import MenuBlock from "@/ui/menu/MenuBlock/MenuBlock";
import MenuItem from "@/ui/menu/MenuItem/MenuItem";
import NumberChip from "@/ui/common/NumberChip/NumberChip";
import TagsBlock from "@/ui/menu/TagsBlock/TagsBlock";
import ListsBlock from "@/ui/menu/ListsBlock/ListsBlock";

function MenuContent() {
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
        <ListsBlock/>
      </MenuBlock>
      <MenuBlock title="TAGS">
        <TagsBlock/>
      </MenuBlock>
    </div>
  );
}

function Menu() {
  return (
    <aside className={styles.menu}>
      <MenuContent/>
      <Icon
        className={styles.open}
        src="/menu.svg"
        scale="large"
        onClick={() => {}}/>
    </aside>
  );
}

export default Menu;
