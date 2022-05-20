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



function Interior({interiorResults, chooseResults}) {
   
   
   const save = ()=>{
  // router.push('/search')
  router.push({
    pathname:'/final',
    query: {
    
       img, mp, zona, pret, noRooms, noBath, img2, img1
      
    }
  })
  }



const router = useRouter();

   //ES6 destructuring 
  
   const{ img, mp, zona, pret, noRooms, noBath}  = router.query;
  

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


                  {chooseResults?.map(({img1, img2})=>(
                    <DesignCard 
                       key={img2}
                       img1={img1}
                       img2={img2}
                       
                    />

                  ))} 

      <button onClick={save} className="ml-10 mt-9 py-4 button">Now the final apartment!</button>
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
    

    const chooseResults = await fetch("http://localhost:3000/design.json").
    then(res => res.json()
    );
    
    return {
        props: {
            chooseResults,interiorResults
        },
    };

}