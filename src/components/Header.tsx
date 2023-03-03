import styles from '../styles/Header.module.css'
function Header() {
  return (
    <header className={styles.header}>
      <h1>Header</h1>
      <div className={styles.roundedPrev}>
        <div className={styles.circle} />
      </div>
      <div className={styles.roundedAfter}>
        <div className={styles.circle} />
      </div>
    </header>
  )
}

export { Header }
