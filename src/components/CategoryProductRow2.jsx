
import React from 'react'
import '../styles/CategoryProductRow.css'
import { ProductRow2 } from './ProductRow2'

function CategoryProductRow2( props ) {
    const title = props.title
    const list = props.list
    return (
    <div className='category-container'>
        <div className='category-title'>
            {title}
        </div>
        <div className='category-body'>
            {list.map((product)=> 
                <ProductRow2 
                name = {product.name} 
                type = {product.type} 
                dimension = {product.dimension} 
                />)}  
        </div>
    </div>
  )
}

export { CategoryProductRow2 }