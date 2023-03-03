import { createContext, useContext, useState } from 'react'
import type { CloudinaryVideo } from '../types/cloudinary.t'

interface VideoContext {
  video: CloudinaryVideo | null
  setVideo: React.Dispatch<React.SetStateAction<CloudinaryVideo | null>>
}

const VideoContext = createContext<VideoContext>({} as VideoContext)

const VideoProvider = ({ children }: { children: React.ReactNode }) => {
  const [video, setVideo] = useState<CloudinaryVideo | null>(null)

  return (
    <VideoContext.Provider value={{ video, setVideo }}>
      {children}
    </VideoContext.Provider>
  )
}

const useVideoContext = () => {
  return useContext(VideoContext)
}

export { VideoProvider, useVideoContext }
