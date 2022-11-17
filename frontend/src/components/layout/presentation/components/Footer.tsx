import Image from 'next/image'

export const Footer: React.FC = () => {
  return (
    <p className='flex items-center justify-center my-10 text-xs text-lightgrey'>
      Made with{' '}
      <span className='ml-2'>
        <Image
          src='/static/img/love-logo.png'
          height={17}
          width={36}
          alt='Love'
        />
      </span>
    </p>
  )
}
