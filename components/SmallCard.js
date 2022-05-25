import Image from 'next/image' 

function SmallCard({img, city, country}) {
    return(

        <div className="flex items-center 
        m-3 mt-5 space-x-4 cursor-pointer
        hover:bg-blue-200
        hover:scale-100
        transition transform duration-200 ease-out "
        >
         
         {/*Left */}
              
              <div className="relative h-40 w-60">
              <Image
              src={`${img}`} layout="fill" 
              
              />
              </div>
      
         {/*Right */}
         <div className="
        hover:bg-blue-200
        hover:scale-100
        text-blue-800
        ">
            <h2 className="
        hover:bg-blue-200
        hover:scale-100
        text-blue-800
        font-bold
        ">{city}</h2>
             <h3>{country}</h3>
         </div>
        </div>    
      
    );
       
    
}
export default SmallCard;