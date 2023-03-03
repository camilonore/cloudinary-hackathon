import { trim } from '@cloudinary/url-gen/actions/videoEdit'
import { AdvancedVideo } from '@cloudinary/react'
import { CloudinaryImage, CloudinaryVideo } from '@cloudinary/url-gen'

const myVideo = new CloudinaryVideo('samples/elephants', {
  cloudName: 'dt5eg0jnv'
})
  .setVersion('1676999470')
  .videoEdit(trim().endOffset(10))

function uploadMedia(file) {
  https://api.cloudinary.com/v1_1/dt5eg0jnv/image/upload
}
