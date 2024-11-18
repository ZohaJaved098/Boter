import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products'; 
import { Link } from 'react-router-dom';
const ViewProduct = () => {
  const { id } = useParams(); 
  const product = products.find((product) => product.id === parseInt(id)); 

  if (!product) {
    return <div>Product not found</div>; 
  }

  return (
    <div className="pt-28 flex flex-col justify-center items-center w-screen h-full pb-20">
      <div className='flex justify-around items-center w-[90%] h-full' >
        <img src={product.pic} alt={product.productName} width={350} height={350} className="rounded-lg shadow-card-shadow" loading="lazy" />
        <div className='flex flex-col justify-between w-[60%] h-full' >
          <h1 className="text-3xl font-bold mb-5 text-[#154053] ">{product.productName}'s Details</h1>
          <h6 className='text-left font-bold text-xl' >Description: </h6>
          <p className='w-[90%] text-black ml-10 ' > {product.description} </p>
          <hr className='border-5 border-[#154053] my-4' />
          <div className='flex justify-evenly items-center w-full h-full' >
            <p className='font-semibold '>Price: {product.price} Rs</p>
            <p className={`font-semibold ${product.inStock? 'text-green-500': 'text-red-700'}`} >Status: {product.inStock ? 'In Stock' : 'Out of Stock'}</p>
          </div>
          <hr className='border-5 border-[#154053]' />
          <div className='flex justify-evenly items-center w-full h-full'>
          <Link to={''} className=' no-underline self-end p-3 bg-[#4a4875] rounded-lg text-white font-semibold shadow-btn-shadow hover:shadow-hover-shadow focus:shadow-click-shadow '>Add to Cart</Link>
          <Link to={'/products'} className=' no-underline self-end p-3 bg-[#19417d] rounded-lg text-white font-semibold shadow-btn-shadow hover:shadow-hover-shadow focus:shadow-click-shadow '>Go Back</Link>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ViewProduct;
