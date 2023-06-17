"use client"

import styles from "./SearchBar.module.scss"
import Icon from "@/components/common/Icon/Icon";
import {useState} from "react";
import Input from "@/components/common/Input/Input";

function SearchBar() {
  const [text, setText] = useState("");

  return (
    <div className={styles.search_bar}>
      <Icon src="/search.svg"/>
      <Input className={styles.input} value={text} setValue={setText} placeholder="Search"/>
    </div>
  );
}

export default SearchBar;
