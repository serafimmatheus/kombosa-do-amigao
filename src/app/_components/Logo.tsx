import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href='/'>
      <div className='relative w-[150px] h-[80px]'>
        <Image
          fill
          src='/logo-versao-amarela.svg'
          alt='kombosa do amigao'
          className='object-contain'
        />
      </div>
    </Link>
  )
}

export default Logo
