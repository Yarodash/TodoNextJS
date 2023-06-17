import styles from "./MenuBlock.module.scss"
import {ReactNode} from "react";
import CustomText from "@/components/common/Text/CustomText";
import clsx from "clsx";

export interface MenuBlockProps {
  title: string,
  children: ReactNode,
}

function MenuBlock({ title, children }: MenuBlockProps) {
  return (
    <section className={styles.menu_block}>
      <CustomText className={clsx("margin-bottom-small", styles.title)} scale="small" bold>{title}</CustomText>
      {children}
    </section>
  );
}

export default MenuBlock;
