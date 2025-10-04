import React from "react";
import { cn } from "../../lib/utils";

function ProfessionalExp() {

    return (
    <div id="proExp" className="mx-auto max-w-sm px-4 py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
         
          <h1 className="mt-[5rem] bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-l md:text-2xl lg:text-5xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
            Professional Experience
          </h1>  
          <div className="relative grid grid-cols-1 gap-30  md:grid-cols-2">
            <div className="max-w-xs w-full group/card">
                <div
                    className={cn(
                    " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
                    `bg-[url(/Spark.jpeg)] bg-cover`
                )}
                >
                    <div className="flex absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
                    <div className="flex flex-row items-center space-x-4 z-10">
                    <img
                        height="100"
                        width="100"
                        alt="Avatar"
                        src="/Spark.jpeg"
                        className="h-10 w-10 rounded-full border-2 object-cover"
                    />
                    <div className="flex flex-col">
                        <p className="font-normal text-base text-gray-50 relative z-10">
                        Spark Academy
                        </p>
                     </div>
                    </div>
                    <div className="text content">
                    <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                      Programming Instructor
                    </h1>
                    <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                        <span>Computer Science fundamentals, OOP, Data structures and Algorithms Instructor
                        </span><br /><span className="inline-block border-3 border-[#df9606] rounded-md p-1">Hyprid</span>
                    </p>
                    </div>
                </div>
            </div>
            {/* New Card */}
            <div className=" flex flex-col justify-between py-0">
             <div
                    className={cn(
                    " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-2",
                    `bg-[url(/TechSnoix.jpeg)] bg-cover max-w-xs w-full group/card`
                )}
                >
                    <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
                    <div className="flex flex-row items-center space-x-4 z-10">
                    <img
                        height="100"
                        width="100"
                        alt="Avatar"
                        src="/TechSnoix.jpeg"
                        className="h-10 w-10 rounded-full border-2 object-cover"
                    />
                    <div className="flex flex-col">
                        <p className="font-normal text-base text-gray-50 relative z-10">
                        Techsnoix Company
                        </p>
                    </div>
                    </div>
                    <div className="text content">
                    <h1 className="font-bold text-xl md:text-2xl text-[#f06d6d] relative z-10">
                        Front-End Trainee
                    </h1>
                    <p className="font-normal text-sm text-[#f3d2d2e2] relative z-10 my-4">
                           <span className="text-[#f66565e2]">HTML, CSS, <span className="text-[#f67905]">and Java-Script</span>
                        </span><br /><span className="inline-block border-3 border-[#f43f1b] rounded-md p-1">Remote</span>
                    </p>
                    </div>
                </div>
            </div>
            {/* New Card */}
             <div className=" flex flex-col justify-between py-0">
             <div
                    className={cn(
                    " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-2",
                    `bg-[url(/codveda_technologies_logo.jpeg)] bg-contain max-w-2xl w-full group/card object-contain`
                )}
                >
                    <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
                    <div className="flex flex-row items-center space-x-4 z-10">
                    <img
                        height="100"
                        width="100"
                        alt="Avatar"
                        src="/codveda_technologies_logo.jpeg"
                        className="h-10 w-10 rounded-full border-2 object-cover"
                    />
                    <div className="flex flex-col">
                        <p className="font-normal text-sm text-black relative z-10">
                         Codveda Company
                        </p>
                    </div>
                    </div>
                    <div className="text content">
                    <h1 className="font-bold text-xl md:text-2xl text-[#fbda04] relative z-10">
                        Full-Stack engineer Trainee
                    </h1>
                    <p className="font-normal text-md text-[#f3d2d2e2] relative z-50 my-4">
                           <span className="text-[#fbda04]">Nodejs (ExpressJs)<span className="text-[#fbda04] z-50"> & React Developer</span>
                        </span><br /><span className="inline-block border-3 border-[#171716] rounded-md p-1 text-[#fbda04] ">Remote</span>
                    </p>
                    </div>
                </div>
             </div>
            {/* New Card */}
            <div className=" flex flex-col justify-between py-0">
             <div
                    className={cn(
                    " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-2",
                    `bg-[url(/SCS.jpg)] bg-cover max-w-2xl w-full object-contain group/card`
                )}
                >
                    <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
                    <div className="flex flex-row items-center space-x-4 z-10">
                    <img
                        height="100"
                        width="100"
                        alt="Avatar"
                        src="/SCS.jpg"
                        className="h-10 w-10 rounded-full border-2 object-cover"
                    />
                    <div className="flex flex-col">
                        <p className="font-normal text-sm text-black relative z-10">
                        Smart Consulting Solution Company
                        </p>
                    </div>
                    </div>
                    <div className="text content">
                    <h1 className="font-bold text-xl md:text-2xl text-[#04bdfb] relative z-10">
                        SAP & REACT Trainee
                    </h1>
                    <p className="font-normal text-md text-[#f3d2d2e2] relative z-50 my-4">
                           <span className="text-[#157ae5]">ABAP consultant<span className="text-[#157ae5] z-50"> & React Developer</span>
                        </span><br /><span className="inline-block border-3 border-[#171716] rounded-md p-1 text-[#157ae5] ">On-Site</span>
                    </p>
                    </div>
                </div>
            </div> 
            {/* New Card */}
            <div className=" flex flex-col justify-between py-0">
             <div
                    className={cn(
                    " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-2",
                    `bg-[url(/alignerr_logo.jpeg)] bg-cover max-w-2xl w-full object-contain group/card`
                )}
                >
                    <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
                    <div className="flex flex-row items-center space-x-4 z-10">
                    <img
                        height="100"
                        width="100"
                        alt="Avatar"
                        src="/alignerr_logo.jpeg"
                        className="h-10 w-10 rounded-full border-2 object-cover"
                    />
                    <div className="flex flex-col">
                        <p className="font-normal text-sm text-black relative z-10">
                        Alignerr Company
                        </p>
                    </div>
                    </div>
                    <div className="text content">
                    <h1 className="font-bold text-xl md:text-2xl text-black relative z-10">
                        Full-Stack Engineer 
                    </h1>
                    <p className="font-normal text-md text-[#f3d2d2e2] relative z-50 my-4">
                           <span className="text-black">Nodejs<span className="text-black z-50"> & React Developer</span>
                        </span>
                        <br />
                        <span className="inline-block border-3 border-[#171716] rounded-md p-1 text-black ">Remote</span>
                    </p>
                    </div>
                </div>
            </div>
          </div>    
    </div>
        
  )
}

export default ProfessionalExp

