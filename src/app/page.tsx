import styles from './page.module.scss'

function Letter({ letter, index }: { letter: string, index: number }) {
  return (
    <p
      className={styles.letter}
      style={{"--index": index} as any}
    >{letter}</p>
  )
}

export default function Page() {
  const word = ["W", "e", "l", "c", "o", "m", "e"];

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        {word.map((letter, index) => <Letter key={index} letter={letter} index={index}/>)}
      </div>
    </main>
  )
}
