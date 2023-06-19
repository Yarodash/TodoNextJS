"use client"

import styles from "./ColorSelector.module.scss"
import {colors} from "@/declarations/design/Colors";
import clsx from "clsx";
import ColorIcon from "@/ui/common/ColorIcon/ColorIcon";

export interface ColorSelectorProps {
  color: string,
  setColor: (color: string) => void,
}

function ColorSelector({ color, setColor }: ColorSelectorProps) {
  return (
    <div className={styles.color_selector}>
      {colors.map(c =>
        <div
          key={c}
          className={clsx(styles.box, color === c && styles.active)}
          onClick={() => { setColor(c); }}
        >
          <ColorIcon color={c}/>
        </div>
      )}
    </div>
  );
}

export default ColorSelector;
