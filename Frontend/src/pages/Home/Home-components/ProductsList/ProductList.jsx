import React, { useEffect } from 'react'
import './ProductList.css'

const ProductList = ({ products }) => {

    // const fetchProducts = 


    useEffect(() => {

    }, [])

    return (
        <div className='product-list-container'>
            <div className="productList">
                {
                    products.map((product, index) => (
                        <div className='product' key={index}>
                            <div className="product-image-container">
                                <p className="product-discount">-{product.discount}%</p>
                                <div className="product-image">
                                    <img className='product-img' src={product.imglink} width={172} height={152} alt={product.name} />
                                </div>
                            </div>
                            <p className="product-name">{product.name}</p>
                            <div className="product-prices">
                                <p className='product-price'>${product.price}</p>
                                <p className='product-original-price'>${product.originalPrice}</p>
                            </div>
                        </div>
                    ))

                }
            </div>
        </div>
    )
}

export default ProductList