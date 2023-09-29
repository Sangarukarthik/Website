import React from 'react';
import { FiSearch } from 'react-icons/fi';
 import Carousel from 'react-bootstrap/Carousel';


function Home() {
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
      {/* <div className='home-img'>
        <img src='https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F902%2Foffer-5.png&w=640&q=75' alt='img' />
        <img src='https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F903%2Foffer-4.png&w=640&q=75' alt='img' />
        <img src='https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F904%2Foffer-3.png&w=640&q=75' alt='img' />
      </div> */}

<Carousel>
      <Carousel.Item className='d-flex'>
      <img className='d-block w-25' src='https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F904%2Foffer-3.png&w=640&q=75' alt='First-slide'/>
      <img className='d-block w-25' src='https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F904%2Foffer-3.png&w=640&q=75' alt='First-slide'/>
      <img className='d-block w-25' src='https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F904%2Foffer-3.png&w=640&q=75' alt='First-slide'/>
      <img className='d-block w-25' src='https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F904%2Foffer-3.png&w=640&q=75' alt='First-slide'/>
      <img className='d-block w-25' src='https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F904%2Foffer-3.png&w=640&q=75' alt='First-slide'/>
      <img className='d-block w-25' src='https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F904%2Foffer-3.png&w=640&q=75' alt='First-slide'/>
        
        
      </Carousel.Item>
      
      
    </Carousel>


    </>
  )
}

export default Home