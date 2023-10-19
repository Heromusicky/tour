import { useEffect, useState } from "react";
import Tours from "./Tours";
import Loading from "./Loading";



const url = 'https://course-api.com/react-tours-project';



const App = () => {



const [isLoading,setIsLoading]=useState(true)
const [tours,setTours]=useState([])


const removeTours= (id)=>{

  const newTours = tours.filter((tour)=>tour.id!==id)
  setTours(newTours)
}

const fetchTours =async()=>{
  setIsLoading(true)

  try {
    const response = await fetch(url)
    const tours = await response.json()
    setTours(tours);
    ;
    
  } catch (error) {
    console.log(error)
    
  }
  setIsLoading(false)
}

useEffect(()=>{fetchTours()},[])
if (isLoading) {
  return <Loading/>
}
if(tours.length===0){

  return<main><div className="title"><h2>Refresh List</h2>
  
  <button className="btn" onClick={()=>{fetchTours()}}>Refresh</button></div>
  

  </main>
}
  return<main><Tours tours={tours} removeTours={removeTours}/></main>
  };
export default App;
