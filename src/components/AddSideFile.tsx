import { useMemo, useRef } from 'react'
import { useVideoContext } from '../context/VideoContext'
import styles from '../styles/AddSideFile.module.css'
import { responseResult } from '../types/cloudinary.t'
import { AddIcon } from './Icons/Add'
import { concatenateOptions, URL_PATH } from '../cloudinary/index'

function AddSideFile() {
  const { currentVideo, setAditionalFiles, aditionalFiles, setCurrentVideo } =
    useVideoContext()
  let isRight = useRef(false)
  const cloudName = 'dt5eg0jnv'
  const uploadPreset = 'zdgqo5f2'

  const handleUpload = (error: undefined | Error, result: responseResult) => {
    if (!error && result && result.event === 'success') {
      const info = { ...result.info, isRight: isRight.current }
      setAditionalFiles((prevFiles) => [...prevFiles, info])
      const videoSource = info.public_id.replace('/', ':')
      if (info.resource_type === 'video') {
        const optionUrl = concatenateOptions.concatenateVideo(
          videoSource,
          currentVideo.height,
          currentVideo.width,
          !isRight
        )
        const newUrl = `${URL_PATH}/${optionUrl}/${currentVideo.public_id}`
        setCurrentVideo({ ...currentVideo, url: newUrl })
      } else {
        const optionUrl = concatenateOptions.concatenateImages(
          videoSource,
          5,
          currentVideo.height,
          currentVideo.width,
          !isRight
        )
        const newUrl = `${URL_PATH}/${optionUrl}/${currentVideo.public_id}`
        setCurrentVideo({ ...currentVideo, url: newUrl })
      }
    }
  }

  const createCloudinaryWidget = useMemo(() => {
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: cloudName,
        uploadPreset: uploadPreset,
        folder: 'video-editor',
        clientAllowedFormats: ['video', 'image']
      },
      handleUpload
    )
    return widget
  }, [])

  const handleClick = (isRightButton: boolean) => {
    isRight.current = isRightButton
    createCloudinaryWidget.open()
  }
  return (
    <div className={styles.container}>
      <button className={styles.buttonL} onClick={() => handleClick(false)}>
        <AddIcon />
      </button>
      {aditionalFiles.map((file) => {
        if (!file.isRight) {
          return <img src={file.thumbnail_url} alt={file.original_filename} />
        }
      })}
      <img
        src={currentVideo.thumbnail_url}
        alt={currentVideo.original_filename}
      />
      {aditionalFiles.map((file) => {
        if (file.isRight) {
          return <img src={file.thumbnail_url} alt={file.original_filename} />
        }
      })}
      <button className={styles.buttonR} onClick={() => handleClick(true)}>
        <AddIcon />
      </button>
    </div>
  )
}

export { AddSideFile }
