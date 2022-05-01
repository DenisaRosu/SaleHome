import Header from "../components/Header"
import Footer from "../components/Footer"
import InfoCard from "../components/InfoCard"
import { useRouter } from "next/dist/client/router";
import { format } from 'date-fns';

function Search({searchResults}) {
   

   //ES6 destructuring 
   const router = useRouter();
   const{startDate, location, noOfRooms}  = router.query;
 
   const formattedStartDate = format(new Date(startDate),"dd MMMM yy");  //install npm install --save react date-fns ( may crash again ?! ) 
   return  (

       <div>
           <Header placeholder={`${location} | ${formattedStartDate}| ${noOfRooms} rooms`}/>


           
           <main className='flex text-blue-800'>
              <section >
              <p className="text-xm py-3">Meet with us on {formattedStartDate}</p>
              <p className="text-xm py-3">Number of possible houses to be done on {formattedStartDate}</p>
             <h1 className="text-3xl py-3 font-semibold">Houses in {location} with {noOfRooms} rooms</h1>
             
                <div className="px-4 py-2 space-y-3" >
                <p className="button ">Number of bedrooms</p>
                <p className="button">Number of bathrooms</p>
                <p className="button">MP</p>
                <p className="button">Terance/balcony</p>
                </div>

                  {searchResults.map(({img, mp, zona, pret, noRooms, noBath}) => (   

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