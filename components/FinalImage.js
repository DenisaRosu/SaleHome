import Image from 'next/image' 

function FinalImage({imgFinal}) {
    return(

        <div className="flex py-9 px-3 
        hover:shadow-lg">
  
     
         <div className="flex relative h-80
           min-w-[540px] border-x-1
          flex-shrink-0">
         <Image  src={imgFinal} 
         layout="fill"
          objectFit="cover"/>
           </div>


         </div>
          
      
    );
       
    
}
export default FinalImage;