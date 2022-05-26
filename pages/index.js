import Head from 'next/head'
import Header from "../components/Header"
import Banner from "../components/Banner"
import SmallCard from "../components/SmallCard"
import MediumCard from "../components/MediumCard"
import LargeCard from "../components/LargeCard"
import Footer from "../components/Footer"
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import exploreData from "../public/explore.json"
import cardsData from "../public/offers.json"
import {useState, useEffect} from "react";

import image1 from '../public/imageSnow.jpeg'

export default function Home({exploreData, cardsData,dataPlaces}) {




  return (
    <div className={styles.container}>
     
      <Head>
        <title>MyHOME</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>







     {/*Header */}
    
      <Header />
     
      {/*Banner */}

      <Banner />

      <main className="max-w-5xl mx-auto px-5 sm:px-16 py-8">
      <section className="pt-5">
          <h2 className=" text-4xl font-semibold py text-blue-800">Best places to live! </h2>
            <h2 className=" text-2xl font-semibold  text-blue-800">You can find the places where are our residential complex </h2>
           
 
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
         <h2 className="text-4xl font-semibold py-5 text-blue-800">Latest offers
         </h2>

          <div className="flex space-x-3
          overflow-scroll"> 
          {cardsData.map(({img, mp, zona, pret}) =>(
         <MediumCard key={img} pret={pret} img={img} mp={mp} zona={zona}/>
         ))}
          </div>
      </section>


      </main>
    
     <Footer/>

    </div>
  );
}
export async function getServerSideProps(){   //before:getStaticProps
   const exploreData = await fetch ("http://localhost:3000/explore.json").
     then (
     (res) => res.json()
   );
  

  const cardsData= await fetch ("http://localhost:3000/offersAparts.json").
     then((res)=>
     res.json()
     );

const dataPlaces= await fetch ("http://localhost:3000/places.json").
     then((res)=>
     res.json()
     );

return {
  props:{
    exploreData,cardsData,dataPlaces
  }
}

}
