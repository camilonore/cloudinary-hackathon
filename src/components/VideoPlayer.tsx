import { useVideoContext } from '../context/VideoContext'
import styles from '../styles/VideoPlayer.module.css'

function VideoPlayer() {
  const { files } = useVideoContext()
  return (
    <section className={styles.videoContainer}>
      <video
        className={styles.video}
        src={
          'https://res.cloudinary.com/dt5eg0jnv/video/upload/v1676999470/samples/cld-sample-video.mp4'
        }
        controls
      />
    </section>
  )
}

export { VideoPlayer }
