import Image from 'next/image' 

function MediumCard({img, mp, zona, pret}) {
    return(

        <div className="ml-5 cursor-pointer hover:scale-105
        transform transition duration-300 ease-out hover:bg-blue-200
  ">
     
         <div className="ml-2 relative h-80 w-80">
         <Image  src={img} layout="fill"/>
         </div>
          
          <h3 className=" text-1xl mt-3">
             {pret} 

          </h3>
            <h2>{mp} MP</h2>
             <h3>{zona}</h3>
        </div>    
      
    );
       
    
}
export default MediumCard;