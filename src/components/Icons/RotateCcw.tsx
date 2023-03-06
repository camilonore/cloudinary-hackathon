import { SVGProps } from 'react'

const RotateCcw = (props: SVGProps<SVGSVGElement>) => (
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
    <path d='M3 2v6h6' />
    <path d='M3 13a9 9 0 1 0 3-7.7L3 8' />
  </svg>
)

export { RotateCcw }
