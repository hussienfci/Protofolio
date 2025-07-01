"use client";

import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../ui/text-reveal-card";

 

export default function AboutSection(){
    return(
        <div id="about">
          <h1 className="mt-[5rem] bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-l md:text-2xl lg:text-5xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">Profile</h1>  
          <TextRevealCardPreview/>
        </div>
        
    )
}

function TextRevealCardPreview() {
  
  return (
    <div  className="flex items-center justify-center h-[20rem] rounded-2xl w-full">
      <TextRevealCard
        text="You know the business"
        revealText="I know the chemistry "
      >
        <TextRevealCardTitle>
          Sometimes, you just need to see it.
        </TextRevealCardTitle>
        <TextRevealCardDescription>
                <span className="ml-10">Fresh</span> graduated that have very good experience in coding , go through Data science field after studying
            fundamentals of software engineering like (OOP, Data Structures, Algorithms..) and currently working on him-self
            to be a Full-Stack Engineer, hoping to be deployed as employee in a company.
        
        </TextRevealCardDescription>
      
        
      </TextRevealCard>
      <div>

      </div>
    </div>
  );
}
