import { useVideoContext } from '../context/VideoContext'
import styles from '../styles/AddSideFile.module.css'
import { AddIcon } from './Icons/Add'

function AddSideFile() {
  const { currentVideo } = useVideoContext()
  return (
    <div className={styles.container}>
      <button className={styles.buttonL}>
        <AddIcon />
      </button>
      <img
        src={currentVideo.thumbnail_url}
        alt={currentVideo.original_filename}
      />
      <button className={styles.buttonR}>
        <AddIcon />
      </button>
    </div>
  )
}

export { AddSideFile }
