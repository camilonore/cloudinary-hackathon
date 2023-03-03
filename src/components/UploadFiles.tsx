import { useMemo } from 'react'
import type { responseResult } from '../types/cloudinary.t'
import styles from '../styles/UploadFiles.module.css'
import common from '../styles/common.module.css'
import { useVideoContext } from '../context/VideoContext'

function UploadFiles() {
  const { setVideo } = useVideoContext()
  const cloudName = 'dt5eg0jnv'
  const uploadPreset = 'zdgqo5f2'

  const handleUpload = (error: undefined | Error, result: responseResult) => {
    if (!error && result && result.event === 'success') {
      setVideo(result.info)
    }
  }

  const createCloudinaryWidget = useMemo(() => {
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: cloudName,
        uploadPreset: uploadPreset,
        folder: 'video-editor',
        clientAllowedFormats: ['image', 'video']
      },
      handleUpload
    )
    return widget
  }, [])

  const handleClick = () => {
    createCloudinaryWidget.open()
  }

  return (
    <div className={styles.container}>
      <button className={common.button} onClick={handleClick}>
        Upload Files
      </button>
    </div>
  )
}

export { UploadFiles }
