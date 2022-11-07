import React from 'react'
import Image from 'next/image'

const Pictures = (props) => {
  return (
    <div className=' w-fit px-4 hover:-scale-x-110 container mx-auto  '>
    <Image src={props.src} height={300} width={300} alt="/" objectFit='contain' className='rounded-md'  />

    </div>
  )
}

export default Pictures