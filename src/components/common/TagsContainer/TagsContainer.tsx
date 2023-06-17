import styles from "./TagsContainer.module.scss"
import {ReactNode} from "react";

export interface TagsContainerProps {
  children: ReactNode
}

function TagsContainer({ children }: TagsContainerProps) {
  return (
    <div className={styles.tags_container}>
      {children}
    </div>
  );
}

export default TagsContainer;
