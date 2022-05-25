import Search from "../pages/search"

import Header from "../components/Header"
import Footer from "../components/Footer"
import InfoCardDesign from "../components/InfoCardDesign"
import {useState} from "react";
import { useRouter, useRouterMatch } from "next/dist/client/router";

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

 

 console.log ( noOfMP)
   //const formattedStartDate = format(new Date(startDate),"dd MMMM yy");  //install npm install --save react date-fns ( may crash again ?! ) 
   return  (

       <div>
         <title>MyHOME</title>
           <Header placeholder={`${location}| ${noOfRooms} rooms`}/>

           
           <main className=' text-blue-800'>
              <section >
                <h1 className="text-3xl py-3 font-semibold">
                Houses in {location} with {noOfBedRooms} bedrooms, {noOfBathRooms} bathrooms and {noOfMP} mp</h1>
             
                <div className="px-4 py-2 space-y-3 flex-grow " >
                
  
                
                </div>
               
                  {designResults
                  .filter(designResult =>designResult.noRooms  === noOfBedRooms 
                  && (noOfMP -10  <= designResult.mp  && designResult.mp <= noOfMP +10 )
                  &&designResult.zona === location )
                  .map(({img, mp, zona, pret, noRooms, noBath}) => (   
                 <InfoCardDesign
                   
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