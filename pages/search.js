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
   
   console.log(startDate);


   //console.log(sameNoOfRooms);


   const formattedStartDate = format(new Date(startDate),"dd MMMM yy");  //install npm install --save react date-fns ( may crash again ?! ) 
   console.log(formattedStartDate);
   return  (

       <div>
        <title>MyHOME</title>
           <Header placeholder={`${location} | ${formattedStartDate}| ${noOfRooms} rooms`}/>
 
           
           <main className=' text-blue-800'>
              <section >
              <p className="text-xm py-3">Apartments to be done until {formattedStartDate}</p>
             <h1 className="text-3xl py-3 font-semibold">Apartments in {location} with {noOfRooms} rooms</h1>
            
             {searchResults.filter(searchResult => searchResult.noRooms === noOfRooms 
             && searchResult.zona === location 
             && searchResult.dateDone === formattedStartDate   
             ).map(({img, mp, zona, pret, noRooms, noBath, complex}) => (   
           
                      <InfoCard
                
                         key={img}
                         img ={img }
                         zona={zona}
                         pret ={pret}
                         complex={complex}
                      />

                  ))}

            <h1 className="text-3xl py-3 font-semibold">Now let's customize your future home </h1>
            
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
                <p className="flex-grow text-2xl py-3   flex items-center">Square meters 
                 <p className="flex-grow text-1xl py-3 px-2 flex items-center"> (+-10)
                <ViewGridIcon  className="h-5 px-3"/>
                   <input 
                    value={noOfMP}
                    onChange={(e)=>setNoOfMPs(e.target.value)}
                    type="number" 
                    min={30}
                    className="input"/>

                </p>
                </p>
            

                 <button onClick={save} className="ml-6 px-20 button">SEARCH!</button>
                
                </div>
               
                  


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