import Search from "../pages/search"

import Header from "../components/Header"
import Footer from "../components/Footer"
import InfoCard from "../components/InfoCard"
import {useState} from "react";
import { useRouter, useRouterMatch } from "next/dist/client/router";
import { format } from 'date-fns';
import {SearchIcon,
    MenuIcon,
    GlobeAltIcon,
    UsersIcon,
    UserCircleIcon,
   ViewGridIcon,
} from '@heroicons/react/solid';



function Design({designResults}) {
   


const router = useRouter();

   //ES6 destructuring 
  
   const{noOfBedRooms,
        noOfBathRooms,
         noOfMP,
         location, 
         noOfRooms}  = router.query;

 

 
   //const formattedStartDate = format(new Date(startDate),"dd MMMM yy");  //install npm install --save react date-fns ( may crash again ?! ) 
   return  (

       <div>
           <Header placeholder={`${location}| ${noOfRooms} rooms`}/>

           
           <main className=' text-blue-800'>
              <section >
                <h1 className="text-3xl py-3 font-semibold">Houses in {location} with {noOfRooms} rooms</h1>
             
                <div className="px-4 py-2 space-y-3 flex-grow " >
                <h2 className="flex-grow text-2xl py-3 flex items-center ">Number of bedrooms
                <ViewGridIcon  className="h-5 px-3"/>
                   <input 
                    value={noOfBedRooms}
                    onChange={(e)=>setNoOfBedRooms(e.target.value)}
                    type="number" 
                    min={1}
                    className="input"/>

                </h2 > 
                <p className="flex-grow text-2xl py-3 flex items-center">Number of bathrooms
                <ViewGridIcon  className="h-5 px-3"/>
                   <input 
                    value={noOfBathRooms}
                    onChange={(e)=>setNoOfBathRooms(e.target.value)}
                    type="number" 
                    min={1}
                    className="input"/>

                </p>
                <p className="flex-grow text-2xl py-3 flex items-center">MP
                <ViewGridIcon  className="h-5 px-3"/>
                   <input 
                    value={noOfMP}
                    onChange={(e)=>setNoOfMPs(e.target.value)}
                    type="number" 
                    min={30}
                    className="input"/>

                </p>
            

                
                </div>
               
                  {designResults
                  .filter(designResult => designResult.mp === noOfMP &&designResult.noRooms  === noOfRooms &&designResult.zona === location )
                  .map(({img, mp, zona, pret, noRooms, noBath}) => (   
           
                      <InfoCard
                
                         key={img}
                         img ={img }
                         mp={mp}
                         zona={zona}
                         pret ={pret}
                         noRooms={noRooms}
                         noBath={noBath}
                      />

                  ))}


              </section>
           </main>


           <Footer/>
       </div>
   )
}

export default Design

export async function getServerSideProps() {
    const designResults = await fetch("http://localhost:3000/offersAparts.json").
    then(res => res.json()
    );
    
    return {
        props: {
            designResults,
        },
    };

}