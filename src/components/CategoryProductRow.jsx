import React from 'react'
import '../styles/CategoryProductRow.css'
import { ProductRow } from './ProductRow'

function CategoryProductRow() {
    const title = 'Electronics'
    return (
    <div className='category-container'>
        <div className='category-title'>
            {title}
        </div>
        <div className='category-body'>
        <ProductRow/>
        <ProductRow/>
        <ProductRow/>  
        </div>

    </div>
  )
}

export { CategoryProductRow }