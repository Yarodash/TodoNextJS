"use client"

import styles from "./ColorfulCreator.module.scss"
import Icon from "@/ui/common/Icon/Icon";
import ColorSelector from "@/ui/common/ColorSelector/ColorSelector";
import {useState} from "react";
import {colors} from "@/declarations/design/Colors";
import ColorIcon from "@/ui/common/ColorIcon/ColorIcon";
import Input from "@/ui/common/Input/Input";

export interface ColorfulCreatorProps {
  onCreate: (title: string, color: string) => void,
  placeholder: string,
}

function ColorfulCreator({ onCreate, placeholder }: ColorfulCreatorProps) {
  const [color, setColor] = useState(colors[0]);
  const [title, setTitle] = useState("");

  return (
    <div className={styles.colorful_creator}>
      <div className={styles.top}>
        <ColorIcon color={color}/>
        <Input
          className={styles.input}
          value={title}
          setValue={setTitle}
          placeholder={placeholder}
        />
        <Icon
          src="/checkmark.svg"
          className={styles.checkmark}
          onClick={() => onCreate(title, color)}
        />
      </div>
      <ColorSelector color={color} setColor={setColor}/>
    </div>
  );
}

export default ColorfulCreator;
