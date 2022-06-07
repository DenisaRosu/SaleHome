import Image from 'next/image' ;
import {useState} from "react";
import { useRouter } from "next/dist/client/router";

function CheckBox({}) {


 
    const save = ()=>{
  // router.push('/search')
  router.push({
    pathname:'/final',
    query: {
       checked, checkedItems, check1F,check2F,check1G,check2G,check1P,check2P,img, mp, zona, pret, noRooms, noBath
      
    }
  })
  }
 const router = useRouter();
   const{ img, mp, zona, pret, noRooms, noBath}  = router.query;



  //model de componenta functionala 
  //ES6 arrow functions
   const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

   const [checked, setChecked] = useState([]);
const checkList = ["Model faianta 1", "Model faianta 2","Model gresie 1","Model gresie 2", "Model parchet 1", "Model parchet 2"];

const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + ", " + item;
      })
    : "";
var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";



const check1F = checked[0];
const check2F = checked[1];
const check1G = checked[2];
const check2G = checked[3];
const check1P = checked[4];
const check2P = checked[5];



    return(

         <div className="px-10 py-3 ">
  
    <div className="form-check gap-5  ">
      
       <div className="checkList">
    <div className="title py-4">Models:</div>
    <div className="list-container mb-20">
      {checkList.map((item, index) => (
          <div className="mb-10" key={index}>
              <input value={item} type="checkbox" onChange={handleCheck} />
              <span className={isChecked(item)}>{item}</span>
            </div>
          ))}
      
    </div>
  </div>



     
      
    </div>

    <button onClick={save} className=" ml-10 mt-9 py-4 button px-10  md:border-4  border border-blue-300" >Save</button>
      
    
  </div>
  
  
    );
       



}
export default CheckBox;