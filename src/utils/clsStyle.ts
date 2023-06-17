import clsx from 'clsx';

type Styles = { [key: string]: string };
type ClassDictionary = { [key: string]: boolean };

export function clsStyle(styles: Styles, classDict: ClassDictionary): string {
  const classNames = Object.entries(classDict)
    .filter(([key, value]) => value)
    .map(([key]) => styles[key]);

  return clsx(...classNames);
}
