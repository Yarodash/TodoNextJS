"use client"

import styles from "./Icon.module.scss"
import clsx from "clsx";
import {Scale} from "@/declarations/design/Scale";

export interface IconProps {
  src: string,
  alt?: string,

  scale?: Scale,

  onClick?: (e: any) => void,

  className?: string,
}

function Icon({
                src,
                alt = "icon",
                scale = "normal",
                onClick = () => {},
                className = ""
}: IconProps) {
  return (
    <div
      className={clsx(styles.icon, scale, className)}
      onClick={onClick}>
      <img className={styles.img} src={src} alt={alt}/>
    </div>
  );
}

export default Icon;
