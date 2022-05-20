import Search from "../pages/search"
import DesignMe from "../components/DesignMe"
import DesignCard from "../components/DesignCard"
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
  
   const{ img, mp, zona, pret, noRooms, noBath, img2,img1}  = router.query;

 console.log(imgFinal)
   //const formattedStartDate = format(new Date(startDate),"dd MMMM yy");  //install npm install --save react date-fns ( may crash again ?! ) 
   return  (

       <div>
           <Header placeholder={`${zona}| ${noRooms} rooms`}/>

           
           <main className=' text-blue-800'>
              <section >
                <h1 className="text-3xl py-3 font-semibold">
                Customize this apartment in {zona} with {noRooms} bedrooms, {noBath} bathrooms and {mp} mp</h1>
             
                <div className="px-4 py-2 space-y-3 flex-grow " >
                </div>
               
                  {finalResults.filter(finalResult => finalResult.mp === mp 
                  &&finalResult.zona === zona
                  &&finalResult.pret===pret)
                  .map(({img, mp, zona, pret, noRooms, noBath, imgFinal}) => (   
                 <DesignMe
                   
                         key={imgFinal}
                         imgFinal ={imgFinal}
                        
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