import { useEffect, useRef } from 'react'
import { useVideoContext } from '../context/VideoContext'
import styles from '../styles/VideoPlayer.module.css'
import { VideoControls } from './VideoControls'

function VideoPlayer() {
  const { currentVideo, setVideoRef } = useVideoContext()
  useEffect(() => {
    if (videoRef.current) {
      setVideoRef(videoRef.current)
    }
  }, [])

  const videoRef = useRef<HTMLVideoElement>(null)
  return (
    <section className={styles.videoContainer}>
      {/* src={
          'https://res.cloudinary.com/dt5eg0jnv/video/upload/v1676999470/samples/cld-sample-video.mp4'
        } */}
      <video className={styles.video} ref={videoRef} src={currentVideo.url} />
      <VideoControls />
    </section>
  )
}

export { VideoPlayer }
