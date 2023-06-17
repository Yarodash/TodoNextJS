"use client"

import styles from "./CustomText.module.scss"
import clsx from "clsx";
import {Scale} from "@/declarations/design/Scale";

export interface CustomTextProps {
  children?: string,

  scale?: Scale,

  gray?: boolean,
  bold?: boolean,

  onClick?: (e: any) => void,

  className?: string
}

function CustomText({
                      children = "",
                      scale = "normal",
                      gray = false,
                      bold = false,
                      onClick = () => {},
                      className = ""
}: CustomTextProps) {
  return (
    <p
      className={clsx(styles.text, scale, gray && styles.gray, bold && styles.bold, className)}
      onClick={onClick}>
      {children}
    </p>
  );
}

export default CustomText;
