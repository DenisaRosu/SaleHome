import Image from 'next/image' 

function InfoCard({img, mp, zona, pret, noRooms, noBath}) {

    return (
        <div className="flex py-9 px-3 
        cursor-pointer

        hover:shadow-lg"> 
       
          
          <div className="flex relative h-80 
           min-w-[430px] border-x-1
          flex-shrink-0
          hover:scale-125
           ">
          <Image  
          src={img}  layout="fill"
              objectFit="cover" />
          </div>
          <div className="flex flex-col pl-5 py-2">
             <div className=" flex justify-between">
              <p className="text-2xl" >{zona}</p>
             </div>

             <h4 className="text-xl font-bold">{pret}</h4>
            
               <h4 className="text-m">{noRooms} Rooms</h4>
                <h4 className="text-m">{noBath} Bathrooms</h4>
          </div>

          
        </div>
    )
    
}

export default InfoCard