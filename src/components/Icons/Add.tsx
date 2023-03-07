import { SVGProps } from 'react'

const AddIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M12 7v10m-5-5h10m4 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
      stroke='#000'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export { AddIcon }
