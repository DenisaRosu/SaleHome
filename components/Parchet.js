import Image from 'next/image' 

function Parchet({imgP}) {
    return(

        <div className="">
      
         <div className="  ml-5 relative  h-60 w-50  m-2 mt-6 
        hover:scale-20
        transition transform duration-200 ease-out ">
         <Image  src={imgP} 
         layout="fill"
          objectFit="cover"/>
           </div>


         </div>
          
      
    );
       
    
}
export default Parchet;