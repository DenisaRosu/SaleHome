import Image from 'next/image' 
import imageBanner from '../public/imageBanner.jpeg'

function Banner() {
    return(

        <div className=" relative h-[200px] sm:h-[300px] lg:h-[500px] 
        ">
      <Image
          src = {imageBanner}
          layout="fill"
          objectFit="cover"
      />

          <div className="absolute top-1/2 w-full text-center">
          </div>
        </div>    
      //--a centered button can be implemented in the above class>
    )
       
    
}
export default Banner; 

