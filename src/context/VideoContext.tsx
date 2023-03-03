import { createContext, useContext, useState } from 'react'
import type { CloudinaryVideo } from '../types/cloudinary.t'

interface VideoContext {
  files: Array<CloudinaryVideo>
  setFiles: React.Dispatch<React.SetStateAction<Array<CloudinaryVideo>>>
}

const VideoContext = createContext<VideoContext>({} as VideoContext)

const VideoProvider = ({ children }: { children: React.ReactNode }) => {
  const [files, setFiles] = useState<Array<CloudinaryVideo>>([])

  return (
    <VideoContext.Provider value={{ files, setFiles }}>
      {children}
    </VideoContext.Provider>
  )
}

const useVideoContext = () => {
  return useContext(VideoContext)
}

export { VideoProvider, useVideoContext }
