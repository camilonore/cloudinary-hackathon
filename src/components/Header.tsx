import styles from '../styles/Header.module.css'
import common from '../styles/common.module.css'
import { DownloadCloud } from './Icons/DownloadCloud'
function Header() {
  return (
    <header className={styles.header}>
      <h1>CloudVideoEdit</h1>
      <button className={common.button}>
        Export!
        <DownloadCloud />
      </button>
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
