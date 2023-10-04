import React, { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiMinus } from 'react-icons/bi';
import { HiMiniShoppingBag } from 'react-icons/hi2';
// import { slide as Menu } from 'react-burger-menu';

const Data = [
  {
    id: '1',
    img: 'https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1%2FApples.jpg&w=1920&q=75',
    discount: '20%',
    price: '$1.60',
    fruit: 'Apples'
  },
  {
    id: '2',
    img: 'https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2%2FBabySpinach.jpg&w=1920&q=75',
    discount: '10%',
    price: '$0.60',
    fruit: 'Baby Spinaach'
  },
  {
    id: '3',
    img: 'https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F3%2Fblueberries.jpg&w=1920&q=75',
    discount: '13%',
    price: '$3.00',
    fruit: 'Blueberries'
  },
  {
    id: '4',
    img: 'https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F4%2FBrusselsSprouts.jpg&w=1920&q=75',
    discount: '40%',
    price: '$3.00',
    fruit: 'Brussels Sprout'
  },
  {
    id: '5',
    img: 'https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F5%2FCelerySticks.jpg&w=1920&q=75',
    discount: '17%',
    price: '$5.00',
    fruit: 'Celery stick '
  },
  {
    id: '6',
    img: 'https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F10%2FDates.jpg&w=1920&q=75',
    discount: '20%',
    price: '$8.00',
    fruit: 'Dates'
  },
  {
    id: '7',
    img: 'https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F273%2Fdog_food_black_hawk_adult_all_breeds_lamb%2526rice.jpg&w=1920&q=75',
    discount: '20%',
    price: '$25.00',
    fruit: 'Black Hawk Adult Lamb Rice'
  },
  {
    id: '8',
    img: 'https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F183%2FSignatureSalmon_fstp4m.jpg&w=1920&q=75',
    discount: '15%',
    price: '$5.00',
    fruit: 'Signature Salmon'
  },
  {
    id: '9',
    img: 'https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F413%2Fgarnier_pure_active.jpg&w=1920&q=75',
    discount: '5%',
    price: '$2.00',
    fruit: 'Garnier Pure Active'
  },
]


function Home() {
  const [list, setList] = useState([])
  useEffect(() => {
    setList([...Data])
  }, [])

  const [counter,setCounter] = useState(0)
  const onIncrementClick = ()=>{
    setCounter(counter + 1)
  }
  const  onDecrementClick = ()=>{
    if(counter > 0){
      setCounter(counter-1)
    }
  }
  return (
    <>
      <div className='home'>
        <h1 className='home-text'>Groceries Delivered in 90 Minute</h1>
        <p className='home-para text-center'>Get your healthy foods & snacks delivered at your doorsteps all day everyday</p>
        <form class="form-inline home-search d-flex text-center">
          <input class="form-control home-input " type="search" placeholder="Search your products from here" aria-label="Search" />
          <button class="btn btn-outline-success btn-lg home-btn d-flex" type="submit"><span className='px-2'><FiSearch /></span> Search</button>
        </form>
      </div>
    
      <div className='d-flex'>
        <div className='sidebar'>
          <ul>
            <li><a className='menu-items' href='/'>Fruits & Vegetables</a> </li>
            <li><a className='menu-items' href='/'>Meat & Fish</a></li>
            <li><a className='menu-items' href='/'>Snacks</a></li>
            <li><a className='menu-items' href='/'>Pet Care</a></li>
            <li><a  className='menu-items'href='/'>Home & Cleaning</a></li>
            <li><a className='menu-items' href='/'>Dairy</a></li>
          </ul>
        </div>

        <div className='item d-flex justify-content-center align-item-center pt-2'>
          {list.map((item) => {
            return (
              <div className='card pt-4'>
                <p className='home-discount'>{item.discount}</p>
                <img className='home-img' src={item.img} alt='' />
                <div class="card-body">
                  <h5 class="card-title">{item.price}</h5>
                  <p class="card-text">{item.fruit}</p>
                </div>
                <div className='d-flex'>
                  <button onClick={onDecrementClick} className='mb-3 count-btn btn btn-lg'><BiMinus /></button>
                  <button className='mb-3 count-btn btn btn-lg'>Add</button>
                  <button onClick={onIncrementClick} className='mb-3  count-btn btn btn-lg'><AiOutlinePlus /></button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <button className='btn btn-lg fixed-btn mb-3'>
        <HiMiniShoppingBag className='home-icon pb-1' /> 0 Items<br /><br />
        <span className='span-text'>${counter}</span>
      </button>

    </>
  )
}

export default Home