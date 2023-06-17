"use client"

import styles from "./Menu.module.scss"
import Icon from "@/components/common/Icon/Icon";
import {ReactNode} from "react";

export interface MenuProps {
  children: ReactNode,
}

function Menu({ children }: MenuProps) {
  return (
    <aside className={styles.menu}>
      {children}
      <Icon
        className={styles.open}
        src="/menu.svg"
        scale="large"
        onClick={() => {}}/>
    </aside>
  );
}

export default Menu;
