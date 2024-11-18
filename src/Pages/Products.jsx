import React from 'react'
import { Link } from 'react-router-dom'
import products from '../data/products'

const Products = () => {
  
  return (
    <div className="pt-28 flex flex-col justify-around items-center w-screen h-full bg-gray-50">
      <h1 className="text-3xl font-bold text-[#15516d] text-center underline decoration-double decoration-2 decoration-[#15516d] mb-8">
        All Products
      </h1>
      <div className="flex justify-around gap-3 flex-wrap h-full w-4/5">
        {products.map((product) => (
          <div
            key={product.id}
            className="h-[500px] w-[300px] bg-[#538095] mb-5 flex flex-col justify-between rounded-lg shadow-card-shadow transform hover:scale-105 transition-transform duration-300"
          >
            {/* Image Section */}
            <div className="h-[60%] w-full p-2">
              <img
                src={product.pic}
                alt='Product Pic'
                className="rounded-lg h-full w-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Product Details Section */}
            <div className="h-1/2 w-full flex flex-col justify-evenly items-start p-3 text-white">
              <h6 className="text-2xl font-semibold">{product.productName}</h6>
              <div className='flex w-full justify-between'>
                <p className="text-lg font-semibold text-[#2a4e2a]">PKR: {product.price} Rs</p>
                <p
                  className={`text-md font-semibold  ${
                    product.inStock ? 'text-[#a1eea1]' : 'text-[#992323] underline'
                  }`}
                >
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </p>
              </div>
              <div className='flex w-full justify-between'>
                <Link to={`/product/${product.id}`} className="no-underline text-white text-lg font-medium p-2 rounded-lg bg-[#0a1332] shadow-btn-shadow hover:shadow-hover-shadow focus:shadow-click-shadow ">View Product</Link>
                <button disabled={!product.inStock} className={`text-lg font-medium p-2 rounded-lg bg-[#284bb3] shadow-btn-shadow hover:shadow-hover-shadow focus:shadow-click-shadow ${product.inStock? 'cursor-pointer': 'cursor-not-allowed'} `}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

  )
}

export default Products