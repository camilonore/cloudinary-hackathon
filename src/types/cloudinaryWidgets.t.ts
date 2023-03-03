type CloudinaryVideo = {
  id: string
  batchId: string
  asset_id: string
  public_id: string
  version: number
  version_id: string
  signature: string
  width: number
  height: number
  format: string
  resource_type: string
  created_at: string
  tags: string[]
  pages: number
  bytes: number
  type: string
  etag: string
  placeholder: boolean
  url: string
  secure_url: string
  playback_url: string
  folder: string
  access_mode: string
  audio: {
    codec: string
    bit_rate: string
    frequency: number
    channels: number
    channel_layout: string
  }
  video: {
    pix_format: string
    codec: string
    level: number
    profile: string
    bit_rate: string
    time_base: string
  }
  is_audio: boolean
  frame_rate: number
  bit_rate: number
  duration: number
  rotation: number
  original_filename: string
  nb_frames: number
  done: boolean
  path: string
  thumbnail_url: string
}

type responseResult = {
  info: {
    source: string
  }
  event: string
  uw_event: boolean
  data: {
    type: string
    widgetId: string
    event: string
    info: {
      source: string
    }
  }
}

declare global {
  interface Window {
    cloudinary: {
      createUploadWidget: (
        {
          cloudName,
          uploadPreset,
          folder,
          clientAllowedFormats
        }: {
          cloudName: string
          uploadPreset: string
          folder: string
          clientAllowedFormats: string[]
        },
        callback: (error: undefined | Error, result: responseResult) => void
      ) => {
        open: () => void
      }
    }
  }
}

export type { responseResult, CloudinaryVideo }
