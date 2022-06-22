import React,{useState} from 'react';

const Tour1 = ({id,img,about, price,name,removeTour}) => {
  const [readMore , setReadMore] = useState(false);
  return (<>
    <article className='container'>
<img src={img}  alt={name}/>
<footer>
  <div className="about">
    <h4>{name} </h4>
<h4 className="price">$500</h4>
 </div>
 <p>{ readMore ? about :`${about.substring(0,200)}...` }
 <button className='btn-read' onClick={()=>(setReadMore(!readMore))}>
  {readMore ? 'showLess' : "showMore"}
  </button></p>
 <div className='btn1'>
 <button className='btn' onClick={()=>removeTour(id)}>Not Interested</button>
 </div>

</footer>
   </article> <br></br> <br></br> <br></br>
  </>
 
  );
}

export default Tour1;

