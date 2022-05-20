import Image from 'next/image' 

import {useState} from "react";
import { useRouter, useRouterMatch } from "next/dist/client/router";

function InfoCardDesign({img, mp, zona, pret, noRooms, noBath}) {


const save = ()=>{
  // router.push('/search')
  router.push({
    pathname:'/interior',
    query: {
    
       img, mp, zona, pret, noRooms, noBath,
      
    }
  })
  }

    const router = useRouter();

    return (
        <div className="flex py-9 px-3 

       
        hover:shadow-lg"> 
       
          
          <div className="flex-grow relative h-80
           min-w-[420px] border-x-1
          flex-shrink-0
           ">
          <Image  
          src={img}  layout="fill"
              objectFit="cover" />
          </div>
        <button onClick={save} className="px-3 button">Customize this one!</button>

          <div className="flex flex-col pl-5 py-2">
             <div className=" flex justify-between">
              <p className="text-2xl" >{zona}</p>
             </div>

             <h4 className="text-xl font-bold">{pret}</h4>
              <h4 className="text-m">{mp} MP</h4>
               <h4 className="text-m">{noRooms} Rooms</h4>
                <h4 className="text-m">{noBath} Bathrooms</h4>
          </div>

          
        </div>
    )
    
}

export default InfoCardDesign