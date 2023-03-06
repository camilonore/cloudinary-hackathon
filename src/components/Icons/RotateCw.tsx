import { SVGProps } from 'react'

const RotateCw = (props: SVGProps<SVGSVGElement>) => (
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
    <path d='M21 2v6h-6' />
    <path d='M21 13a9 9 0 1 1-3-7.7L21 8' />
  </svg>
)

export { RotateCw }
