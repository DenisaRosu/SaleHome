import Image from 'next/image' 

function DesignCard({img1, img2}) {
    return(

        <div className=" grid grid-cols-2">
      
         <div className="ml-5 relative  h-60 w-50  m-2 mt-6 
        hover:scale-20
        transition transform duration-200 ease-out ">
         <Image  src={img1} 
         layout="fill"
          objectFit="cover"/>
           </div>



         <div className="ml-5 relative  h-60 w-50  m-2 mt-6 
        hover:scale-20
        transition transform duration-200 ease-out">
          <Image  src={img2} 
          layout="fill"
          objectFit="cover"/>
          </div>

          

   <div className="px-10 py-3 ">
  
    <div className="form-check gap-3 ">
      
     <input type="checkbox" className="h-5 w-5 border 
      border-gray-300 rounded-sm bg-white 
      checked:border-blue-600 focus:outline-none  
      transition duration-200 my-1 align-top checked:bg-blue-500 " />
    <label className="form-check-label inline-block text-blue-800" for="flexCheckDefault">
        Model 1
      </label>
      <input type="checkbox" className="h-5 w-5 border 
      border-gray-300 rounded-sm bg-white ml-4 
      checked:border-blue-600 focus:outline-none 
      transition duration-200 my-1 align-top checked:bg-blue-500 " />
    <label className="form-check-label inline-block text-blue-800" for="flexCheckDefault">
        Model 2
      </label>
      
    </div>
    
  </div>


         </div>
          
      
    );
       
    
}
export default DesignCard;