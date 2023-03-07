const URL_PATH = 'https://res.cloudinary.com/dt5eg0jnv/video/upload'

const editOptions = {
  height: (height: number) => {
    return `h_${height}`
  },
  width: (width: number) => {
    return `w_${width}`
  },
  startOffset: (startOffset: number) => {
    return `so_${startOffset}`
  },
  endOffset: (endOffset: number) => {
    return `eo_${endOffset}`
  },
  duration: (duration: number) => {
    return `du_${duration}`
  },
  concatenateVideo: (
    source: string,
    height: number,
    width: number,
    beggining: boolean
  ) => {
    return `c_fill,h_${height},w_${width}/fl_splice,l_video:${source}/c_fill,h_${height},w_${width}/fl_layer_apply,so_${
      beggining ? 0 : 1
    }`
  },
  rotate: (angle: number) => {
    return `a_${angle}`
  },
  concatenateImages: (
    source: string,
    duration: number,
    height: number,
    width: number,
    beggining: boolean
  ) => {
    return `h_${height},w_${width}/h_${height},w_${width},l_${source},fl_splice,du_${duration}/so_${
      beggining ? 0 : 1
    },fl_layer_apply`
  }
}

export { URL_PATH, editOptions }
