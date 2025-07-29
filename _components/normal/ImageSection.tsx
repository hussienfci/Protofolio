import React from 'react'
import { ContainerTextFlip } from '../ui/container-text-flip' 

function ImageSection() {
  return (
     <div  className="mx-auto max-w-sm px-4 py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-4 md:grid-cols-2">
        <img className='flex h-[40rem] w-80 z-10  ' src='/PortifolioImage2.png' alt="Hussien's Image"/>
        <div className=" flex flex-col justify-between py-4">
          <h3 className="mt-[10rem] bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-l md:text-2xl lg:text-5xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
            Your Website will be <br /> <ContainerTextFlip
              words={["better", "modern", "awesome","Secure","Reliable"]} className='mt-3' textClassName='md:text-2xl lg:text-5xl'/> 
          </h3>
        </div>
      </div>
    </div>
  )
}

export default ImageSection
