import React, { useState, useEffect } from 'react'
import dataf from './data/dataf';

function Productss() {
  const [productsData, setproductsData] = useState(dataf)
  return (
    <>
      {productsData.map((productData)=>{
        const{price,name,url}=productData;
        return(
          <article className='product'>
          <img src={url} alt={name} />
          <h4>{name}</h4>
          <p>${price}</p>
        </article>
        );
      })}
    </>
  );
}

export default Productss;