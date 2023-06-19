import styles from "./NewTagButton.module.scss"
import Icon from "@/ui/common/Icon/Icon";
import CustomText from "@/ui/common/Text/CustomText";

export interface NewTagButtonProps {
  onClick: () => void,
}

function NewTagButton({ onClick }: NewTagButtonProps) {
  return (
    <div
      className={styles.new_tag_button}
      onClick={onClick}
    >
      <Icon src="/plus.svg" scale="small"/>
      <CustomText scale="small">Add Tag</CustomText>
    </div>
  );
}

export default NewTagButton;
