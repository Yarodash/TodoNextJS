import styles from "./DisplayTagSmall.module.scss"
import {Tag} from "@/declarations/data/Tag";
import CustomText from "@/ui/common/Text/CustomText";

export interface DisplayTagSmallProps {
  tag: Tag,
}

function DisplayTagSmall({ tag }: DisplayTagSmallProps) {
  return (
    <div
      className={styles.display_tag_small}
      style={{backgroundColor: tag.color}}
    >
      <CustomText scale="small" className={styles.white}>{tag.title}</CustomText>
    </div>
  );
}

export default DisplayTagSmall;
