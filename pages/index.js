import Head from 'next/head'
import Header from "../components/Header"
import Banner from "../components/Banner"
import SmallCard from "../components/SmallCard"
import MediumCard from "../components/MediumCard"
import LargeCard from "../components/LargeCard"
import Footer from "../components/Footer"
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import data from "../public/explore.json"
import data2 from "../public/offers.json"
import image1 from '../public/imageSnow.jpeg'

export default function Home({exploreData, cardsData}) {


  return (
    <div className={styles.container}>
      <Head>
        <title>First Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


     {/*Header */}
    
      <Header />
     
      {/*Banner */}

      <Banner />

      <main className="max-w-5xl mx-auto px-5 sm:px-16 py-9">
      <section className="pt-5">
          <h2 className=" text-4xl font-semibold py-8 text-blue-800">Best places to stay!</h2>
           

       {/* Put data from server - API endpoint*/}
         
         
         <div className="grid grid-cols-1 sm:grid-cols-2
         lg:grid-cols-3
         xl:grid-cols-4">
          {exploreData?.map(({img, city, country})=>(
          <SmallCard 
          key={img}
             img ={img}
             city = {city}
             country={country}
         />
         ))}
         </div>
        
      </section>


       <section>
         <h2 className="text-4xl font-semibold py-8 text-blue-800">Latest offers
         </h2>

          <div className="flex space-x-3
          overflow-scroll"> 
          {cardsData.map(({img, mp, zona, pret}) =>(
         <MediumCard key={img} pret={pret} img={img} mp={mp} zona={zona}/>
         ))}
          </div>
      </section>

        <LargeCard 
         title= "New feature!"
         description1="Need a new design for your home?"
        description2 ="Talk to one of our designers!"
         buttonText="Contact us!"
        /> 
        

      </main>
    
     <Footer/>

    </div>
  );
}
export async function getStaticProps(){
   const exploreData = await fetch ("http://localhost:3000/explore.json").
     then (
     (res) => res.json()
   );
  

  const cardsData= await fetch ("http://localhost:3000/offers.json").
     then((res)=>
     res.json()
     );


return {
  props:{
    exploreData,cardsData
  }
}

}