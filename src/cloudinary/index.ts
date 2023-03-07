const URL_PATH = 'https://res.cloudinary.com/dt5eg0jnv/video/upload'

type EdtitOptionsType = {
  height: (height: number) => string
  width: (width: number) => string
  startOffset: (startOffset: number) => string
  endOffset: (endOffset: number) => string
  duration: (duration: number) => string
  rotate: (angle: number) => string
}

type ConcatenateOptionsType = {
  concatenateImages: (
    source: string,
    duration: number,
    height: number,
    width: number,
    beggining: boolean
  ) => string
  concatenateVideo: (
    source: string,
    height: number,
    width: number,
    beggining: boolean
  ) => string
}

const editOptions: EdtitOptionsType = {
  height: (height) => {
    return `h_${height}`
  },
  width: (width) => {
    return `w_${width}`
  },
  startOffset: (startOffset) => {
    return `so_${startOffset}`
  },
  endOffset: (endOffset) => {
    return `eo_${endOffset}`
  },
  duration: (duration) => {
    return `du_${duration}`
  },
  rotate: (angle) => {
    return `a_${angle}`
  }
}

const concatenateOptions: ConcatenateOptionsType = {
  concatenateImages: (source, duration, height, width, beggining) => {
    return `h_${height},w_${width}/h_${height},w_${width},l_${source},fl_splice,du_${duration}/so_${
      beggining ? 0 : 1
    },fl_layer_apply`
  },
  concatenateVideo: (source, height, width, beggining) => {
    return `c_fill,h_${height},w_${width}/fl_splice,l_video:${source}/c_fill,h_${height},w_${width}/fl_layer_apply,so_${
      beggining ? 0 : 1
    }`
  }
}

export type { EdtitOptionsType, ConcatenateOptionsType }
export { URL_PATH, editOptions, concatenateOptions }
