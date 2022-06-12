import React from 'react'
import {useFetch} from '../fetch/useFetch'
import Product from './Product'
const url = 'https://course-api.com/react-prop-types-example'

const Index = () => {
  const { products } = useFetch(url)
  return (
    <div>
      <h2>products</h2>
      {/* <img src={defaultImage} /> */}
      <section className='products'>
        {products.map((product) => {
          return <Product key={product.id} {...product} />
        })}
      </section>
    </div>
  )
}

export default Index