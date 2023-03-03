import { useMemo } from 'react'
import type { responseResult } from '../types/cloudinaryWidgets.t'
import styles from '../styles/UploadFiles.module.css'

function UploadFiles() {
  const cloudName = 'dt5eg0jnv'
  const uploadPreset = 'zdgqo5f2'

  const handleUpload = (error: undefined | Error, result: responseResult) => {
    console.log({ error, result })
    if (!error && result && result.event === 'success') {
      console.log('Done! Here is the image info: ', result.info)
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
      <p>It seems that you haven't uploaded any files</p>
      <button className={styles.button} onClick={handleClick}>
        Upload Files
      </button>
    </div>
  )
}

export { UploadFiles }
