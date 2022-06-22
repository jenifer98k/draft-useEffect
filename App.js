 import React ,{useState,useEffect} from 'react';
 import Tours from "../src/Tours"
 import Loading from '../src/Loading';
 import Data from "./Data"
function App() {
  const [loading, setLoading] = useState(true);
  const [tour, setTour] = useState(Data);
 const removeTour=(id)=>{
  const newTours=tour.filter((tour)=> tour.id !== id);
  setTour(newTours)
 }
 const fetchTour=async () =>{
 setLoading(true)
try{
  setLoading(false)
  setTour(tour)
}catch(error){
  setLoading(false)
  console.log(error)
}
 }
 useEffect(()=>{
  fetchTour()
 },[])
 
 
 
 
  if(loading){
    return ( 
<h1><Loading /></h1>     );
  }
 if(tour.length === 0){
  return  <div className="title">
      <h2> No Tours left</h2>
      <button className='btn-ref' onClick={fetchTour}>Refresh</button>
    </div>
  
 }
  
  return <>
 <Tours  tour={tour} removeTour={()=>removeTour()}/>
  </>
}

export default App;
