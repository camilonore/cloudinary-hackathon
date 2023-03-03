import { useVideoContext } from '../context/VideoContext'
import styles from '../styles/VideoPlayer.module.css'

function VideoPlayer() {
  const { videoUrl } = useVideoContext()
  return <video className={styles.video} src={videoUrl} controls />
}

export { VideoPlayer }
