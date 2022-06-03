import Search from "../pages/search"
import DesignMe from "../components/DesignMe"
import Faianta from "../components/Faianta"
import Gresie from "../components/Gresie"
import Parchet from "../components/Parchet"
import CheckBox from "../components/CheckBox"
import Header from "../components/Header"
import Footer from "../components/Footer"
import InfoCardDesign from "../components/InfoCardDesign"
import {useState} from "react";
import { useRouter, useRouterMatch } from "next/dist/client/router";
import React from 'react';
import {SearchIcon,
    MenuIcon,
    GlobeAltIcon,
    UsersIcon,
    UserCircleIcon,
   ViewGridIcon,
} from '@heroicons/react/solid';



function Interior({interiorResults, chooseResultsFaianta, chooseResultsGresie,chooseResultsParchet}) {
   
   
 


const router = useRouter();

   //ES6 destructuring 
  
   const{ img, mp, zona, pret, noRooms, noBath}  = router.query;
  
  console.log(interiorResults.noRooms)

   //const formattedStartDate = format(new Date(startDate),"dd MMMM yy");  //install npm install --save react date-fns ( may crash again ?! ) 
   return  (

       <div>
        <title>MyHOME</title>
           <Header placeholder={`${zona}| ${noRooms} rooms`}/>

           
           <main className=' text-blue-800'>
              <section >
                <h1 className="text-3xl py-3 font-semibold px-10">
                Customize this apartment in {zona} with {noRooms} bedrooms, {noBath} bathrooms and {mp} mp</h1>
             
                <div className="px-4 py-2 space-y-3 flex-grow " >
                </div>
               
                  {interiorResults.filter(interiorResult => interiorResult.mp === mp 
                  &&interiorResult.noRooms  === noRooms 
                  &&interiorResult.zona === zona
                  &&interiorResult.pret===pret)
                  .map(({img, mp, zona, pret, noRooms, noBath}) => (   
                 <DesignMe
                   
                         key={img}
                         img ={img}
                        
                      />

                  ))}
     
                
         <div className="grid grid-cols-4 shadow-2xl bg-blend-darken text-blue-800 border-9 border-blue-800">       
       
         <h1 className="text-2xl flex-center py-3 font-semibold">
         <CheckBox/>   
         </h1>

         <h1 className="text-2xl flex-center py-3 font-semibold">Your floor tiles
        {chooseResultsGresie.map(({imgG})=>(
                    <Gresie
                        key={imgG}
                        imgG={imgG}
                      
                    />
   
                  ))} 
         </h1>
         
                 
       <h1 className="text-2xl flex-center py-3  font-semibold">Your bathroom floor tiles
          
                  {chooseResultsFaianta.map(({imgF})=>(
                    <Faianta 
                        key={imgF}
                        imgF={imgF}
                      
                    />

                  ))} 
       </h1>

            
         <h1 className="text-2xl px-4 flex-center py-3 font-semibold">Your rooms tiles 
         
                  {chooseResultsParchet.map(({imgP})=>(
                    <Parchet
                        key={imgP}
                        imgP={imgP}
                      
                    />

                  ))} 
         </h1>
         
        
       </div>
        





      
              </section>
           </main>


           <Footer/>
       </div>
   )
}

export default Interior

export async function getServerSideProps() {
    const interiorResults = await fetch("http://localhost:3000/offersAparts.json").
    then(res => res.json()
    );
    

    const chooseResultsFaianta = await fetch("http://localhost:3000/faianta.json").
    then(res => res.json()
    );

    const chooseResultsGresie = await fetch("http://localhost:3000/gresie.json").
    then(res => res.json()
    );

    const chooseResultsParchet = await fetch("http://localhost:3000/parchet.json").
    then(res => res.json()
    );
    
    return {
        props: {
            chooseResultsFaianta, chooseResultsGresie, chooseResultsParchet, interiorResults
        },
    };

}