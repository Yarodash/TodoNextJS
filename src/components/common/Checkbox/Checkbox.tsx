import styles from "./Checkbox.module.scss"
import clsx from "clsx";
import {Scale} from "@/declarations/design/Scale";

export interface CheckboxProps {
  value: boolean,
  setValue: (value: boolean) => void,
  scale?: Scale,
  className?: string,
}

function Checkbox({ value, setValue, scale="normal", className = "" }: CheckboxProps) {
  return (
    <div className={clsx(styles.content, scale, className)}>
      <input
        className={styles.checkbox}
        type="checkbox"
        checked={value}
        onChange={e => setValue(e.target.checked)}
      />
    </div>
  );
}

export default Checkbox;
