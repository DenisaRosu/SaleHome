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



function Search({searchResults}) {
   

const [noOfBedRooms, setNoOfBedRooms]=useState(1);
const [noOfBathRooms, setNoOfBathRooms]=useState(1);
const [noOfMP, setNoOfMPs]=useState(1);

const router = useRouter();
const save = ()=>{
  // router.push('/search')
  router.push({
    pathname:'/design',
    query: {
       noOfBedRooms,
        noOfBathRooms,
         noOfMP,
         location, 
         noOfRooms,

      
    }
  })
  }

   //ES6 destructuring 
  
   const{startDate, location, noOfRooms}  = router.query;

   //const filtered = router.query.filter(noOfRooms ===)
    
  //const sameNoOfRooms = searchResults.filter(searchResult => searchResult.noRooms === noOfRooms);
  //console.log(sameNoOfRooms);


   const formattedStartDate = format(new Date(startDate),"dd MMMM yy");  //install npm install --save react date-fns ( may crash again ?! ) 
   return  (

       <div>
           <Header placeholder={`${location} | ${formattedStartDate}| ${noOfRooms} rooms`}/>

           
           <main className=' text-blue-800'>
              <section >
              <p className="text-xm py-3">Meet with us on {formattedStartDate}</p>
              <p className="text-xm py-3">Number of possible houses to be done on {formattedStartDate}</p>
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
                    min={1}
                    className="input"/>

                </p>
            

                 <button onClick={save} className="">SEARCH!</button>
                
                </div>
               
                  {searchResults.filter(searchResult => searchResult.noRooms === noOfRooms && searchResult.zona === location ).map(({img, mp, zona, pret, noRooms, noBath}) => (   
           
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

export default Search 

export async function getServerSideProps() {
    const searchResults = await fetch("http://localhost:3000/offersAparts.json").
    then(res => res.json()
    );
    
    return {
        props: {
            searchResults,
        },
    };

}