
import '../styles/global.css'
import {NavbarDemo} from '../_components/normal/Navbar'
import { BackgroundBoxesDemo } from '../_components/normal/BackgroundBoxesDemo'
import { BackgroundLinesDemo } from '../_components/normal/BackgroundLinesDemo'
import Image from 'next/image'
import ImageSection from '../_components/normal/ImageSection'
 
export default function MyApp() {
    return (
        <div className='bg-black'>
            
      <NavbarDemo/> 
      {/* First section In portifolio */}
      <BackgroundLinesDemo>
        {/* First Section */}
        <ImageSection/>
        {/* About Section */}

      </BackgroundLinesDemo>

        {/* Second Section in portifolio */}
      {/* <BackgroundBoxesDemo/> */}

        </div>
    

)}