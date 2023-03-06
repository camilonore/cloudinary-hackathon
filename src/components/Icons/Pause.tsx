import { SVGProps } from 'react'

const Pause = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    fill='none'
    stroke='currentColor'
    strokeWidth={2}
    strokeLinecap='round'
    strokeLinejoin='round'
    {...props}
  >
    <path d='M6 4h4v16H6zM14 4h4v16h-4z' />
  </svg>
)

export { Pause }
