import React, { useContext, useEffect, useState } from 'react'
import Hero from './Home-components/Hero/Hero'
import './Home.css'
import ProductList from './Home-components/ProductsList/ProductList'
import Categories from './Home-components/Categories/Categories'
import { Camera, Computer, GamepadIcon, Headphones, Smartphone, Watch } from 'lucide-react'
import axios from 'axios'
import {StoreContext} from '../../Context/StoreContext'

const Home = () => {

  const [products, setProducts] = useState()
  const { url } = useContext(StoreContext)

  const fetchProducts = async () => {
    try {
      const response = await axios.get(url + '/product/get-products')
      if (response.data.success) {
        console.log(response.data)
        setProducts(response.data.products)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    console.log("Hello effect")
    fetchProducts()
    console.log(products)
  }, [])

  if (!products) return <div>Loading...</div>

  // const products = [
  //   { id: 1, name: "HAVIT HV-G92 Gamepad", price: 120, originalPrice: 160, imglink: "5d5c2e5250752d55f8b60f2aa2923183dadbc135.png", discount: 40 },
  //   { id: 2, name: "AK-900 Wired Keyboard", price: 960, originalPrice: 1160, imglink: "e59d9f348cc24eeff489863523b63971c3ff8e4a.png", discount: 35 },
  //   { id: 3, name: "IPS LCD Gaming Monitor", price: 370, originalPrice: 400, imglink: "5e634682db5174aff99bb9337d2dc9598a0b44e4.png", discount: 30 },
  //   { id: 4, name: "S-Series Comfort Chair ", price: 375, originalPrice: 400, imglink: "e59d9f348cc24eeff489863523b63971c3ff8e4a.png", discount: 25 },
  // ]

  const categories = [
    { name: "Phones", icon: <Smartphone size={40} /> },
    { name: "Computers", icon: <Computer size={40} /> },
    { name: "Smartwatches", icon: <Watch size={40} /> },
    { name: "Camera", icon: <Camera size={40} /> },
    { name: "Headphones", icon: <Headphones size={40} /> },
    { name: "Gaming", icon: <GamepadIcon size={40} /> }
  ]


  return (
    <div className='home'>

      <Hero />

      <div className="home-product-list">
        <div className='product-header'>
          <div className="product-icon"></div>
          <p>Today's</p>
        </div>
        <div className="product-sales">
          <h2>Flash Sales</h2>
          <div className='countdown'>

          </div>
        </div>
        <ProductList products={products} />
        <div className="all-product-btn">
          <button>View All Products</button>
        </div>
      </div>

      <div className="home-categories">
        <div className='product-header'>
          <div className="product-icon"></div>
          <p>Categories</p>
        </div>
        <h1>Browse By Categories</h1>
        <Categories categories={categories} />
      </div>
    </div>
  )
}

export default Home