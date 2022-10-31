import React from 'react'
import Image from 'next/image'

const Pictures = (props) => {
  return (
    <div className=' w-fit px-4 hover:-scale-x-110  '>
    <Image src={props.src} height={350} width={350} alt="/" className='rounded-md'  />

    </div>
  )
}

export default Pictures