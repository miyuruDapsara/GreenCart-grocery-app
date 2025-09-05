import React from 'react'
import {categories } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

const Categories = () => {

  const navigate=useAppContext();

  return (

    <div className='mt-16'>
      <p className='text-2xl md:text-3xl font-medium'>categories</p>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 mt-6 gap-6'>

      {categories.map((category,index)=>(
         <div className="group cursor-pointer py-6 px-3 gap-2 rounded-b-lg flex flex-col" key={index}
         style={{backgroundColor:category.backgroundColor}} onClick={()=>{
          navigate(`/products/${category.text.toLowerCase()}`);
          scrollTo(0,0)
         }}>
          
           <img
             src={category.image}
             className="group-hover:scale-108 transition max-w-28"
             alt={category.text}
           />
           <p className="text-sm font-medium">{category.text}</p>
         </div>
      ))}

      </div>
    </div>
  )
}

export default Categories


//1.10.23