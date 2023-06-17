import styles from "./MenuItem.module.scss"
import {ReactNode} from "react";
import CustomText from "@/components/common/Text/CustomText";

export interface MenuItemProps {
  icon: ReactNode,
  title: string,
  detail?: ReactNode,
}

function MenuItem({ icon, title, detail = undefined }: MenuItemProps) {
  return (
    <div className={styles.menu_item}>
      {icon}
      <CustomText className={styles.title} scale="normal">{title}</CustomText>
      {detail}
    </div>
  );
}

export default MenuItem;
