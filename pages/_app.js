
import '../styles/global.css'
import {NavbarDemo} from '../_components/normal/Navbar'
import { BackgroundBoxesDemo } from '../_components/normal/BackgroundBoxesDemo'
import { BackgroundLinesDemo } from '../_components/normal/BackgroundLinesDemo'

import ImageSection from '../_components/normal/ImageSection'
import AboutSection from '../_components/normal/AboutSection'
import { lazy, Suspense, useState } from 'react' ; 
import ProfessionalExp from '../_components/normal/ProfessionalExp'
import ProjectsSection from '../_components/normal/ProjectsSection'
import { Button } from '../_components/ui/moving-border' ; 
import { ToastContainer, toast } from 'react-toastify';
import SkillsSection from '../_components/normal/SkillsSection'
import ContactSection from '../_components/normal/ContactSection'
import EducationSection from '../_components/normal/EducationSection'


export default function MyApp() {
  const handleCopy = async()=>{
    try{
      await navigator.clipboard.writeText(
        'hussien.m.abozaid@gmail.com'
      )
      toast.success(
        <div style={{display:'flex' , alignItems:'center' , gap:'8px'}}>
          <span>Email has been copied!</span>
        </div>,
        {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      ) 
      

    }catch(error){
      console.error(`Failed to copy text  :(` , error);
      
    }
  };
  
  
  return (
    <div className='bg-black'>
    
      <NavbarDemo/> 
      {/* First section In portifolio */}
    <div className='bg-black'>
    <BackgroundLinesDemo>
      
        <Button
          borderRadius="1.75rem"
          className=" bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          onClick={handleCopy} 
       >
          Copy email
        </Button>
        <ToastContainer />
        {/* First Section */}
        <ImageSection/>
        {/* About Section */}
        <AboutSection/>
        {/* Professional Experience section*/}
        <ProfessionalExp/>

        {/* Projects Section */}
        <ProjectsSection/>

        {/* Skill sections */}
        <SkillsSection/>
       
        {/* Contact section */}
        <ContactSection/>
        
        {/* Education section */}
        <EducationSection/>
      
       
      </BackgroundLinesDemo>
    </div>
    
        {/* Second Section in portifolio */}
      {/* <BackgroundBoxesDemo/> */}

    </div>
    

)}