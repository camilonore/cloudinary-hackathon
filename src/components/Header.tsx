import styles from '../styles/Header.module.css'
import common from '../styles/common.module.css'
import { DownloadCloud } from './Icons/DownloadCloud'
import { useVideoContext } from '../context/VideoContext'
import { CloudinaryIcon } from './Icons/Cloudinary'
function Header() {
  const { currentVideo } = useVideoContext()
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <CloudinaryIcon />
        <h1>CloudiVideoEditor</h1>
      </div>

      {currentVideo.url && (
        <a className={common.button} href={currentVideo.url} download>
          Export!
          <DownloadCloud />
        </a>
      )}

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
