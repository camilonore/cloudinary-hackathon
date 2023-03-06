import { useMemo } from 'react'
import type { responseResult } from '../types/cloudinary.t'
import common from '../styles/common.module.css'
import { useVideoContext } from '../context/VideoContext'
import { UploadCloud } from './Icons/UploadCloud'

function UploadFilesButton() {
  const { setCurrentVideo } = useVideoContext()
  const cloudName = 'dt5eg0jnv'
  const uploadPreset = 'zdgqo5f2'

  const handleUpload = (error: undefined | Error, result: responseResult) => {
    if (!error && result && result.event === 'success') {
      setCurrentVideo(result.info)
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
    <button className={common.button} onClick={handleClick}>
      Upload Files
      <UploadCloud />
    </button>
  )
}

export { UploadFilesButton }
