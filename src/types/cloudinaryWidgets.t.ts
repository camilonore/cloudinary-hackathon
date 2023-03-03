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

export type { responseResult }
