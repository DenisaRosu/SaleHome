import Image from 'next/image' 
import image1 from '../public/imageRar.jpg'
import {SearchIcon,
    MenuIcon,
    GlobeAltIcon,
    UsersIcon,
    UserCircleIcon,
   ViewGridIcon,
} from '@heroicons/react/solid';
import format from 'date-fns/format';

import {useState} from "react";
//import for the calendar 
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { DateRangePicker } from 'react-date-range';
import { useRouter } from "next/dist/client/router";


function Header({placeholder}){

  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate]=useState(new Date());
  const [endDate, setEndDate]=useState(startDate);
  const [noOfRooms, setNoOfRooms]=useState(1);
  const router = useRouter();
   
  const selectionRange={
    startDate: startDate,
   endDate: endDate,
    key:"selection"
  };
// a lot  of arrow functions in this code, o ES6 JavaScript coding 
  //function for reset button ( cancel button )
  const resetInput= () => {
     setSearchInput("");
   };
  
  const save = ()=>{
  // router.push('/search')
  router.push({
    pathname:'/search',
    query: {
       location:searchInput,
       startDate: startDate.toISOString(),
       noOfRooms,
      
    }
  })
  }
  

  //function for handling the changes in calendar 
  const handleSelect= (ranges )=> {
     setStartDate(ranges.selection.startDate);
     setEndDate(ranges.selection.startDate);
  };



    return(
    <header className=" sticky top-0 z-10
    grid grid-cols-3
   row-start-2
    bg-blue-100 shadow-md 
    py-1 ">
  

        {/*left  */    /* on click on the image-> back to the home screen */}

        <div onClick={ () => router.push("/")}
        className='realtive flex items-center h-20
        cursor-pointer my-auto ' >
          <Image
          src = {image1}
          width={180} height={160}
          layout="fixed"
          objectFit="contain"
          objectPosition ="left"
          />
        </div>    
      
       {/*middle */}
         
        <div className=" flex items-center  
        sm:border-4
        border border-blue-300
        h-10 
        px-4
        pz-1
        md:shadow-sm
        ">
     <SearchIcon objectposition ="left" className="h-10
       
           inline-flex
            bg-blue-300 
            text-white
            p-2
            cursor-pointer
           
            "/>
       
        <input  
        value={searchInput}
        onChange={(e)=>setSearchInput(e.target.value)}
        type="text" 
          className="relative flew-grow bg-transparent outline-none
             text-xl
             text-blue-800
            font-bold
             py-10
             placeholder-blue-800
             px-1
             
            
           sm:inline-flex
          "
        placeholder ={placeholder || "I want to live in.."}/>
    
   
            
        </div>  

   
       {/*right*/}
        <div
        className="flex items-center
        space-x-3
        justify-end
        text-blue-800
        ">

        
         
      <div onClick={ () => router.push("/")}
      className="flex items-center
      space-x-2 border-2 p-10
      "> <p className="hidden md:inline font-bold ">  </p>
       <GlobeAltIcon
       className="h-6
      cursor-pointer "  />
      </div>  
      
    </div>

    <div className="flex flex-col col-span-3 mx-auto
    text-md h-10
             text-blue-800
             font-bold    
            
   " >
     <h1>Search for the city where you want to live!</h1>
    </div>

 {/*if there is a search input: */}
  
   {searchInput && (
    <div className="flex flex-col col-span-3 mx-auto font-bold  text-blue-800">
     <h1 className="px-3 py-2">When would you like to have your apartamnet done?</h1> 
   <DateRangePicker class="relatives "
   
     ranges={[selectionRange]}
     minDate={new Date()}
     rangeColors={["#1e40af"]}
     onChange={handleSelect}
     showDateDisplay={false}
    /> 
    <div className="flex items-center border-blue-800 mb-2 ">
      <h2 className=" text-2xl flex-grow 
      py-3
      " >Number of rooms </h2>

      <ViewGridIcon  className="h-5"/>
      <input 
      value={noOfRooms}
      onChange={(e)=>setNoOfRooms(e.target.value)}
      type="number" 
      min={1}
      className="w-12 pl-3 text-md 
      outline-none "/>

    
     </div>    
     
        <div className=" px-3 flex space-x-10" >
       <button onClick={save} className="  flex-grow bg-blue-200 md:border-4  border border-blue-300" >Save</button>
       <button onClick={resetInput} className="flex-grow  bg-blue-200  md:border-4  border border-blue-300" >Cancel</button>
       <h1></h1>
        </div>
    </div>
  )}    
  </header>
    )
}

export default Header