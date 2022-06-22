import React  from 'react';
import Tour1 from "../src/Tour1"
const Tours = ({tour,removeTour}) => {
  

 return <>
 <section className="container1">
    <h2 className='head'>Our Tours</h2>
  <div className="underline">
 </div>
  {tour.map((tour)=>{
    return <Tour1 key={tour.id}  {...tour} removeTour={removeTour}/>
  })}
    </section> 
 </> 
  
}

export default Tours;
