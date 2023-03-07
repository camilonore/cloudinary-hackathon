import { useState } from 'react'
import { useVideoContext } from '../context/VideoContext'
import styles from '../styles/VideoControls.module.css'
import { Pause } from './Icons/Pause'
import { Play } from './Icons/Play'
import { RotateCcw } from './Icons/RotateCcw'
import { RotateCw } from './Icons/RotateCw'

function VideoControls() {
  const { videoRef } = useVideoContext()
  const [timeElapsed, setTimeElapsed] = useState('0:00')
  const [progressValue, setProgressValue] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const formatTime = (timeInSeconds: number) => {
    if (isNaN(timeInSeconds)) {
      return '0:00'
    }
    const minutes = Math.floor(timeInSeconds / 60)
    const seconds = Math.floor(timeInSeconds - minutes * 60)
    if (
      minutes === Infinity ||
      isNaN(minutes) ||
      seconds === Infinity ||
      isNaN(seconds)
    ) {
      return '0:00'
    }
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  }
  const updateTimeElapsed = () => {
    setTimeElapsed(formatTime(videoRef.currentTime))
    setProgressValue((videoRef.currentTime / videoRef.duration) * 100)
  }
  if (videoRef.addEventListener) {
    videoRef.addEventListener('timeupdate', updateTimeElapsed)
  }

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.pause()
    } else {
      videoRef.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    videoRef.currentTime = (Number(value) * videoRef.duration) / 100
    setProgressValue(Number(value))
  }
  const handleBackward = () => {
    videoRef.currentTime -= 5
  }
  const handleForward = () => {
    videoRef.currentTime += 5
  }

  return (
    <div className={styles.container}>
      <div className={styles.buttonsContainer}>
        <button className={styles.button} onClick={handleBackward}>
          <RotateCcw />
        </button>
        <button className={styles.mainButton} onClick={handlePlayPause}>
          {isPlaying ? <Pause /> : <Play />}
        </button>
        <button className={styles.button} onClick={handleForward}>
          <RotateCw />
        </button>
      </div>
      <div className={styles.slider}>
        <span>{timeElapsed}</span>
        <input
          type='range'
          min={0}
          value={progressValue}
          onChange={handleChange}
        />
        <span>{formatTime(videoRef.duration)}</span>
      </div>
    </div>
  )
}

export { VideoControls }
