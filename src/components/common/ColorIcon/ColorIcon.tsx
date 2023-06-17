import styles from "./ColorIcon.module.scss"
import clsx from "clsx";
import {Scale} from "@/declarations/design/Scale";

export interface ColorIconProps {
  color: string,

  scale?: Scale;

  className?: string;
}

function ColorIcon({
                     color,
                     scale = "normal",
                     className = ""
}: ColorIconProps) {
  return (
    <div
      className={clsx(styles.color_icon, scale, className)}
      style={{backgroundColor: color}}
    />
  );
}

export default ColorIcon;
