import Search from "../pages/search"
import FinalImage from "../components/FinalImage"
import FinalBaie from "../components/FinalBaie"
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



function FinalAp({finalResults}) {
   


const router = useRouter();

   //ES6 destructuring 
  
   const{checked, checkedItems, img, mp, zona, pret, noRooms, noBath, check1F, check2F,  check1P, check2P, check1G, check2G }  = router.query;

checked.sort();

console.log(checked)

    return  (

       <div>
        
           <title>MyHOME</title>
           <Header placeholder={`${zona}| ${noRooms} rooms`}/>

           
           <main className=' text-blue-800'>
              <section >
                <h1 className="text-3xl py-5 font-semibold px-10">
                This is your final apartament in {zona} with {noRooms} bedrooms, {noBath} bathrooms and {mp} square meters</h1>
             
                <div className="px-4 py-2 space-y-3 flex-grow " >
                </div>

                 <h1 className="text-2xl py-3 font-semibold px-10">
              Your choice for the floors </h1>
             
               
                  {finalResults.filter(finalResult => finalResult.mp === mp 
                  &&finalResult.zona === zona
                  &&finalResult.pret===pret
                  &&finalResult.modelulFaianta === checked[0]
                  &&finalResult.modelulGresie === checked[1]
                   &&finalResult.modelulParchet=== checked[2]
                  )
                  .map(({img, mp, zona, pret, noRooms, noBath, imgFinal, baie}) => (   
                 <FinalImage
                   
                         key={imgFinal}
                         imgFinal ={imgFinal}
                         
                        
                      />

                
               

                  ))}
         <h1 className="text-2xl py-3 font-semibold px-10">
              Your choice for the bathroom </h1>
             
                 
                  {finalResults.filter(finalResult => finalResult.mp === mp 
                  &&finalResult.zona === zona
                  &&finalResult.pret===pret
                  &&finalResult.modelulFaianta === checked[0]
                  &&finalResult.modelulGresie === checked[1]
                   &&finalResult.modelulParchet=== checked[2]
                  )
                  .map(({img, mp, zona, pret, noRooms, noBath, imgFinal, baie}) => (   
                 <FinalBaie
                   
                         key={baie}
                         baie ={baie}
                         
                        
                      />
                       

                  ))}


                  

             </section>
           </main>


           <Footer/>
       </div>
   )
}

export default FinalAp

export async function getServerSideProps() {
    const finalResults = await fetch("http://localhost:3000/final.json").
    then(res => res.json()
    );
    
    
    return {
        props: {
            finalResults
        },
    };

}