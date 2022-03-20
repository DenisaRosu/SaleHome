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
          width={80} height={110}
          layout="fixed"
          objectFit="contain"
          objectPosition ="left"
          />
        </div>    

       {/*middle */}
        <div className="flex items-center 
        md:border-4
        border border-blue-300
        h-5 py-4
        px-4
        pz-3
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
             placeholder-blue-800
             pl-2
          "
        placeholder ="Search for your Rares"/>
            
            
        </div>  

       {/*right*/}
        <div
        className="flex items-center
        space-x-4
        justify-end
        text-blue-400
        ">

         <p className="hidden md:inline font-bold "> Become a Rares </p>
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