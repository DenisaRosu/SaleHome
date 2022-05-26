import Image from 'next/image' 

function Gresie({imgG}) {
    return(

        <div className="">
      
         <div className="  ml-5 relative  h-60 w-50  m-2 mt-6 
        hover:scale-20
        transition transform duration-200 ease-out ">
         <Image  src={imgG} 
         layout="fill"
          objectFit="cover"/>
           </div>


    

         </div>
          
      
    );
       
    
}
export default Gresie