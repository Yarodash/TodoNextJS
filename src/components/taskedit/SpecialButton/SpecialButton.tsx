import styles from "./SpecialButton.module.scss"
import clsx from "clsx";
import CustomText from "@/ui/common/Text/CustomText";

export interface SpecialButtonProps {
  children: string,
  onClick: () => void,
  accent?: boolean,
  className?: string,
}

function SpecialButton({ children, onClick, accent = false, className = "" }: SpecialButtonProps) {
  return (
    <button
      className={clsx(styles.special_button, className, accent && styles.accent)}
      onClick={onClick}
    >
      <CustomText>{children}</CustomText>
    </button>
  );
}

export default SpecialButton;
