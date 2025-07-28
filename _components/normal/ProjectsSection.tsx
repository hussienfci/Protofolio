
"use client";

import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

interface ThreeDCard {
    img:string  ;
    title:string ;  
    url:string ; 
}

interface ThreeDCardProps {
  threeDCard: ThreeDCard;
}
const projects = [
    {
        img :"/GuessNumber.png" , 
        title :"Guess Number site" ,  
        url:"https://github.com/hussienfci/GuessNumberGame"
    } ,
    
    {
        img :"/GlitchMart.png" , 
        title :"GlitchMart site" ,  
        url:"https://github.com/KarimWagdi/AMIT90JSG1"

    } , 
    {
        img:"/Comforty.png"  , 
        title:"Comforty site"  , 
        url:"https://e-commerce-project-bunl.vercel.app/home" 
    } , 
    {
        img:"/learningManagementSystem.jpg"  , 
        title:"learning Management System site"  , 
        url:"https://github.com/KarimWagdi/Learning-Management-System" 
    } , 
    {
        img:"/Ilearn.png"  , 
        title:"Ilearn site (freelance)"  , 
        url:"https://aiilearn.site" 
    } , 
    
 ]; 
function ProjectsSection() {
  return (
    <div id="projects">
    <h1 className="mt-[5rem] bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-l md:text-2xl lg:text-5xl font-sans py-2 md:py-7 relative z-20 font-bold tracking-tight">
    Projects
    </h1> 
    <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-5">
        {projects.map((item , idx)=>(        
            <ThreeDCardDemo key={idx} threeDCard={item}/>
            
        ))}
    </div> 
    </div>
  )
}

export default ProjectsSection


export function ThreeDCardDemo({threeDCard}:ThreeDCardProps) {
  return (
    <CardContainer className="inter-var projectSection">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem translateZ="100" className="w-full mt-4">
       
          <a href={threeDCard.url}>
          <img
            src={threeDCard.img}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
            />
            </a> 
        </CardItem>
        
         <div className="mt-10">
            <CardItem
            translateZ="50"
            className="text-2xl mx-auto text-center font-bold text-neutral-600 dark:text-white"
            >
            {threeDCard.title}
            </CardItem>
        </div>
        <div className="flex justify-between items-center mt-20">
          <a href={threeDCard.url}>
          <CardItem
            translateZ={20}
            translateX={-40}
            as="div"
            className="rounded-full bg-black dark:text-black text-white text-xs font-bold"
          >
            <button className="relative inline-flex h-12 overflow-hidden  rounded-full  p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Try now →
              </span>
            </button>
           
          </CardItem>
          </a>
          
        </div>
      </CardBody>
    </CardContainer>
  );
}
