import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import bayern from '../../../assets/1.png'
import bayern2 from '../../../assets/2.png'
import bayern3 from '../../../assets/3.png'
import { FaCalendarWeek } from 'react-icons/fa';

const LeftSideNav = () => {
const [categories, setCategories] = useState([])

useEffect ( () =>{
  fetch('categories.json')
  .then(res => res.json())
  .then(data => setCategories(data))
}, [])

  return (
    <>
    <div className='space-y-4'>
      <h2 className='text-2xl font-bold'>All Categories</h2>
      <h2 className='text-xl font-bold bg-base-200 h-16 pl-4 pt-5'>National News</h2>
      {
        categories.map(category => <Link 
          className='block ml-4 text-xl' 
          key={category.id}
          to={`/category/${category.id}`}
          >
            <p className='text-base-400 mb-8 mt-8'>{category.name}</p>
            </Link>)
      }
      <h2 className='pl-4 text-xl'>All News</h2>
    </div>
    
    <div className="">
      <img className='mt-8' src={bayern} alt="" />
      <h2 className='text-xl font-bold mt-4'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
      <p className=' mt-4 mb-2 flex gap-4'>Sports
      <FaCalendarWeek />
       October 14, 2024</p>
    </div>
    <div className="">
      <img className='mt-8' src={bayern3} alt="" />
      <h2 className='text-xl font-bold mt-4'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
      <p className=' mt-4 mb-2 flex gap-4'>Sports
      <FaCalendarWeek />
       October 14, 2024</p>
    </div>
    <div className="">
      <img className='mt-8' src={bayern2} alt="" />
      <h2 className='text-xl font-bold mt-4'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
      <p className=' mt-4 mb-2 flex gap-4'><span className='font-bold'>Sports</span>
      <FaCalendarWeek />
       October 14, 2024</p>
    </div>
    </>
  )
}

export default LeftSideNav