"use client"

import styles from "./Header.module.scss"
import {useCallback, useEffect, useState} from "react";
import Icon from "@/ui/common/Icon/Icon";
import Input from "@/ui/common/Input/Input";

export interface HeaderProps {
  title: string,
  number: number,
  update: (title: string) => void,
}

function Header({ title, number, update }: HeaderProps) {
  const [edit, setEdit] = useState(false);
  const [_title, setTitle] = useState(title);

  const enableEdit = useCallback(() => {
    setEdit(true);
  }, []);

  const apply = useCallback(() => {
    update(_title);
    setTitle(title);
    setEdit(false);
  }, [_title, title, update]);

  useEffect(() => {
    setEdit(false);
    setTitle(title);
  }, [title]);

  return (
    <div className={styles.header}>
      {!edit && <>
        <h1 className={styles.title}>{_title}</h1>
        <Icon className={styles.edit} src="/edit.svg" onClick={enableEdit}/>
      </>}
      {edit && <>
        <Input className={styles.input} value={_title} setValue={setTitle}/>
        <Icon className={styles.edit} src="/checkmark.svg" onClick={apply}/>
      </>}
      <h2>{number}</h2>
    </div>
  );
}

export default Header;
