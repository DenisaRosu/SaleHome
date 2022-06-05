import Image from 'next/image' 
import image1 from '../public/imageSnow.jpeg'



function LargeCard({title, description1, description2,buttonText}) {
    return(

        
        <section className=" relative py-16 cursor-pointer ">
          <div className=" 
           relative h-80 min-w-[600px] px-90">
          <Image  className="relative"
           src={image1}
         
           />    
        </div>

        <div className=" border-4 border-blue-300 absolute top-32 left-40 bg-blue-100 bg-opacity-50"> 
          <h3 className="ml-20 text-2xl mb-5 w-104 text-blue-700">{title}</h3>
          <p className="text-3xl mb-6 w-80 text-blue-800 " >{description1}</p>
          <p className="text-3xl mb-6 w-80 text-blue-900" >{description2}</p>
         
         
        </div>
        </section>
        
       

         
      
    );
       
    
}
export default LargeCard;