import Image from 'next/image' 
import imageIbiza from '../public/imageIbiza.jpeg'

function Banner() {
    return(

        <div className="relative h-[500px] sm:h-[500px] lg:h-[500px]">
      <Image
          src = {imageIbiza}
        
          layout="fill"
          objectFit="cover"
          
          />

          <div className="absolute top-1/2 w-full text-center">
         <button className="text-blue-800 bg-blue-200 
          px-10 py-4 md:border-4
           border border-blue-300
           font-bold
           hover:shadow-xl
           active:scale-90 duration-75
           
             ">Show me something nice!</button>
          </div>
        </div>    
      
    )
       
    
}
export default Banner;