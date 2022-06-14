import Image from 'next/image' 

function Faianta({imgF}) {
    return(

        <div className="">
      
         <div className="  ml-5 relative h-60 w-50  m-14 mt-6 
        hover:scale-20
        transition transform duration-200 ease-out ">
         <Image  src={imgF} 
         layout="fill"
          objectFit="cover"/>
           </div>


          



         </div>
          
      
    );
       
    
}
export default Faianta;