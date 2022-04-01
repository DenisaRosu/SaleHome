import Image from 'next/image' 
import image1 from '../public/imageRar.jpg'
import {SearchIcon,
    MenuIcon,
    GlobeAltIcon,
    UsersIcon,
    UserCircleIcon
} from '@heroicons/react/solid'

function Header(){
    return(
    <header className="sticky top-0 z-30 
    grid grid-cols-3 
    bg-blue-100 shadow-md 
    py-2 px-3">
    
        {/*left  */}
        <div className='realtive flex items-center h-30
        cursor-pointer my-auto ' >
          <Image
          src = {image1}
          width={150} height={140}
          layout="fixed"
          objectFit="contain"
          objectPosition ="left"
          />
        </div>    

       {/*middle */}
        <div className=" flex items-center 
        md:border-4
        border border-blue-300
        h-5 py-5
        px-5
        pz-2
        md:shadow-sm
        "><SearchIcon className="h-9
           hidden
           md:inline-flex
            bg-blue-300 
            text-white
            p-2
            cursor-pointer
           
            "/>
        <input  type="text" 
          className="relative flew-grow bg-transparent outline-none
             text-sm
             text-blue-800
            font-bold
             placeholder-blue-800
             px-2
            
           
          "
        placeholder ="Plan a meeting with us"/>
            
            
        </div>  

       {/*right*/}
        <div
        className="flex items-center
        space-x-4
        justify-end
        text-blue-800
        ">

         <p className="hidden md:inline font-bold "> Log In </p>
       <GlobeAltIcon
       className="h-6
      cursor-pointer "  />
         
      <div
      className="flex items-center
      space-x-2 border-2 p-2 
      ">
      <MenuIcon className="h-6"/>
      <UserCircleIcon className="h-6"/>
      </div>  
      
    </div>
        </header>
    )
}

export default Header