import { useVideoContext } from '../context/VideoContext'
import styles from '../styles/VideoPlayer.module.css'

function VideoPlayer() {
  const { video } = useVideoContext()
  return <video className={styles.video} src={video?.url} controls />
}

export { VideoPlayer }
