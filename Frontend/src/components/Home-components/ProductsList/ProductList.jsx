import { Divide } from 'lucide-react'
import React, { useEffect } from 'react'

const ProductList = () => {



    // const fetchProducts = 

    const products = [
        { id:1, name: "HAVIT HV-G92 Gamepad", price: 120, originalPrice: 160, imglink: "" },
        {id:2, name: "AK-900 Wired Keyboard", price: 960, originalPrice: 1160, imglink: "" },
        {id:3, name: "HAVIT HV-G92 Gamepad", price: 370, originalPrice: 400, imglink: "" },
        {id:4, name: "HAVIT HV-G92 Gamepad", price: 375, originalPrice: 400, imglink: "" },
    ]

    useEffect(() => {

    }, [])

    return (
        <div>
            <div className='product-header'>
                <p>Today's</p>
                <div className="product-sales">
                    <h2>Flash Sales</h2>
                    <div className='countdown'>

                    </div>

                    {
                        products.map((index,product) => {
                            <div key={index} >
                                <div className="product-image">
                                    <img src={product.imglink} alt="" />
                                </div>
                                <p className="product-name">{product.name}</p>
                                <div className="product-prices">
                                    <p>{product.price}</p>
                                    <p>{product.originalPrice}</p>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductList