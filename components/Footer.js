function Footer() {
    return(

        <div className="grid grid-cols-2 mt-80 bg-blue-100">
              <div className=" mt-2 space-y-4 text-xs text-blue-800 ">
                 <h5 className="font-bold">ABOUT</h5>
                 <p>What is it</p>
                 <p>How was created</p>

              </div>
              <div className=" mt-2 mb-9 space-y-4 text-xs text-blue-800 ">
                 <h5 className="font-bold">CONTACT</h5>
                 <p>Street number</p>
                 <p>City</p>
               

              </div>

              <div className="font-bold" ></div>
        </div>    
      
    );
       
    
}
export default Footer;