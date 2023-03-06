import { SVGProps } from 'react'

const Play = (props: SVGProps<SVGSVGElement>) => (
  <svg
    style={{ position: 'relative', left: '2px' }}
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
    <path d='m5 3 14 9-14 9V3z' />
  </svg>
)

export { Play }
