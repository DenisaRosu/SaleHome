import Image from 'next/image' 

function SmallCard({img, city, cartier}) {
    return(

        <div className="flex items-center 
         mt-4 space-x-3 cursor-pointer space-y-3
        hover:bg-blue-200
        hover:scale-100
        transition transform duration-200 ease-out "
        >
         
         {/*Left */}
              
              <div className="relative h-40 w-[400px]">
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
        mr-2
        font-bold
        ">{city}</h2>
             <h3>{cartier}</h3>
         </div>
        </div>    
      
    );
       
    
}
export default SmallCard;