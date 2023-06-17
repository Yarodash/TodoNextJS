"use client"

import styles from "./Input.module.scss"
import clsx from "clsx";
import {Scale} from "@/declarations/design/Scale";

export interface InputProps {
  value: string,
  setValue: (value: string) => void,

  placeholder?: string,

  multiline?: boolean,
  rows?: number,

  scale?: Scale,

  gray?: boolean,
  bold?: boolean,

  className?: string
}

function Input({
                 value,
                 setValue = () => {},
                 placeholder = "",
                 multiline = false,
                 rows = 4,
                 scale = "normal",
                 gray = false,
                 bold = false,
                 className = ""
}: InputProps) {
  const classNames = clsx("input-text", styles.input, scale, gray && styles.gray, bold && styles.bold, className);

  if (!multiline) {
    return (
      <input
        type="text"
        className={classNames}
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
      />
    )
  }

  return (
    <textarea
      className={classNames}
      value={value}
      rows={rows}
      placeholder={placeholder}
      onChange={(e) => setValue(e.target.value)}
    />
  )
}

export default Input;
