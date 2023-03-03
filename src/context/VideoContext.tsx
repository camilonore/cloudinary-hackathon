import { createContext, useContext, useState } from 'react'

interface VideoContextData {
  videoUrl: string
  setVideoUrl: (video: string) => void
}

const VideoContext = createContext<VideoContextData>({} as VideoContextData)

const VideoProvider = ({ children }: { children: React.ReactNode }) => {
  const [videoUrl, setVideoUrl] = useState('')

  return (
    <VideoContext.Provider value={{ videoUrl, setVideoUrl }}>
      {children}
    </VideoContext.Provider>
  )
}

const useVideoContext = () => {
  return useContext(VideoContext)
}

export { VideoProvider, useVideoContext }
