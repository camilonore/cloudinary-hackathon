import { createContext, useContext, useState } from 'react'
import type { CloudinaryVideo } from '../types/cloudinary.t'

interface VideoContextProps {
  currentVideo: CloudinaryVideo
  setCurrentVideo: React.Dispatch<React.SetStateAction<CloudinaryVideo>>
  videoRef: HTMLVideoElement
  setVideoRef: React.Dispatch<React.SetStateAction<HTMLVideoElement>>
  aditionalFiles: CloudinaryVideo[]
  setAditionalFiles: React.Dispatch<
    React.SetStateAction<Array<CloudinaryVideo>>
  >
}

const VideoContext = createContext<VideoContextProps>({} as VideoContextProps)

const VideoProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentVideo, setCurrentVideo] = useState<CloudinaryVideo>(
    {} as CloudinaryVideo
  )
  const [aditionalFiles, setAditionalFiles] = useState<Array<CloudinaryVideo>>(
    []
  )
  const [videoRef, setVideoRef] = useState<HTMLVideoElement>(
    {} as HTMLVideoElement
  )

  return (
    <VideoContext.Provider
      value={{
        currentVideo,
        setCurrentVideo,
        videoRef,
        setVideoRef,
        aditionalFiles,
        setAditionalFiles
      }}
    >
      {children}
    </VideoContext.Provider>
  )
}

const useVideoContext = () => {
  return useContext(VideoContext)
}

export { VideoProvider, useVideoContext }
