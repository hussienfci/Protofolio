import React from 'react'

function EducationSection() {
  return (
    <div  className="mx-auto max-w-sm px-4 pb-10 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
        <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
          <img
            src="/logoHasebat.jpeg"
            className=" h-[10rem] w-35 z-10"/>
           
        <div className=" flex mt-[2rem] flex-col justify-between py-2">
          <img className='flex  h-[5rem] w-35 z-10' src='/AMIT.jpeg' alt="Hussien's Image"/> 
        </div>
        </div>
    </div>
  )
}

export default EducationSection
