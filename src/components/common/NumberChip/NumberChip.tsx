import styles from "./NumberChip.module.scss"
import clsx from "clsx";
import {Scale} from "@/declarations/design/Scale";

export interface NumberChipProps {
  children: number | string,

  scale?: Scale,

  className?: string,
}

function NumberChip({
                      children,
                      scale = "normal",
                      className = ""
}: NumberChipProps) {
  return (
    <div className={clsx(styles.number_chip, scale, className)}>
      {children}
    </div>
  );
}

export default NumberChip;
